import { FiSearch } from "react-icons/fi";

const SearchBar = ({ placeholder }) => {
  return (
   <div className="relative mb-4">
          <input
            type="text"
            placeholder={placeholder}
            className="w-full bg-gray-100 rounded-full px-4 py-3 pr-12 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
  );
};

export default SearchBar;