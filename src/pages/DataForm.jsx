import { collection, addDoc } from "firebase/firestore";
import { firestore, storage } from "../FireBase/firebase";
import { useState } from "react";
import { ref, uploadBytes } from "firebase/storage";

function DataForm() {
  const [imges, setimg4] = useState("");

  const [text, settext] = useState("");
  const [rate, setrate] = useState(0);
  const [isDiscount, setIsdiscount] = useState(true);
  const [discountRate, setDiscountRate] = useState(0);
  const [category, setcategory] = useState("men");
  async function handleDataSubmit(e) {
    e.preventDefault();
    let urls = [];
    for (let i = 0; i < imges.length; i++) {
      const refer = ref(storage, `new/file/${imges[i].name + Date.now()}`);
      let imgURl = await uploadBytes(refer, imges[i]);
      urls.push(imgURl.ref.fullPath);
    }
    console.log(urls);
    if (!text || !rate || !category || !imges) {
      console.log("no data");
    } else {
      await addDoc(collection(firestore, category), {
        text,
        rate,
        isDiscount,
        discountRate,
        urls,
      });
      setimg4("");
      setDiscountRate("");
      setIsdiscount(false);
      setrate("");
      settext("");
      urls = [];
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
      </div>

      <input type="file" multiple onChange={(e) => setimg4(e.target.files)} />
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
