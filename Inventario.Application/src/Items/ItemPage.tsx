import React, { useEffect, useState } from 'react';
import { ItemAPI } from './ItemAPI';
import ItemForm from './ItemForm';
import { Item } from './Item';
import { useParams } from 'react-router-dom';

function ItemPage(props: any) {
    const [loading, setLoading] = useState(false);
    const [Item, setItem] = useState<Item | null>(null);
    const [error, setError] = useState<string | null>(null);
    const params = useParams();
    const id = Number(params.id);

    useEffect(() => {
        setLoading(true);
        ItemAPI
            .find(id)
            .then((data) => {
                setItem(data);
                setLoading(false);
            })
            .catch((e) => {
                setError(e);
                setLoading(false);
            });
    }, [id]);

    return (
        <div>
            {loading && (
                <div className="center-page">
                    <span className="spinner primary"></span>
                    <p>Loading...</p>
                </div>
            )}

            {error && (
                <div className="row">
                    <div className="card large error">
                        <section>
                            <p>
                                <span className="icon-alert inverse "></span> {error}
                            </p>
                        </section>
                    </div>
                </div>
            )}

            {Item && <ItemForm item={Item} />}
        </div>
    );
}

export default ItemPage;