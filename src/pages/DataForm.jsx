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

  async function handleDataSubmit(e) {
    e.preventDefault();
    await addDoc(collection(firestore, "bestsellingproducts"), {
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
    setIsdiscount("");
    setrate("");
    settext("");
  }
  return (
    <form onSubmit={handleDataSubmit}>
      <div>
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
          // value={rate}
        />
      </div>
      <div>
        <label htmlFor="">isDiscount</label>
        <input
          type="text"
          className="border w-full"
          onChange={(e) => {
            if (e.target.value == "1") {
              setIsdiscount(true);
            } else {
              setIsdiscount(false);
            }
          }}
          // value={isDiscount}
        />
      </div>
      <div>
        <label htmlFor="">discount rate</label>
        <input
          type="text"
          className="border w-full"
          onChange={(e) => setDiscountRate(Number(e.target.value))}
          // value={discountRate}
        />
      </div>
      <button onClick={handleDataSubmit} className="border p-2 bg-blue-600">
        submit
      </button>
    </form>
  );
}

export default DataForm;
