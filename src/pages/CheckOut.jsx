import Header from "../components/Header";

function CheckOut() {
  return (
    <>
      <Header />
      <div className=" flex items-center justify-between border-t ">
        <div className=" h-[100vh] w-2/4">
          <h1>contact</h1>
          <input type="email" name="" id="" />
          <div>
            <input type="checkbox" name="" id="" />
            <p>Email me with news and offers</p>
          </div>
          <h1>Delivery</h1>
          <div>
            <select name="" id="">
              <option value="">pakistan</option>
            </select>
            <input type="text" name="" placeholder="firstName" id="" />
            <input type="text" name="" placeholder="Last Name" id="" />
            <input type="text" name="" placeholder="Address" id="" />
            <input type="text" name="" placeholder="city" id="" />
            <input type="text" name="" placeholder="postal code" id="" />
            <input type="text" name="" placeholder="phone Number" id="" />
          </div>
          <div>
            <input type="checkbox" name="" id="" />
            <p>Save this information for next time</p>
          </div>
          <div>
            <input type="checkbox" name="" id="" />
            <p>Text me with news and offers</p>
          </div>
          <input type="text" name="" id="" />
          <div>
            <span>cod shipping</span>
            <span>rs 150.00</span>
          </div>
          <h1>payment</h1>
          <p>All transactions are secure and encrypted.</p>
        </div>
        <div className="fixed  top-[12%] left-2/4 w-2/4 bg-slate-400 h-full">
          right
        </div>
      </div>
    </>
  );
}

export default CheckOut;
