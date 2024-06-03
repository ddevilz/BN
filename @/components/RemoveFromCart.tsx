import { useDispatch } from "react-redux";
import { removeFromCart } from "../../src/features/cart/cart-slice";
import { Button } from "./ui/button";

interface RemoveFromCartProps {
  productId: number;
}

const RemoveFromCart: React.FC<RemoveFromCartProps> = ({ productId }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(productId));
  };

  return (
    <>
      <Button onClick={handleRemoveFromCart}>Remove from Cart</Button>
    </>
  );
};

export default RemoveFromCart;
