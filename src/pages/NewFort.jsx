import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { minKids } from "../redux/AsyncFIrebase";
import BestSellingCard from "../components/BestSellingCard";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
function NewFort() {
  const dispatch = useDispatch();

  let all = [];
  const select = useSelector((e) => e.pages.products);
  let urls = select.map((e) => e.data().urls[0]);

  const storage = getStorage();
  for (let i = 0; i < urls.length; i++) {
    getDownloadURL(ref(storage, urls[i])).then((url) => {
      all.push(url);
    });
  }
  useEffect(() => {
    dispatch(minKids());
  }, [dispatch]);
  console.log(all.length);
  return (
    <div>
      <BestSellingCard />
    </div>
  );
}

export default NewFort;
