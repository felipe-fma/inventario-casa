import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { Item } from './Item';
import { ItemAPI } from './ItemAPI';
import { Spinner } from 'react-bootstrap';

function ItensPage() {
  const [Itens, setItens] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined); 

  useEffect(() => {
    async function loadItens() {
      setLoading(true);
      try {
        await ItemAPI.get().then((data) => {
          setError('');
          setItens(data);
        });
      }
      catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      } finally {
        setLoading(false);
      }
    }
    loadItens();
  }, []);

  async function onRemove(itemToRemove: Item) {
    setLoading(true);
    try {
      await ItemAPI.remove(itemToRemove.id!)
        //.then((d) => forceUpdate())
        .catch((e) => {
          console.log(e.message);
        });
    }
    catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2>Inventarios</h2>
      {error && (
        <div className="row">
          <div className="card large error">
            <section>
              <p>
                <span className="icon-alert inverse "></span>
                {error}
              </p>
            </section>
          </div>
        </div>
      )}
      <ItemList Itens={Itens} onRemove={onRemove} />
      {loading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
}

export default ItensPage;