import { ProductType } from "@/types/ProductType";

export type CartItemType = ProductType & {
  amount: number;
};

export type CartType = {
  [key: number]: CartItemType;
};

class CartStorageClass {
  getOrCreateCart(): CartType {
    const jsonValue = localStorage.getItem("cart");
    if (!jsonValue) {
      this.setCart({});
      return {};
    }
    return JSON.parse(jsonValue) as CartType;
  }

  setCart(cart: CartType) {
    return localStorage.setItem("cart", JSON.stringify(cart));
  }

  addItem(item: ProductType) {
    const cart = this.getOrCreateCart();
    const existsItem = cart[item.id];
    cart[item.id] = {
      ...item,
      amount: existsItem ? existsItem.amount : 1,
    };
    this.setCart(cart);
  }

  updateItem(itemId:number, item: Partial<CartItemType>) {
    const cart = this.getOrCreateCart();
    const existsItem = cart[itemId] ?? {};
    cart[itemId] = {
      ...existsItem,
      ...item,
    };
    this.setCart(cart);
  }

  removeItem(itemId: number) {
    const cart = this.getOrCreateCart();
    delete cart[itemId];
  }

  getItems(): CartItemType[] {
    const cart = this.getOrCreateCart();
    return Object.values(cart);
  }

  setAmount(itemId: number, amount: number) {
    const cart = this.getOrCreateCart();
    const cartItem = cart[itemId];

    if (cartItem) {
        this.updateItem(itemId, {
            amount
        })    
    }
  }

  clear() {
    this.setCart({})
  }
}

const CartStorage = new CartStorageClass();

export default CartStorage;
