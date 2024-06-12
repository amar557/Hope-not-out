import { RxCross2 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useEffect, useState } from "react";
import { SearchResult } from "../redux/AsyncFIrebase";
import { useDispatch, useSelector } from "react-redux";
import SearchResultComp from "./SearchResultComp";
import { useNavigate } from "react-router";
function SearchBar({ searchbar, setSearchBar }) {
  const [search, setSearch] = useState("");
  const [category, setcategory] = useState("bestsellingproducts");
  const [s, setS] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sele = useSelector((e) => e.SearchResults.data);
  const loading = useSelector((e) => e.SearchResults.isLoading);
  const searched = s.filter((e) =>
    search === ""
      ? s
      : e.text.toLowerCase().includes(search.toLocaleLowerCase())
  );
  useEffect(() => {
    dispatch(SearchResult(category));
  }, [category]);
  useEffect(() => {
    async function getData() {
      let data = [];
      for (let d of sele) {
        data.push({ ...d.data(), id: d.id });
      }
      setS(data);
    }
    getData();
  }, [sele]);

  return (
    <>
      <div
        onClick={() => setSearchBar((e) => !e)}
        className={
          searchbar
            ? "fixed top-0 left-0 w-full h-screen bg-[#0000007a] z-30"
            : "hidden"
        }
      ></div>
      <div
        className={`md:w-1/3 bg-white ${
          searchbar ? "translate-x-0" : "translate-x-full"
        } h-screen z-50 fixed top-0 w-full transition-all duration-300 right-0 shadow-lg  py-4`}
      >
        <div className="flex items-center justify-between border-b pb-3 px-4 ">
          <p className="uppercase text-slate-700 text-base  ">
            search our site
          </p>
          <button className="text-lg " onClick={() => setSearchBar((e) => !e)}>
            <RxCross2 />
          </button>
        </div>
        <div className="w-full">
          <select
            name=""
            id="category"
            onChange={(e) => setcategory(e.target.value)}
            className="text-base py-2 my-2 items-center mt-4 justify-center flex capitalize border px-4 rounded-3xl w-11/12 outline-none mx-auto"
          >
            <option value="bestsellingproducts">bestsellingproducts</option>
            <option value="men">men</option>
            <option value="men-eastern">men eastern</option>
            <option value="women">women</option>
            <option value="women-eastern">women eastern</option>
            <option value="boys">boys</option>
            <option value="mini-boys">mini boys</option>
            <option value="girls">girls</option>
            <option value="mini-girls">girls mini</option>
            <option value="girls-eastern">girls eastern</option>
          </select>
          <div className="border rounded-3xl w-11/12 mx-auto px-4 py-1 mt-4 flex items-center justify-center ">
            <input
              type="text"
              className="border-0 outline-none  text-base flex-1"
              name=""
              onChange={(e) => setSearch(e.target.value)}
              id="item"
            />
            <button className="text-base text-slate-700">
              <CiSearch />
            </button>
          </div>
        </div>
        <div className=" mx-auto h-full overflow-y-scroll">
          <h1 className="ps-4 capitalize border-t pt-4 text-sm font-semibold shadow-lg py-2 px-1 fixed w-full bg-white">
            results
          </h1>
          <div className="mt-14 space-y-2">
            {searched.map((data, i) => (
              <SearchResultComp
                data={data}
                key={i}
                category={category}
                id={data.id}
                setSearchBar={setSearchBar}
              />
            ))}
          </div>
          {loading ? (
            <p className="text-sm">loading...</p>
          ) : searched.length > 0 ? (
            <button
              className="text-sm ms-4 flex items-center gap-1 justify-start hover:gap-2 transition-all "
              onClick={() => {
                navigate(`collection/${category}`);
                setSearchBar((open) => !open);
              }}
            >
              <span>view all</span>
              <IoIosArrowRoundForward />
            </button>
          ) : (
            <p className="text-sm ps-3 mt-2">no items</p>
          )}
        </div>
      </div>
    </>
  );
}

export default SearchBar;
