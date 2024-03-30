import { BsCartX } from "react-icons/bs";
import Button from "./Button";
function EmptyCart() {
  return (
    <div className="h-[90vh] flex items-center w-2/4 mx-auto justify-center flex-col">
      <span className="text-[100px] font-semibold mt-10">
        <BsCartX />
      </span>

      <h1 className="my-10 text-4xl font-bold uppercase">your cart is empty</h1>
      <p className="text-center">
        Before proceed to checkout you must add some products to your shopping
        cart. You will find a lot of interesting products on our "Shop" page.
      </p>
      <div className="w-1/4 mt-5 grow">
        <Button>return to shop</Button>
      </div>
    </div>
  );
}

export default EmptyCart;
