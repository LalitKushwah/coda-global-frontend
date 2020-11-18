import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root'})

export class CartService {
    cart = [];

    resetCart(): void {
        this.cart = [];
    }

    addItemToCart(item): void {
        this.cart.push(item);
    }

    calculateTotalAmount(): number {
        return 100;
    }

    deleteItemFromCart(): void {
        //
    }
    getCart(): Array<any> {
        return this.cart;
    }
}
