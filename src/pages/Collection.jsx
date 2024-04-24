import { useParams } from "react-router";

function Collection() {
  const params = useParams();

  console.log(params.collectionname);
  return <div>collectionn</div>;
}

export default Collection;
