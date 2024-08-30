import { Item } from './Item';
import React from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Button, ButtonGroup } from 'react-bootstrap';

interface ItemTableCardProps {
    item: Item;
    handleRemove: (item : Item) => void;
}

function ItemTableCard({item, handleRemove }: ItemTableCardProps) {
    const handleRemoveClick = (itemBeingRemove: Item) => {
        handleRemove(itemBeingRemove);

    };

    let navigate = useNavigate(); 
    const handleEditClick = (itemBeingEdit: Item) =>{ 
        let path = `/item/${itemBeingEdit.id}`; 
        navigate(path);
    }

    return (
        <tr>
            <th scope="row">{item.id}</th>
            <td>{item.name}</td>
            <td>{item.categoric}</td>
            <td>{item.amount}</td>
            <td>
                {item.minimal_amount}
                <ButtonGroup className="sd-offset-4" size="sm">
                    <Button variant="primary" type="button" 
                        onClick={() => {
                            handleEditClick(item); 
                        }}>
                        <FontAwesomeIcon icon={faPencil} />
                    </Button>
                    <Button variant="danger" type="button" 
                        onClick={() => {
                            handleRemoveClick(item);
                        }}>
                        <FontAwesomeIcon icon={faTrash} />
                    </Button>
                </ButtonGroup>
            </td>
        </tr>
    );
}

export default ItemTableCard;