import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

function Error() {
  const err = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/collection/men");
    }, 3000);
  }, [navigate]);
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <p className="text-xl font-semibold">page not found 😢</p>
    </div>
  );
}

export default Error;
