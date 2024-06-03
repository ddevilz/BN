import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "./ui/card";
import Img from "./Img";
import { Button } from "./ui/button";
import { ProductArrayProps, ProductCart } from "../../types/list-type";
import { useDispatch } from "react-redux";
import { addToCart } from "../../src/features/cart/cart-slice";
import cogoToast from "cogo-toast";

const ProductCard: React.FC<ProductArrayProps> = ({ products }) => {
  const dispatch = useDispatch();

  const truncateDescription = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substr(0, maxLength) + "...";
  };

  const handleAddToCart = (product: ProductCart) => {
    dispatch(addToCart(product));
    cogoToast.success("Product added to cart", {
      position: "top-center",
    });
  };

  return (
    <>
      {products?.map((product) => (
        <Card
          key={product.id}
          className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
        >
          <Img
            src={product.images[0]}
            alt={product.title}
            className={"h-80 w-full object-cover rounded-t-xl"}
          />
          <CardContent>
            <CardTitle className="text-lg font-bold text-black truncate block capitalize">
              {product.title}
            </CardTitle>
            <CardDescription className="">
              {truncateDescription(product.description, 40)}
            </CardDescription>
            <span>₹{product.price}</span>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full"
              onClick={() =>
                handleAddToCart({
                  id: product.id,
                  title: product.title,
                  image: product.images[0],
                  price: product.price,
                })
              }
            >
              Add to cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default ProductCard;
