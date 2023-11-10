import Typography from "@/components/Typogrphy";
import { AddToCart, AddToFavorite } from "@/components/Icons";
import { ProductType } from "@/types/ProductType";

import "./styles.scss";
import { formatPrice } from "@/utils";
import { useCallback, useMemo } from "react";
import CartStorage from "@/lib/CartStorage";

type GridItemProps = ProductType;

export function GridItem({ id, title, caption, price, image }: GridItemProps) {
  const formattedPrice = formatPrice(price);

  const item = useMemo(
    () => ({
      id,
      title,
      caption,
      price,
      image,
    }),
    [id, title, caption, price, image]
  );

  const handleAddToCart = useCallback(() => {
    CartStorage.addItem(item);
  }, [item]);

  return (
    <div className="grid-item">
      <div className="grid-item__buttons">
        <button onClick={handleAddToCart}>
          <AddToCart />
        </button>
        <button>
          <AddToFavorite />
        </button>
      </div>
      <img className="grid-item__img" src={image} alt="Card" />
      <div className="grid-item__content">
        <Typography
          className="grid-item__content__title"
          kind="span"
          variant="subtitle"
        >
          {title}
        </Typography>
        <Typography
          className="grid-item__content__caption"
          kind="span"
          variant="body2"
        >
          {caption}
        </Typography>
        <Typography
          className="grid-item__content__title"
          kind="span"
          variant="subtitle"
        >
          {formattedPrice} руб.
        </Typography>
      </div>
    </div>
  );
}
