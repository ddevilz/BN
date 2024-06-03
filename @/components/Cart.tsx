import { ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { formatPrice } from "../lib/utils";
import { buttonVariants } from "./ui/button";
import { useSelector } from "react-redux";
import { RootState } from "../../src/store";
import CheckoutProduct from "./CheckoutProduct";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const totalPrice: number = cartItems.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  const itemCount = cartItems.length;
  const fee = 1;
  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2">
        <ShoppingCart
          aria-hidden="true"
          className="h-6 w-6 flex-shrink-0 text-white-400 group-hover:text-gray-500"
        />
        <span className="ml-2 text-sm font-medium text-white-700 group-hover:text-gray-800">
          {itemCount}
        </span>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg ">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle className="text-white">Cart: ({0})</SheetTitle>
        </SheetHeader>
        {itemCount > 0 ? (
          <>
            <CheckoutProduct />
            <div className="space-y-4 pr-6">
              <Separator />
              <div className="space-y-1.5 text-sm">
                <div className="flex">
                  <span className="flex-1">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Transaction Fee</span>
                  <span>{formatPrice(fee)}</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Total</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
              </div>

              <SheetFooter>
                <SheetTrigger asChild>
                  <a
                    href={"/checkout"}
                    className={buttonVariants({ className: "w-full" })}
                  >
                    Continue to Checkout
                  </a>
                </SheetTrigger>
              </SheetFooter>
            </div>
          </>
        ) : (
          <>
            <div className="flex h-full flex-col items-center justify-center space-y-1">
              <div className="text-xl font-semibold">Your cart is empty.</div>
              <SheetTrigger asChild>
                <a
                  href={"/shop"}
                  className={buttonVariants({
                    variant: "link",
                    size: "sm",
                    className: "text-sm text-muted-foreground",
                  })}
                >
                  Add items to your shoppy cart...
                </a>
              </SheetTrigger>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
