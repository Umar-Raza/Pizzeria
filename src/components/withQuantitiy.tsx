import { ComponentType, FC } from "react";
import { Pizza } from "../data/menu-items";
import { MenuItemProps } from "./MenuItem";
import { useAppSelector } from "../store/hooks";
import { CartItem, selectItemQuantity } from "../store/cartSlice";

type withQuantityProps = {
  item: Pizza;
};

const withQuantity = (Component: ComponentType<MenuItemProps>) => {
  const withQuantityComponent: FC<withQuantityProps> = (props) => {
    const { item } = props;
    const quantity = useAppSelector(selectItemQuantity(item));
    const cartItem: CartItem = {
      ...item,
      quantity,
    };
    return <Component item={cartItem} />;
  };
  return withQuantityComponent;
};

export default withQuantity;
