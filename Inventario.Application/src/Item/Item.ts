export class Item {
    id: number | undefined;
    name: string = '';  
    categoric: string = '';  
    minimal_amount: number = 1;
    amount: number = 0;
    created_utc: Date = new Date();

    get isNew(): boolean {
        return this.id === undefined;
    }
    constructor(initializer?: any) {
        if (!initializer) return;
        if (initializer.id) this.id = initializer.id;
        if (initializer.name) this.name = initializer.name;
        if (initializer.categoric) this.categoric = initializer.categoric;
        if (initializer.minimal_amount) this.minimal_amount = initializer.minimal_amount;
        if (initializer.amount) this.amount = initializer.amount;
        if (initializer.created_utc)
            this.created_utc = new Date(initializer.created_utc);
    }
}