import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getDataByID } from "../redux/AsyncFIrebase";
import { useEffect } from "react";

function DetailsPage() {
  const selected = useSelector((data) => data.detailsPage);
  console.log(selected);
  const params = useParams();
  const dispatch = useDispatch();
  const data = selected.details.data();
  useEffect(() => {
    dispatch(getDataByID(params.id));
  }, []);
  return (
    <div>
      {selected.isLoading ? (
        <h1>Loading</h1>
      ) : (
        <div className="flex items-start  justify-start mt-8">
          <div className="shrink-0 grow-1 basis-[12%]">
            <img src={data.img2} alt="" className="h-48 mt-3" />
            <img src={data.img1} alt="" className="h-48 mt-3" />
          </div>
          <div className="shrink-0 grow-1 basis-2/5">
            <img src={data.img1} alt="" />
          </div>
          <div className="shrink-0 grow-1 basis-2/5">
            <div>{data.text}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailsPage;
