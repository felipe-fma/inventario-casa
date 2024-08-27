import React, { Fragment, useState, useEffect } from 'react';
import ItemList from './ItemList';
import { Item } from './Item';
import { ItemAPI } from './ItemAPI';

function ItensPage() {
  const [Itens, setItens] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    async function loadItens() {
      setLoading(true);
      try {
        const data = await ItemAPI.get();
        setError('');
        setItens(data);
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

  return (
    <div>
      <h1>Inventarios</h1>

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
      <ItemList Itens={Itens} />
      {loading && (
        <div className="center-page">
          <span className="spinner primary"></span>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}

export default ItensPage;