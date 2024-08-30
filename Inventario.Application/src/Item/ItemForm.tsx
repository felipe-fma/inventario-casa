import React, { SyntheticEvent, useState } from 'react';
import { Item } from "./Item";
import { ItemAPI } from './ItemAPI';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Alert, ButtonGroup, Col, Row, Spinner, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface ItemFormProps {
    item: Item;
}

function ItemForm({ item: initialItem }: ItemFormProps) {
    const [loading, setLoading] = useState(false);
    const [item, setItem] = useState(initialItem);
    const [errors, setErrors] = useState({
        name: '',
        categoric: '',
        minimal_amount: '',
    });

    async function onSave(item: Item) {
        setLoading(true);
        try {
            if (item.id! > 0) {
                await ItemAPI.put(item)
                    .then(() => {
                        setLoading(false);
                    })
                    .catch((e) => {
                        console.log(e.message);
                        setLoading(false);
                    });
            }
            else {
                await ItemAPI.post(item)
                    .then((data) => {
                        setItem(data);
                        setLoading(data);
                    })
                    .catch((e) => {
                        console.log(e.message);
                        setLoading(false);
                    });
            }
        }
        catch (e) {
            if (e instanceof Error) {
                console.log(e.message);
            }
        } finally {
            setLoading(false);
        }
    }

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        if (!isValid(setErrors(() =>  validate(item)))) return;
        onSave(item);
    };

    const handleChange = (event: any) => {
        const { type, name, value } = event.target;

        let updatedValue = value;

        if (type === 'number') {
            updatedValue = Number(updatedValue);
        }
        const change = {
            [name]: updatedValue,
        };

        let updatedItem: Item;

        setItem((p) => {
            updatedItem = new Item({ ...p, ...change });
            return updatedItem;
        });
        setErrors(() => validate(updatedItem));
    };

    function validate(item: Item) {
        let errors: any = { name: '', categoric: '', minimal_amount: '' };
        if (item.name.length === 0) {
            errors.name = 'Nome e obrigatoria';
        }
        if (item.categoric === 'Coloque a categoria') {
            errors.categoric = 'Categoria obrigatoria.';
        }
        if (item.minimal_amount === 0) {
            errors.minimal_amount = 'Quantidade minima maior que 0';
        }
        return errors;
    };

    function isValid(test: any = { name: '', categoric: '', minimal_amount: '' }) {
        return (
            test.name.length === 0 &&
            test.categoric.length === 0 &&
            test.minimal_amount.length === 0
        );
    }

    return (
        <div>
            <h2>Item Detalhe {item.id}</h2>
            {loading && (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            )}
            <Row>
                <Form onSubmit={handleSubmit} >
                    <Col sm={8}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Item Nome</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Coloque o nome"
                                value={item.name}
                                onChange={handleChange} />
                            {errors.name.length > 0 && (
                                <Form.Text>
                                    <Alert key='danger' variant='danger'>
                                        {errors.name}
                                    </Alert>
                                </Form.Text>
                            )}
                        </Form.Group>
                    </Col>

                    <Col sm={4}>
                        <Form.Group className="mb-3" controlId="formBasicCategoric">
                            <Form.Label>Item Categoria</Form.Label>
                            <Form.Select aria-label="Coloque a categoria" name="categoric"
                                value={item.categoric}
                                onChange={handleChange} >
                                <option>Coloque a categoria</option>
                                <optgroup label="Limpeza">
                                    <option value="Interna">Interna</option>
                                    <option value="Externa">Externa</option>
                                </optgroup>
                                <optgroup label="Alimentos">
                                    <option value="Proteinas">Proteinas</option>
                                    <option value="Carboidratos">Carboidratos</option>
                                    <option value="Vegetais">Vegetais</option>
                                </optgroup>

                            </Form.Select>
                            {errors.categoric.length > 0 && (
                                <Form.Text>
                                    <Alert key='danger' variant='danger'>
                                        {errors.categoric}
                                    </Alert>
                                </Form.Text>
                            )}
                        </Form.Group>
                    </Col>

                    <Stack direction="horizontal" gap={2}>
                        <Col sm={4}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Item Quantidade minima</Form.Label>
                                <Form.Control type="number" name="minimal_amount" placeholder="Coloque a quantidade"
                                    value={item.minimal_amount}
                                    onChange={handleChange} />
                                {errors.minimal_amount.length > 0 && (
                                    <Form.Text className="card error">
                                        <Alert key='danger' variant='danger'>
                                            {errors.minimal_amount}
                                        </Alert>
                                    </Form.Text>
                                )}
                            </Form.Group>
                        </Col>

                        <Col sm={4}>
                            <Form.Group className="mb-3" controlId="formBasicAmount">
                                <Form.Label>Item Quantidade Atual</Form.Label>
                                <Form.Control type="number" name="amount" placeholder="Coloque a quantidade"
                                    value={item.amount}
                                    onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Stack>

                    <ButtonGroup aria-label="Basic example">
                        <Button variant="primary" type="submit">
                            Salvar
                        </Button>
                        <Link className="btn btn-danger"
                            to={{
                                pathname: `/itens`
                            }}>
                            Cancelar
                        </Link>
                    </ButtonGroup>
                </Form>
            </Row>
        </div>
    );
}

export default ItemForm;