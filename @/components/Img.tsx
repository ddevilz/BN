import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface ImgProps {
  src: string;
  alt?: string;
  className: string;
}

const Img = ({ src, alt, className }: ImgProps) => {
  return (
    <LazyLoadImage
      className={className || ""}
      alt={alt ?? ""}
      effect="blur"
      src={src}
    />
  );
};

export default Img;
