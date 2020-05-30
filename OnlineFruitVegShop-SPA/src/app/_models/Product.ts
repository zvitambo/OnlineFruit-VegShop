// tslint:disable-next-line:no-empty-interface
export interface Product {

    productId: number;
    name: string;
    price: number;
    description: string;
    quantity?: number;
    photoUrl: string;
    total?: number;
    checkedOut?: false;
}
