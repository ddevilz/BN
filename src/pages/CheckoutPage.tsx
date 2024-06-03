import Container from "../../@/components/Container";
import Navbar from "../../@/components/Navbar";
import CheckoutProduct from "../../@/components/CheckoutProduct";
import CheckoutForm from "../../@/components/CheckoutForm";

const CheckoutPage = () => {
  return (
    <div className="w-full h-screen bg-[#111827] text-white">
      <Navbar />
      <Container className="flex h-[90vh] flex-col md:flex-row justify-between">
        <div className="w-[1200px]">
          <p className="mb-10 mt-7 text-white font-bold text-2xl leading-tight">
            Products in cart
          </p>
          <CheckoutProduct />
        </div>
        <CheckoutForm />
      </Container>
    </div>
  );
};

export default CheckoutPage;
