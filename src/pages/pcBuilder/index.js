// pages/pc-builder.js
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

const PcBuilder = ({ categories }) => {
  const selectedProducts = useSelector((state) => state.products);
  console.log("selectedproduct", selectedProducts);
  // Assuming "products" is the slice name where products are stored

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">PC Builder</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
            {!selectedProducts.find(
              (selectedProduct) => selectedProduct?.Category === category.name
            )?.ProductName ? (
              <Link href={`/pcBuilder/${category.name}`}>Select</Link>
            ) : (
              <p>
                (
                {
                  selectedProducts.find(
                    (selectedProduct) =>
                      selectedProduct?.Category === category.name
                  )?.ProductName
                }
                )
              </p>
            )}
          </div>
        ))}
      </div>
      {selectedProducts.length >= 5 && <button
        onClick={() => {
          toast.success("PC building Successful")
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
      >
        Build you pc
      </button>}
    </div>
  );
};

export default PcBuilder;

// ... getServerSideProps remains the same ...
export async function getServerSideProps() {
  // Fetch the list of categories from your API
  // For demonstration purposes, we'll use dummy data
  // const categories = [
  //   { id: 'cpu', name: 'CPU / Processor' },
  //   { id: 'motherboard', name: 'Motherboard' },
  //   { id: 'ram', name: 'RAM' },
  //   { id: 'psu', name: 'Power Supply Unit' },
  //   { id: 'storage', name: 'Storage Device' },
  //   { id: 'monitor', name: 'Monitor' },
  // ];

  const response = await fetch(`https://pc-assember-pro.vercel.app/api/pc?categories=1`);
  const data = await response.json();
  const categories = data.data;

  return {
    props: {
      categories,
    },
  };
}
