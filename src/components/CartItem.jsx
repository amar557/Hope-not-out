import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { Decreament, DeleteItem, Increment } from "../redux/CartSlice";

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
      <div className="flex  items-start justify-start md:justify-between my-5 lg:flex-row flex-row md:flex-col lg:items-center lg:border-0 md:border">
        <div className="md:basis-5/12  flex items-center gap-5 lg:border-b-0 border-b-0 md:border-b ">
          <img src={pic} alt="" className="w-32 h-full" />

          <span className="md:block hidden">
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
        <div className="flex md:flex-row  flex-col md:ps-0 ps-4  justify-between  lg:w-3/5 md:w-full md:pe-5 lg:border-0 lg:py-0  py-4">
          <span className="md:hidden block">
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
          <div className="space-x-3 text-start basis-1/6 md:border-y-0  border-y border-dashed md:mb-0 mb-2 py-1 md:py-0">
            <span className={`${isDiscount ? "line-through" : ""}`}>
              Rs.{rate}
            </span>
            {isDiscount && (
              <span className="text-red-400">Rs{discountRate}</span>
            )}
          </div>
          <div className="border px-3 py-1 flex items-center justify-between gap-3 rounded-3xl border-black mb-1 md:mb-0  basis-[10%]">
            <button onClick={() => dispatch(Decreament(id))}>
              <FaMinus />
            </button>
            <span className="font-medium">{quantity}</span>
            <button onClick={() => dispatch(Increment(id))}>
              <FaPlus />
            </button>
          </div>
          <div className="basis-1/6 text-start md:text-center md:border-t-0 border-t border-dashed">
            Rs.{total}
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
