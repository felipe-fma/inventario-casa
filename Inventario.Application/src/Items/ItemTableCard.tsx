import { Item } from './Item';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

interface ItemTableCardProps {
    item: Item;
}

function ItemTableCard(props: ItemTableCardProps) {
    const handleRemoveClick = (itemBeingRemove: Item) => {
        console.log(itemBeingRemove);
    };

    const { item } = props;

    return (
        <tr>
            <th scope="row">{item.id}</th>
            <td>{item.name}</td>
            <td>{item.categoric}</td>
            <td>{item.amount}</td>
            <td>{item.minimal_amount}</td>
            <td>
                <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                    <Link className="btn btn-primary"
                        to={{
                            pathname: `/item/${item.id}`
                        }}>
                        <FontAwesomeIcon icon={faPencil} />
                    </Link>
                    <button type='button' className="btn btn-danger"
                        onClick={() => {
                            handleRemoveClick(item);
                        }}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
            </td>
        </tr>
    );
}

export default ItemTableCard;