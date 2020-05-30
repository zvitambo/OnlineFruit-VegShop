import { BillingAddress } from './BillingAddress';
import { Product } from './Product';
import { CartItem } from './CartItem';
import { OrderCartItem } from './OrderCartItem';

export interface OrderBillingItem {

    id: number;
    cartId: number;
    totalAmount: number;
    date: string;
    billingAddress: BillingAddress;
    cartitems: Array<OrderCartItem>[];
}
