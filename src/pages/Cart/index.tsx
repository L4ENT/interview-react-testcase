import Layout from "@/components/Layout";

import "./styles.scss";
import CartItem from "./CartItem";
import Button from "@/components/Button";
import { CheckoutForm } from "./CheckoutForm";

const cartItems = [
  {
    id: 1,
    title: "Стол MENU",
    image: "/images/Product-1.jpg",
    caption:
      "Для того чтобы трапезничать было приятно, необходим правильный обеденный стол.",
    price: 34000,
  },
  {
    id: 2,
    title: "Диван NASTAN",
    image: "/images/Product-2.jpg",
    caption:
      "Модель отличается простотой линий и форм, отсутствием броского декора.",
    price: 80000,
  },
];

function Cart() {
  return (
    <Layout>
      <div className="cart">
        <div className="cart__items">
          <div className="cart__items__labels">
            <span>Товар</span>
            <span>К-во</span>
          </div>
          {cartItems.map((item) => (
            <CartItem key={item.id} product={item} min={1} max={10} />
          ))}

          <div className="cart__buttons">
            <Button className="cart__button" variant="white">
              Очистить корзину
            </Button>
            <Button className="cart__button" variant="black">
              Продолжить покупки
            </Button>
          </div>
        </div>
        <CheckoutForm />
      </div>
    </Layout>
  );
}

export default Cart;
