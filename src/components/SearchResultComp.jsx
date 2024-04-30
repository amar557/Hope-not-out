import { getDownloadURL, getStorage, ref } from "firebase/storage";
// import { storage } from "../FireBase/firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
function SearchResultComp({ data, category, setSearchBar, id }) {
  const storage = getStorage();
  const navigate = useNavigate();
  const [url, setUrl] = useState("");
  //   console.log(data);
  function goToDetailsPage(id) {
    console.log(id);
    navigate(`${category}/${id}`);
    setSearchBar((e) => !e);
  }

  useEffect(() => {
    async function fetchData() {
      let urls = "";
      try {
        const url = await getDownloadURL(ref(storage, data.urls[0]));
        urls = url;
      } catch (error) {
        console.error("Error getting download URL:", error);
      }
      setUrl(urls);
    }
    fetchData();
  }, [storage, data]);

  return (
    <div
      className="w-11/12 mx-auto flex items-start justify-start gap-5"
      onClick={() => goToDetailsPage(id)}
    >
      <img src={url} alt="" className="h-24 w-auto" />
      <div className="">
        <h1 className="text-sm font-medium capitalize">{data.text}</h1>
        <p className="text-xs">
          <span
            className={`text-slate-700  ${
              data.isDiscount ? "line-through" : ""
            } capitalize`}
          >
            rs {data.rate}
          </span>
          {data.isDiscount && (
            <span className="text-red-500 capitalize ms-2">
              rs {data.discountRate}
            </span>
          )}
        </p>
      </div>
    </div>
  );
}

export default SearchResultComp;
