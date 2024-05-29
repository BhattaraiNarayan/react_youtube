
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Button = ({ List }) => {

  return (
    <div>
        <div
          className="flex overflow-x-auto whitespace-nowrap space-x-4 p-2 scrollbar-hide"
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
