import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { Decreament, DeleteItem, Increment } from "../redux/CartSlice";
const items = {
  pic: "https://www.hopenotout.com/cdn/shop/files/51_540x.jpg?v=1711344927",
  heading: "Boy's Morning Face Graphic T-Shirt",
  size: "02-03Y",
  rate: 1690.0,
  discountRate: 1183.0,
  isDiscount: true,
  total: 56452,
};
function CartItem({
  pic,
  heading,
  size,
  rate,
  discountRate,
  isDiscount,
  total,
  quantity,
  id,
}) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex items-center justify-between my-5">
        <div className="basis-5/12 flex items-center gap-5">
          <img src={pic} alt="" className="w-32" />
          <span>
            <p className="font-bold  text-sm">{heading}</p>
            <p className="space-x-2 text-sm font-bold text-[#0f172a6b] my-1">
              <span>size:</span>
              <span className="text-sm">{size}</span>
            </p>
            <div className="space-x-2 my-2 text-[#00000080]">
              <button className="text-lg ">
                <FiEdit />
              </button>
              <button
                className="text-lg "
                onClick={() => dispatch(DeleteItem(id))}
              >
                <RiDeleteBin6Line />
              </button>
            </div>
          </span>
        </div>
        <div className="space-x-3 text-start basis-1/6">
          <span className={`${isDiscount ? "line-through" : ""}`}>
            Rs.{rate}
          </span>
          {isDiscount && <span className="text-red-400">Rs{discountRate}</span>}
        </div>
        <div className="border px-3 py-1 flex items-center justify-between gap-3 rounded-3xl border-black basis-[10%]">
          <button onClick={() => dispatch(Decreament(id))}>
            <FaMinus />
          </button>
          <span className="font-medium">{quantity}</span>
          <button onClick={() => dispatch(Increment(id))}>
            <FaPlus />
          </button>
        </div>
        <div className="basis-1/6 text-center">Rs.{total}</div>
      </div>
    </>
  );
}

export default CartItem;
