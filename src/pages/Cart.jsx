import CartItem from "../components/CartItem";

import Button from "../components/Button";
import { BaadMainBtn } from "./DetailsPage";
import { CiTimer } from "react-icons/ci";
import { useSelector } from "react-redux";
import EmptyCart from "../components/EmptyCart";
import { useNavigate } from "react-router";
const data = ["price", "quantity", "total"];

function Cart() {
  const select = useSelector((me) => me.cartData.cart);

  return (
    <div className="mt-5">
      <h1 className="py-12 text-center w-full uppercase bg-[#757575] text-white text-xl font-semibold ">
        shopping cart
      </h1>

      {select.length > 0 ? (
        <>
          <div className="w-10/12 mx-auto mt-16">
            <div className="flex items-center justify-between border-b pb-3 border-[#00000052]">
              <span
                className="text-lg font-semibold uppercase grow-0 shrink-0 basis-4/12"
                onClick={() => console.log(select)}
              >
                product
              </span>
              {data.map((data) => (
                <span className="text-lg font-semibold uppercase grow-0 shrink-0 basis-1/5 text-center">
                  {data}
                </span>
              ))}
            </div>
            <div className="border-b pb-10">
              {select.map((data) => (
                <CartItem
                  key={data.id}
                  pic={data.img}
                  heading={data.text}
                  size={data.size}
                  rate={data.rate}
                  discountRate={data.discountRate}
                  isDiscount={data.isDiscount}
                  quantity={data.quantity}
                  id={data.id}
                  total={data.total}
                />
              ))}
            </div>
          </div>
          <CoupenCodes />
          <EstimateShippingCart />
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

function CoupenCodes() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between w-10/12 mx-auto mt-10 mb-10">
      <div className="flex flex-col basis-2/4">
        <label htmlFor="" className="block capitalize mb-3 ">
          add order note
        </label>
        <textarea
          name=""
          id=""
          className="border grow shrink  p-2 outline-none"
          cols="40"
          placeholder="how can we help you ?"
          rows="5"
        ></textarea>
        <p className="capitalize my-3">coupen:</p>
        <p className="my-3">Coupen code will work on checkout page</p>
        <input
          type="text"
          placeholder="Coupen code"
          className="border grow-0 px-2 py-2 w-max outline-none "
        />
      </div>
      <div className="flex flex-col basis-1/4 text-end items-end">
        <h1 className="mb-3 font-semibold text-lg uppercase space-x-5">
          <span>subtotal:</span> <span>rs.5454587.00</span>
        </h1>
        <button onClick={() => navigate("/checkout")}>
          <Button>checkout</Button>
        </button>
        <h1 className="mt-3 font-bold text-base capitalize">
          pay in three easy installment
        </h1>
        <h1 className="text-slate-700 mb-2">
          <span className="text-[#7826f6] font-bold me-2">PKR 4,081</span>
          with
          <button className="ms-2 border-b border-black pb-0">BaadMay</button>
        </h1>
        <BaadMainBtn />
        <p className="flex items-center text-sm capitalize  gap-1 mt-3">
          <span className="text-violet-800">
            <CiTimer />
          </span>
          shopping limits: Rs 1,000 - 15,000
        </p>
      </div>
    </div>
  );
}

function EstimateShippingCart() {
  async function countryData() {
    const req = await fetch("https://gist.github.com/keeguon/2310008");
    const toJson = await req.json();
    console.log(toJson);
  }
  countryData();

  return (
    <div className="mx-auto border text-center relative w-10/12 px-12 py-8 mb-10">
      <h1 className="absolute px-3 -top-2 left-2/4 -translate-x-2/4 bg-white capitalize text-3xl font-semibold -translate-y-2/4">
        estimate shipping
      </h1>
      <div className="flex items-end justify-center gap-10 ">
        <span className=" shrink basis-3/12 text-start">
          <label htmlFor="" className="block">
            country
          </label>
          <select
            name=""
            id=""
            className="py-2 w-full border outline-none rounded-3xl px-7 "
          >
            <option value="45">adsjfklj</option>
            <option value="45">adsjfklj</option>
            <option value="45">adsjfklj</option>
            <option value="45">adsjfklj</option>
          </select>
        </span>
        <span className=" basis-3/12 text-start">
          <label htmlFor="" className="block">
            postal/zipcode
          </label>
          <input
            type="text"
            className="border rounded-3xl w-full px-3 outline-none py-1"
          />
        </span>
        <div className="grow-0 basis-3/12">
          <Button>calculate shipping</Button>
        </div>
      </div>
    </div>
  );
}
export default Cart;
