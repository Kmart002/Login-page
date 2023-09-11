import React, { useState } from "react";
import useProductData from "../../hooks/useProductData";
import { useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, loading } = useProductData(`products/${id}`);
  const [currentImage, setCurrentImage] = useState(null);
  return (
    <div>
      {loading ? (
        <BeatLoader color="#380C65" />
      ) : (
        <>
          {data && (
            <div className="grid grid-cols-2">
              <div>
                <img src={currentImage ? currentImage : data.thumbnail} className="h-[15rem] object-contain" alt="" />
                <div className="flex items-center justify-evenly mt-10">
                  {data.images?.map((image, index) => (
                    <span key={index}>
                      <img src={image} onClick={() => setCurrentImage(image)} alt="" className="w-10 cursor-pointer hover:scale-90 h-10" />
                    </span>
                  ))}
                </div>
              </div>
              <div>
                {data && (
                  <>
                    <div>
                      <h1 className="text-3xl font-bold">{data.title}</h1>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductDetails;
