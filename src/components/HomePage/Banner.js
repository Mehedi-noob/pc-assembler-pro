import Link from 'next/link';

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white">
      <div className="container mx-auto py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src="https://media.istockphoto.com/id/1309717274/vector/realistic-black-modern-thin-frame-display-computer-monitor-vector-illustration-jpg.jpg?s=612x612&w=0&k=20&c=hWFdkv0V09HqWjqRy2w93ikw2RBAcoxrhXq_9AQsOhQ="
              alt="Amazon Logo"
              className="w-10 h-10 mr-2 rounded"
            />
            <h1 className="text-xl font-semibold">PC assembler</h1>
          </div>
          <div className="md:ml-4">
            <Link className="text-xl font-semibold block md:inline-block md:mt-0" href="#featured-cat">
              Build By Category
            </Link>
          </div>
        </div>
        <p className="text-sm mt-1">Discover the best of functionality and versatility</p>
        <Link
          className="bg-yellow-800 text-white py-2 px-4 rounded-md mt-4 font-semibold inline-block"
          href="#featured-cat"
        >
          Explore Now
        </Link>
      </div>
    </div>
  );
};

export default Banner;
