
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Button = ({ List }) => {
  // const scrollContainerRef = useRef(null);

  // const scrollLeft = () => {
  //   if (scrollContainerRef.current) {
  //     scrollContainerRef.current.scrollBy({
  //       left: -200,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  // const scrollRight = () => {
  //   if (scrollContainerRef.current) {
  //     scrollContainerRef.current.scrollBy({
  //       left: 200,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  return (
    <div className="relative">
      {/* <div className="relative overflow-hidden">
        <div className="absolute top-1/2 transform -translate-y-1/2 left-2 z-10">
          <button
            className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
            onClick={scrollLeft}
          >
            <FaChevronLeft />
          </button>
        </div> */}

        {/* <div className="absolute top-1/2 transform -translate-y-1/2 right-2 z-10">
          <button
            className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
            onClick={scrollRight}
          >
            <FaChevronRight />
          </button>
        </div> */}
        <div
          // ref={scrollContainerRef}
          className="flex overflow-x-auto whitespace-nowrap space-x-4 p-4 scrollbar-hide"
        >
          {List.map((item) => (
            <button
              key={item.id}
              className="px-5 py-2 m-2 bg-gray-100 rounded-lg"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
  );
};

export default Button;
