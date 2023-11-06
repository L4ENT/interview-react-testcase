import "./styles.scss";
import { ProductType } from "@/types/ProductType";
import Typography from "@/components/Typogrphy";
import { useState } from "react";
import { CounterDown, CounterUp } from "@/components/Icons";

type CartItemProps = {
  product: ProductType;
  min: number;
  max: number;
};

function CartItem({ product, min, max }: CartItemProps) {
  const [counter, setCounter] = useState(min);

  const onIncrement = () => {
    setCounter((prev) => (prev < max ? prev + 1 : max));
  };
  const onDecrement = () => {
    setCounter((prev) => (prev > min ? prev - 1 : min));
  };

  return (
    <div className="cart-item">
      <div className="cart-item__card">
        <img src={product.image} />
        <div className="cart-item__content">
          <Typography
            className="cart-item__title"
            kind="span"
            variant="subtitle"
          >
            {product.title}
          </Typography>
          <Typography
            className="cart-item__caption"
            kind="span"
            variant="body2"
          >
            {product.caption}
          </Typography>
          <Typography kind="span" variant="body1">
            {product.price}
          </Typography>

          <div className="cart-item__buttons">
            <button>Избранное</button>
            <button>Удалить</button>
          </div>
        </div>
      </div>
      <div className="cart-counter">
        <input
          className="cart-counter__input"
          type="text"
          value={counter}
          onChange={(event) =>
            setCounter((prevCount) => {
              const value = Number(event.target.value);
              
              if (value >= min && value <= max) {
                return value;
              } else {
                return prevCount;
              }
            })
          }
        />
        <div className="cart-counter__buttons">
          <button onClick={onIncrement}>
            <CounterUp />
          </button>
          <button onClick={onDecrement}>
            <CounterDown />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
