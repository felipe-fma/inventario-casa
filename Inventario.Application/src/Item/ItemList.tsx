import React from 'react';
import { Item } from './Item';
import ItemTableCard from './ItemTableCard';
import Table from 'react-bootstrap/Table';

interface ItemListProps {
    Itens: Item[];
    onRemove: (item: Item) => void;
}

function ItemList({ Itens, onRemove }: ItemListProps) {
    const handleRemove = (item: Item) => {
        onRemove(item);
    }

    const viewItem = Itens.map((item) => (
        <ItemTableCard item={item} handleRemove={handleRemove} ></ItemTableCard>
    ));

    return (
        <Table bordered size="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Categoria</th>
                    <th>Quantidade</th>
                    <th>Minimo Esperado</th>
                </tr>
            </thead>
            <tbody>
                {viewItem}
            </tbody>
        </Table>
    )
}

export default ItemList;