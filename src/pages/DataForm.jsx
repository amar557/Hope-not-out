import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../FireBase/firebase";
import { useState } from "react";
function DataForm() {
  const [img1, setimg1] = useState("");
  const [img2, setimg2] = useState("");
  const [text, settext] = useState("");
  const [rate, setrate] = useState(0);
  const [isDiscount, setIsdiscount] = useState(true);
  const [discountRate, setDiscountRate] = useState(0);
  const [category, setcategory] = useState("men");
  async function handleDataSubmit(e) {
    e.preventDefault();
    if (!img1 || !img2 || !text || !rate || !category) {
    } else {
      await addDoc(collection(firestore, category), {
        img1,
        img2,
        text,
        rate,
        isDiscount,
        discountRate,
      });
      setimg1("");
      setimg2("");
      setDiscountRate("");
      setIsdiscount(false);
      setrate("");
      settext("");
    }
  }
  return (
    <form onSubmit={handleDataSubmit}>
      <div>
        <div className="block ">
          <label htmlFor="">select the category</label>
          <select
            name=""
            id=""
            onChange={(e) => setcategory(e.target.value)}
            className="border w-1/2 ms-5 p-2 rounded outline-none"
          >
            <option value="men">men</option>
            <option value="women">women</option>
            <option value="kids">kids</option>
            <option value="minikids">minikids</option>
            <option value="bestsellingproducts">bestsellingproducts</option>
          </select>
        </div>

        <label htmlFor="">image1</label>
        <input
          type="text"
          className="border w-full"
          onChange={(e) => setimg1(e.target.value)}
          value={img1}
        />
      </div>
      <div>
        <label htmlFor="">image2</label>
        <input
          type="text"
          className="border w-full"
          onChange={(e) => setimg2(e.target.value)}
          value={img2}
        />
      </div>
      <div>
        <label htmlFor="">label</label>
        <input
          type="text"
          className="border w-full"
          onChange={(e) => settext(e.target.value)}
          value={text}
        />
      </div>
      <div>
        <label htmlFor="">rate</label>
        <input
          type="text"
          className="border w-full"
          onChange={(e) => setrate(Number(e.target.value))}
          value={rate}
        />
      </div>
      <div>
        <label htmlFor=""> check it if the product have Discount</label>

        <input
          type="checkbox"
          name=""
          id=""
          checked={isDiscount}
          onChange={(e) => setIsdiscount(e.target.checked)}
        />
      </div>
      <div>
        <label htmlFor="">discount rate</label>
        <input
          type="text"
          className="border w-full"
          onChange={(e) => setDiscountRate(Number(e.target.value))}
          value={discountRate}
        />
      </div>
      <button onClick={handleDataSubmit} className="border p-2 bg-blue-600">
        submit
      </button>
    </form>
  );
}

export default DataForm;
