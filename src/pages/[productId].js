// pages/products/[productId].js
import { useRouter } from "next/router";

const ProductDetails = ({ product }) => {
  const router = useRouter();
  const { productId } = router.query;

  return (
    <div className="flex justify-center items-center bg-lightblue">
      <div className="grid grid-cols-1 gap-4 p-4 bg-white rounded-lg shadow-lg">
        <h1>Product Details</h1>
        <img
          src={product.Image}
          alt={product.ProductName}
          
        />
        <h2 className="text-xl font-semibold">{product.ProductName}</h2>
        <p>Category: {product.Category}</p>
        <p>Status: {product.Status === 'In Stock' ? 'In Stock' : 'Out of stock'}</p>
        <p>Price: ${product.Price}</p>
        <h3>Description</h3>
        <p>{product.Description}</p>
        <h3>Key Features</h3>
        <ul>
          {Object.entries(product.KeyFeatures).map(([key, value]) => (
            <li key={key}>
              <strong>{key}: </strong>
              {value}
            </li>
          ))}
        </ul>
        <h3>Reviews</h3>
        <ul>
          {product?.Reviews?.map((review, index) => (
            <li key={index} className="p-2 rounded-lg bg-gray-100 mb-2">
              <p>{review}</p>
            </li>
          ))}
        </ul>
        <p>Individual Rating: {product.IndividualRating} out of 5 stars</p>
        <p>Average Rating: {product.AverageRating} out of 5 stars</p>
      </div>
    </div>
  );
};

export default ProductDetails;

// This function is necessary to pre-render the dynamic product pages
export async function getServerSideProps({ params }) {
  const { productId } = params;

  // Fetch the detailed product data using the productId here
  // For demonstration purposes, we'll return dummy data based on productId
  const response = await fetch(`http://localhost:3000/api/pc?_id=${productId}`);
  const data = await response.json();
  const product = data.data[0];
  //   console.log("product details", product)

  return {
    props: {
      product,
    },
  };
}
