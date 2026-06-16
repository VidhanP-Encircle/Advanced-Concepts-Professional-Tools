import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="bg-white shadow-xl rounded-xl p-8 w-[500px] text-center">
        <h1 className="text-4xl font-bold mb-4">Product Details</h1>

        <p className="text-xl mb-4">
          Product ID:
          <span className="font-bold text-blue-600 ml-2">{id}</span>
        </p>

        <div className="bg-green-100 text-green-700 p-4 rounded-lg">
          Assginement for the lazy loading and private route.
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
