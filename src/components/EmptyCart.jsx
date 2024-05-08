import { BsCartX } from "react-icons/bs";
import Button from "./Button";
import { useNavigate } from "react-router";
function EmptyCart() {
  const navigate = useNavigate();
  return (
    <div className="h-[90vh] flex items-center w-5/6 md:w-2/4 mx-auto justify-center flex-col">
      <span className="text-[100px] font-semibold mt-10">
        <BsCartX />
      </span>

      <h1 className="my-10 text-3xl md:text-4xl text-center  font-bold uppercase">
        your cart is empty
      </h1>
      <p className="text-center ">
        Before proceed to checkout you must add some products to your shopping
        cart. You will find a lot of interesting products on our "Shop" page.
      </p>
      <div className="w-full md:w-1/3 mt-5 grow " onClick={() => navigate("/")}>
        <Button>return to shop</Button>
      </div>
    </div>
  );
}

export default EmptyCart;
