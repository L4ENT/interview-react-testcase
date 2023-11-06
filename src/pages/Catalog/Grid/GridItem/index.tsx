import Typography from "@/components/Typogrphy";
import { AddToCart, AddToFavorite } from "@/components/Icons";
import { ProductType } from "@/types/ProductType";

import "./styles.scss";

type GridItemProps = ProductType;

export function GridItem({ title, caption, price, image }: GridItemProps) {
  const formattedPrice = price.toLocaleString("en-US").replace(",", " ");

  return (
    <div className="grid-item">
      <div className="grid-item__buttons">
        <button>
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
