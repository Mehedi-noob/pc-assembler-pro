import auth from "@/firebase/firebase.auth.js";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";

const getRandomProducts = (data, count) => {
  const shuffledData = data.sort(() => 0.5 - Math.random());
  return shuffledData.slice(0, count);
};

const HomePage = ({ randomProducts }) => {
  const { data: session } = useSession();

  const [user, loading, error] = useAuthState(auth);

  console.log("From home", user);

  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-bold text-center">Featured Products</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {randomProducts?.map((product) => (
          <div
            key={product._id}
            className="border border-gray-300 p-4 text-center rounded-lg"
          >
            <img
              src={product.Image}
              alt={product.ProductName}
              className="w-40 h-40 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">{product.ProductName}</h3>
            <p>Category: {product.Category}</p>
            <p>Price: ${product.Price}</p>
            <p>Status: {product.Status}</p>
            <p>Rating: {product.Rating} out of 5 stars</p>
            <Link href={`/products/${product._id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:3000/api/pc");
  const data = await response.json();
  const randomProducts = getRandomProducts(data.data, 6); /* data.data */
  console.log("data fetching complete", data.data);
  return {
    props: {
      randomProducts,
    },
  };
};
