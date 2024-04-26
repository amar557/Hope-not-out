import { Heading } from "./CategoryMenAndWomen";
import HoveredCard from "./HoveredCard";

const boysAndGirlsData = [
  {
    img: "https://www.hopenotout.com/cdn/shop/files/Boys-0-6_360x.jpg?v=1702900201",
    title: "mini boys (0-6y)",
    to: "minikids",
  },
  {
    img: "https://www.hopenotout.com/cdn/shop/files/Girls-0-6_360x.jpg?v=1702900201",
    title: "mini girls (0-6y)",
    to: "kids",
  },
  {
    img: "https://www.hopenotout.com/cdn/shop/files/Boys-7-14_360x.jpg?v=1702900200",
    title: "boys (7-14y)",
    to: "boys",
  },
  {
    img: "https://www.hopenotout.com/cdn/shop/files/Girls-7-14_360x.jpg?v=1702900200",
    title: "girls (7-14y)",
    to: "girls",
  },
  {
    img: "https://www.hopenotout.com/cdn/shop/files/Girls-Eastern-1_540x.jpg?v=1702900201",
    title: "girls-eastern",
    styling: "flex-grow-0",
  },
];
function CategoriesBoysAndGirls() {
  return (
    <div className="mb-12">
      <Heading>categories boys and girls</Heading>
      <div className="justify-center mt-8 flex gap-3  flex-wrap">
        {boysAndGirlsData.map((data, i) => (
          <HoveredCard
            key={i}
            img={data.img}
            styling={data.styling}
            title={data.title}
            to={data.to}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoriesBoysAndGirls;
