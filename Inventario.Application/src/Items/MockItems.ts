import { Item } from './Item';

export const MOCK_ITEMS = [
    new Item({
        id: 1,
        name: 'teste',
        minimal_amount: 1,
        amount: 0,
        created_utc: Date()
    }),
    new Item({
        id: 2,
        name: 'teste a',
        minimal_amount: 1,
        amount: 0,
        created_utc: Date()
    }),
    new Item({
        id: 3,
        name: 'teste b',
        minimal_amount: 1,
        amount: 0,
        created_utc: Date()
    })
]