import { useLayoutEffect } from "react";
import useProductData from "../../hooks/useProductData";
import { BeatLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const PageProductsView = (props) => {
  const { data, loading } = useProductData(props.pageApiUrl);

  useLayoutEffect(() => {
    document.title = props.pageTitle;
  }, [props.pageTitle]);

  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-full">
      {loading ? (
        <BeatLoader color="#380C65" />
      ) : (
        <section className="flex items-center gap-5 justify-between flex-wrap h-full">
          {data &&
            data.products?.map((item) => (
              <div className="w-[10rem] relative bg-white h-[15rem] rounded-md">
                <img src={item.thumbnail} className="h-[60%]" alt="" />
                <div className="flex items-center justify-between">
                  <p>{item.title}</p>
                  <p>NGN {item.price}</p>
                </div>
                <button
                  onClick={() => navigate(`/single-product/${item.id}`)}
                  className="w-full absolute bottom-0 bg-[#380C65] shadow-md hover:scale-90 hover:transition-all text-white font-semibold rounded-md py-1"
                >
                  View more
                </button>
              </div>
            ))}
        </section>
      )}
    </div>
  );
};

export default PageProductsView;
