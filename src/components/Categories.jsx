import { IoManOutline } from "react-icons/io5";
import { IoWomanOutline } from "react-icons/io5";
import { LiaChildSolid } from "react-icons/lia";
import { LiaBabySolid } from "react-icons/lia";
const categoriesData = [
  {
    icon: <IoManOutline />,
    title: "men",
  },
  {
    icon: <IoWomanOutline />,
    title: "women",
  },
  {
    icon: <LiaBabySolid />,
    title: "minikids (0-06yrs)",
  },
  {
    icon: <LiaChildSolid />,
    title: "kids (17-14yrs)",
  },
];

function Categories() {
  return (
    <div className="absolute top-12 w-full">
      {categoriesData.map((data, i) => (
        <p className="flex gap-2 items-center  px-5 py-2 border-b-[1px] w-full text-[#00000094] text-lg ">
          <span className="text-[#00000094]">{data.icon}</span>
          <span className="capitalize">{data.title}</span>
        </p>
      ))}
    </div>
  );
}

export default Categories;
