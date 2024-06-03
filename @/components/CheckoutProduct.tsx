import { useSelector } from "react-redux";
import { ProductCart } from "../../types/list-type";
import Img from "./Img";
import RemoveFromCart from "./RemoveFromCart";
import { RootState } from "../../src/store";

const CheckoutProduct = () => {
  const cartItems = useSelector((state: RootState) => state?.cart.items);

  return (
    <div>
      <div className="flex w-full flex-col gap-5 pr-6">
        {cartItems.map((product: ProductCart) => (
          <div className="flex rounded overflow-hidden h-auto lg:h-38 border ">
            <div className="w-[30%] h-full">
              <Img
                className="object-cover h-full w-full"
                src={product.image || ""}
                alt={product.title || "Product Image"}
              />
            </div>
            <div className="bg-white w-full rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <span className="text-black font-semibold text-xl mb-2 leading-tight">
                {product.title}
              </span>
              <div className="flex items-center justify-between text-grey-darker text-base">
                <span className="text-black  text-xl mb-2 leading-tight">
                  ₹{product.price}
                </span>
                <RemoveFromCart productId={product.id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckoutProduct;
