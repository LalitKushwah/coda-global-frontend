import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root'})

export class CartService {
    private cartLengthSubject = new Subject<any>();
    cart = [];

    resetCart(): void {
        this.cart = [];
    }

    addItemToCart(item): void {
        this.cart.push(item);
        this.emitCartEvent();
    }

    deleteItemFromCart(): void {
        // delelte item from cart
    }
    getCart(): Array<any> {
        return this.cart;
    }

    emitCartEvent(): any {
        this.cartLengthSubject.next(this.cart.length);
    }

    getCartSubject(): Observable<any> {
        return this.cartLengthSubject.asObservable();
    }
}
