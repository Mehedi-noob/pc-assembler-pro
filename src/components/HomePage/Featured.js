import Link from "next/link";

const getRandomProducts = (data, count) => {
  const shuffledData = data.sort(() => 0.5 - Math.random());
  return shuffledData.slice(0, count);
};

const Featured = ({randomProducts}) => {
  // const [featuredProducts, setFeaturedProducts] = useState([]);

  // useEffect(() => {
  //   Fetch all products from the API endpoint
  //   fetch("https://pc-assember-pro.vercel.app/api/pc")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Randomly select 6 products from the fetched data
  //       const randomProducts = getRandomProducts(data, 6);
  //       console.log(randomProducts);
  //       setFeaturedProducts(randomProducts);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching products:", error);
  //     });

  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("https://pc-assember-pro.vercel.app/api/pc");
  //       const data = await response.json();
  //       const randomProducts = getRandomProducts(data.data, 6);
  //       console.log("data fetching complete", data.data);
  //       setFeaturedProducts(randomProducts);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   // Call the fetchData function when the component is mounted
  //   fetchData();
  // }, []);


  return (
    <div>
      <h1>Featured Products</h1>
      <div>
        {randomProducts?.map((product) => (
          <div
            key={product._id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              margin: "10px",
            }}
          >
            <img
              src={product.Image}
              alt={product.ProductName}
              style={{ width: "200px", height: "200px" }}
            />
            <h3>{product.ProductName}</h3>
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

export default Featured;

export const getStaticProps = async () => {
  const response = await fetch("https://pc-assember-pro.vercel.app/api/pc");
  const data = await response.json();
  const randomProducts = getRandomProducts(data.data, 6);
  console.log("data fetching complete", data.data);
  return {
    props: {
      randomProducts
    },
  };
};
