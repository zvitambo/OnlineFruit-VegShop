import { Product } from './Product';

export interface OrderCartItem {

    id: number;
    cartId: number;
    productId: number;
    orderId: number;
    quantity: number;
    CheckedOut: false;
    total: number;
    product: Product;
}
