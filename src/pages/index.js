import Link from "next/link";

const getRandomProducts = (data, count) => {
  const shuffledData = data.sort(() => 0.5 - Math.random());
  return shuffledData.slice(0, count);
};

const HomePage = ({ randomProducts, uniqueCategories }) => {

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
            <Link href={`${product._id}`}>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
      <section className="w-11/12 mx-auto">
        <h1 className="text-3xl font-bold mb-4">Featured Categories</h1>
        <div className="featured-products grid grid-cols-1 md:grid-cols-3 gap-5">
          {uniqueCategories.map((category) => (
            <Link href={`/categories/${category.name}`} key={category._id}>
              <div className="text-black no-underline">
                <div className="p-4 bg-white border border-gray-300 rounded shadow-md hover:shadow-lg transition duration-300">
                  <h2 className="text-xl font-semibold text-center">
                    {category.name}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:3000/api/pc");
  const data = await response.json();
  const randomProducts = getRandomProducts(data.data, 6); /* data.data */
  console.log("data fetching complete", data.data);

  const response2 = await fetch(`http://localhost:3000/api/pc?categories=1`);
  const data2 = await response2.json();
  const uniqueCategories = data2.data;
  return {
    props: {
      randomProducts,
      uniqueCategories,
    },
  };
};
