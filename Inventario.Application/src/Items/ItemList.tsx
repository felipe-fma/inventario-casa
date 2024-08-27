import React from 'react';
import { Item } from './Item';
import ItemTableCard from './ItemTableCard';
import Table from 'react-bootstrap/Table';

interface ItemListProps {
    Itens: Item[];
}

function ItemList({ Itens }: ItemListProps) {
    const viewItem = Itens.map((item) => (
        <ItemTableCard item={item} ></ItemTableCard>
    ));

    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Quantidade</th>
                    <th scope="col">Minimo Esperado</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {viewItem}
            </tbody>
        </Table>
    )
}

export default ItemList;