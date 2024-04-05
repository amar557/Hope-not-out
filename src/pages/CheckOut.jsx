import { IoBagHandleOutline } from "react-icons/io5";

function CheckOut() {
  return (
    <>
      <div className="flex items-center justify-between px-28 py-4 border-b">
        <img
          src="https://cdn.shopify.com/s/files/1/0247/3331/9215/files/HNo-Logo-square_9b043b58-1f11-4395-87d8-ff2b81c36ac3_x320.png?v=1665567332"
          alt=""
          className="h-16 w-16"
        />
        <div className="text-2xl cursor-pointer text-blue-600 hover:text-blue-400 transition-all">
          <IoBagHandleOutline />
        </div>
      </div>
      <div className=" flex items-start justify-between   w-[90%] ps-28">
        <div className=" h-[100vh] w-2/4">
          <CheckoutHead>contact</CheckoutHead>
          <input
            type="email"
            name=""
            id=""
            placeholder="Email or mobile phone number"
            className=" rounded block w-[90%] mb-3 px-2 placeholder:text-slate-700 py-2 border "
          />

          <input type="checkbox" name="" id="" className="inline-block" />
          <p className="inline-block ms-2">Email me with news and offers</p>

          <CheckoutHead>delivery</CheckoutHead>
          <div>
            <select
              name=""
              id=""
              className="w-[90%] mb-5 px-2 rounded outline-none py-2 text-lg border"
            >
              <option value="">pakistan</option>
            </select>
            <input
              type="text"
              name=""
              placeholder="firstName"
              id=""
              className="w-[43%] px-2 py-2 rounded border"
            />
            <input
              type="text"
              name=""
              placeholder="Last Name"
              id=""
              className="w-[43%] px-2 py-2 rounded border ms-[4%]"
            />
            <input
              type="text"
              name=""
              placeholder="Address"
              id=""
              className="w-[90%] border rounded px-2 py-2 mt-5"
            />

            <input
              type="text"
              name=""
              placeholder="appartment, suite, etc."
              id=""
              className="w-[90%] border rounded px-2 py-2 mt-5 mb-5"
            />
            <input
              type="text"
              name=""
              placeholder="city"
              id=""
              className="w-[43%] rounded border px-2 py-2 "
            />
            <input
              type="text"
              name=""
              placeholder="postal code"
              className="w-[43%] rounded border px-2 py-2  ms-[4%] focus:outline-[#197bbd]"
              id=""
            />
            <input
              type="text"
              name=""
              placeholder="phone Number"
              id=""
              className="w-[90%] border rounded px-2 py-2 mt-5 mb-5"
            />
          </div>
          <div>
            <input type="checkbox" name="" id="" className="inline-block" />
            <p className="inline-block ms-2 text-sm">
              Save this information for next time
            </p>
          </div>
          <div className="mt-2">
            <input type="checkbox" name="" id="" className="inline-block" />
            <p className="inline-block ms-2 text-sm">
              Text me with news and offers
            </p>
          </div>
          <input
            type="text"
            name=""
            placeholder="Mobile phone number"
            id=""
            className="w-[90%] border rounded px-2 py-2 mt-5 mb-5 "
          />
          <p className="text-xs text-slate-600">
            By signing up via text, you agree to receive recurring automated
            marketing messages, including cart reminders, at the phone number
            provided. Consent is not a condition of purchase. Reply STOP to
            unsubscribe. Reply HELP for help. Message frequency varies. Msg &
            data rates may apply. View our Privacy Policy and Terms of Service.
          </p>
          <CheckoutHead>shipping methods</CheckoutHead>
          <div className="w-[90%] border rounded px-3 border-blue-500  py-3 mt-5 mb-5 flex items-center justify-between bg-[#f2f7ff]">
            <span>COD Shipping</span>
            <span className="capitalize font-semibold ">rs 150.00</span>
          </div>
          <CheckoutHead>payment</CheckoutHead>
          <p className="text-sm text-slate-600">
            All transactions are secure and encrypted.
          </p>
        </div>
        <div className="stickey h-[130vh]  top-[12%] left-2/4 w-2/4 bg-slate-400 ">
          right
        </div>
      </div>
    </>
  );
}

function CheckoutHead({ children }) {
  return (
    <h1 className="capitalize text-xl font-semibold mt-8 mb-3">{children}</h1>
  );
}
export default CheckOut;
