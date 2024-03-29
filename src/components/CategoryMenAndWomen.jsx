import HoveredCard from "./HoveredCard";

const categoriesData = [
  {
    img: "https://www.hopenotout.com/cdn/shop/files/7R300418_e61c0b15-e157-4d9f-89f0-ca8be94d9130_360x.jpg?v=1710157970",
    title: "men",
  },
  {
    img: "https://www.hopenotout.com/cdn/shop/files/Untitled-1_360x.jpg?v=1702905465",
    title: "men eastern",
  },
  {
    img: "https://www.hopenotout.com/cdn/shop/files/Fusion_d37303b9-d74e-4daf-9fac-5d96f1e215f9_360x.jpg?v=1708808539",
    title: "women fusion",
  },
  {
    img: "https://www.hopenotout.com/cdn/shop/files/Women-Tiles_b8871734-c8c4-4362-9cc1-33f3a727fd05_360x.jpg?v=1708808572",
    title: "women eastern",
  },
];
function CategoryMenAndWomen() {
  return (
    <div className="  my-12">
      <Heading> categories mens & womens</Heading>
      <div className="flex md:gap-3 gap-2 mt-12 flex-wrap">
        {categoriesData.map((data, i) => (
          <HoveredCard img={data.img} title={data.title} />
        ))}
      </div>
    </div>
  );
}

export function Heading({ children }) {
  return (
    <h1 className="text-center uppercase text-2xl mb-6 heading font-medium relative">
      {children}
    </h1>
  );
}
export default CategoryMenAndWomen;
