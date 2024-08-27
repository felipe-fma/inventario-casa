import React, { SyntheticEvent, useState } from 'react';
import { Item } from "./Item";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

interface ItemFormProps {
    item: Item;
}

function ItemForm({ item: initialItem }: ItemFormProps) {

    const [item, setItem] = useState(initialItem);
    const [errors, setErrors] = useState({
        name: '',
        categoric: '',
        minimal_amount: '',
    });

    const onSave = (item: Item) => {

    };

    const handleOnCancel = () => {

    };

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        if (!isValid()) return;
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
        let errors: any = { name: '', description: '', budget: '' };
        if (item.name.length === 0) {
            errors.name = 'Nome e obrigatoria';
        }
        if (item.name.length > 0 && item.name.length < 3) {
            errors.name = 'Nome needs to be at least 3 characters.';
        }
        if (item.categoric.length === 0) {
            errors.categoric = 'Categoria obrigatoria.';
        }
        if (item.minimal_amount === 0) {
            errors.minimal_amount = 'Quantidade minima maior que 0';
        }
        return errors;
    };

    function isValid() {
        return (
            errors.name.length === 0 &&
            errors.categoric.length === 0 &&
            errors.minimal_amount.length === 0
        );
    }

    return (
        <div>
            <h1>Item Detail</h1>

            <Form onSubmit={handleSubmit}> 

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Item Nome</Form.Label>
                    <Form.Control type="text" placeholder="coloque o nome"
                        value={item.name}
                        onChange={handleChange} />
                    {errors.name.length > 0 && (
                        <Form.Text className="card error">
                            {errors.name}
                        </Form.Text>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCategoric">
                    <Form.Label>Item Categoria</Form.Label>
                    <Form.Control type="text" placeholder="coloque a categoria"
                        value={item.categoric}
                        onChange={handleChange} />
                    {errors.name.length > 0 && (
                        <Form.Text className="card error">
                            {errors.categoric}
                        </Form.Text>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Item Quantidade minima</Form.Label>
                    <Form.Control type="number" placeholder="coloque a quantidade"
                        value={item.minimal_amount}
                        onChange={handleChange} />
                    {errors.name.length > 0 && (
                        <Form.Text className="card error">
                            {errors.minimal_amount}
                        </Form.Text>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAmount">
                    <Form.Label>Item Quantidade Atual</Form.Label>
                    <Form.Control type="number" placeholder="coloque a quantidade"
                        value={item.amount}
                        onChange={handleChange} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Salvar
                </Button>
                <Button variant="danger" type="button" onClick={handleOnCancel}>
                    Cancelar
                </Button>
            </Form>
        </div>
    );
}

export default ItemForm;