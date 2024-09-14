import { Item } from './Item';
const baseUrl = 'http://localhost:5000';
const url = `${baseUrl}/api/Itens`;

function translateStatusToErrorMessage(status: number) {
    switch (status) {
        case 401:
            return 'Please login again.';
        case 403:
            return 'You do not have permission to view the Item(s).';
        default:
            return 'There was an error retrieving the Item(s). Please try again.';
    }
}

function checkStatus(response: any) {
    if (response.ok) {
        console.log("sucesso ")
        return response;
    } else {
        const httpErrorInfo = {
            status: response.status,
            statusText: response.statusText,
            url: response.url,
        };
        console.log(`log server http error: ${JSON.stringify(httpErrorInfo)}`);

        let errorMessage = translateStatusToErrorMessage(httpErrorInfo.status);
        throw new Error(errorMessage);
    }
}

function parseJSON(response: Response) {
    return response.json();
}

function convertToItemModels(data: any[]): Item[] {
    let Items: Item[] = data.map(convertToItemModel);
    return Items;
}

function convertToItemModel(item: any): Item {
    return new Item(item);
}

const ItemAPI = {
    get() {
        return fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(checkStatus)
            .then(parseJSON)
            .then(convertToItemModels)
            .catch((error: TypeError) => {
                console.log('log client error ' + error);
                throw new Error(
                    'There was an error retrieving the Items. Please try again.'
                );
            });
    },
    post(item: Item) {
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(checkStatus)
        .then(parseJSON)
        .catch((error: TypeError) => {
            console.log('log client error ' + error);
            throw new Error(
                'There was an error updating the project. Please try again.'
            );
        });
    },
    put(item: Item) {
        return fetch(`${url}/${item.id}`, {
            method: 'PUT',
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(checkStatus)
        .then(parseJSON)
        .catch((error: TypeError) => {
            console.log('log client error ' + error);
            throw new Error(
                'There was an error updating the project. Please try again.'
            );
        });
    },
    find(id: number) {
        return fetch(`${url}/${id}`)
            .then(checkStatus)
            .then(parseJSON)
            .then(convertToItemModel);
    },
    remove(id: number) {
        return fetch(`${url}/${id}`, {
            method: 'DELETE',
        })
        .then(checkStatus)
        .then(parseJSON)
        .then(convertToItemModel);
    },
};

export { ItemAPI };