import Layout from "@/components/Layout";

import "./styles.scss";
import CartItem from "./CartItem";
import Button from "@/components/Button";
import { CheckoutForm } from "./CheckoutForm";
import { useCallback, useEffect, useState } from "react";
import CartStorage, { CartItemType } from "@/lib/CartStorage";
import Typography from "@/components/Typogrphy";
import { Link } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  useEffect(() => {
    const items = CartStorage.getItems();
    setCartItems(items);
  }, []);

  const handleDeleteItem = useCallback((id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    CartStorage.removeItem(id);
  }, []);

  const handleClear = () => {
    setCartItems([]);
    CartStorage.clear();
  };

  return (
    <Layout>
      <div className="cart">
        <div className="cart__items">
          {cartItems.length === 0 && <Typography variant="title">Корзина пуста</Typography>}
          {cartItems.length > 0 && (
            <>
              <div className="cart__items__labels">
                <span>Товар</span>
                <span>К-во</span>
              </div>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  product={item}
                  min={1}
                  max={10}
                  initialAmount={item.amount}
                  onDelete={handleDeleteItem}
                />
              ))}
            </>
          )}

          <div className="cart__buttons">
            {cartItems.length > 0 && (
              <Button
                onClick={handleClear}
                className="cart__button"
                variant="white"
              >
                Очистить корзину
              </Button>
            )}
            <Link to='/'>
              <Button className="cart__button" variant="black">
                Продолжить покупки
              </Button>
            </Link>
          </div>
        </div>
        <CheckoutForm />
      </div>
    </Layout>
  );
}

export default Cart;
