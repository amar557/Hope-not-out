import HomePagination from "../components/HomePagination";
import CategoriesBoysAndGirls from "../components/CategoriesBoysAndGirls";
import CategoryMenAndWomen from "../components/CategoryMenAndWomen";
import BestSelling from "../components/BestSelling";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <HomePagination />
      <CategoryMenAndWomen />
      <CategoriesBoysAndGirls />
      <BestSelling />
    </div>
  );
}

export default Home;
