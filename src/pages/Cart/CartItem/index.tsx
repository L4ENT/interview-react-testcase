import "./styles.scss";
import { ProductType } from "@/types/ProductType";
import Typography from "@/components/Typogrphy";
import { useCallback, useState } from "react";
import { CounterDown, CounterUp } from "@/components/Icons";
import { formatPrice } from "@/utils";
import CartStorage from "@/lib/CartStorage";

type CartItemProps = {
  product: ProductType;
  min: number;
  max: number;
  initialAmount?: number;
  onDelete: (id: number) => void;
};

/** 
It was essential to separate the value into counter and counterInputValue, because otherwise
we would lose the ability to enter the value manually.

This way, in counter we always have only a valid number, and in 
counterInputValue we have the intermediate input value (including an empty string).

However, there is a nuance. It turns out that we always need to synchronize these values. 
If I had implemented this using useEffect(() => { ...set input }, [counter]), 
then on clicking the increment and decrement buttons, there would be two renders:
1. A render when the counter itself changes.
2. A second render due to the setter inside useEffect.

And we know that two consecutive setters being triggered will not cause two renders. 
Therefore, I created setValue in which both counter and counterInputValue are set at once.
Then, it only remains to ensure that in all closures there is the current context. 
For this, we have useCallback.
*/

function CartItem({
  product,
  min,
  max,
  initialAmount,
  onDelete,
}: CartItemProps) {
  const [isValid, setIsValid] = useState(true);

  const initialAmountValue = initialAmount ?? min;

  const [counter, setCounter] = useState(initialAmountValue);
  const [counterInputValue, setCounterInputValue] = useState(
    String(initialAmountValue)
  );

  const setValidation = useCallback(
    (value: string) => {
      if (value.length === 0) {
        setIsValid(true);
        return;
      }
      const numberValue = Number(value);
      if (numberValue >= min && numberValue <= max) {
        setIsValid(true);
        return true;
      } else {
        setIsValid(false);
        return false;
      }
    },
    [min, max]
  );

  const setValue = useCallback(
    (value: string | number) => {
      const numberValue = Math.floor(Number(value));
      setCounter(numberValue);
      setCounterInputValue(String(value));
      const isValid = setValidation(String(value));

      if (isValid) {
        CartStorage.setAmount(product.id, numberValue);
      }
    },
    [setValidation, product]
  );

  const onIncrement = useCallback(() => {
    const value = counter < max ? counter + 1 : max;
    if (counter !== value) {
      setValue(value);
    }
  }, [counter, max, setValue]);

  const onDecrement = useCallback(() => {
    const value = counter > min ? counter - 1 : min;
    if (counter !== value) {
      setValue(value);
    }
  }, [counter, min, setValue]);

  const deleteHandler: React.MouseEventHandler = useCallback(() => {
    onDelete(product.id);
  }, [onDelete, product]);

  console.log(`CartItem Render: `, new Date().getTime());
  console.log(`CartItem Counter: `, counter);

  return (
    <div className="cart-item">
      <div className="cart-item__card">
        <img src={product.image} alt="" />
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
            {formatPrice(product.price)} руб.
          </Typography>

          <div className="cart-item__buttons">
            <button>Избранное</button>
            <button onClick={deleteHandler}>Удалить</button>
          </div>
        </div>
      </div>
      <div className={"cart-counter" + (!isValid ? ` invalid` : "")}>
        <span className={"cart-counter__error" + (!isValid ? ` visible` : "")}>
          Допустимо от {min} до {max}
        </span>
        <input
          className="cart-counter__input"
          type="text"
          value={counterInputValue}
          size={counterInputValue.length > 0 ? counterInputValue.length : 1}
          onBlur={() => {
            if (counterInputValue.length === 0) {
              setValue(1);
            }
          }}
          onChange={(event) => {
            let stringValue = event.target.value;
            const value = Number(event.target.value);

            if (stringValue.length > 0 && isNaN(value)) {
              return;
            }

            if (stringValue.length > 0) {
              stringValue = Math.floor(value).toString();
            }

            setValue(stringValue);
          }}
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
