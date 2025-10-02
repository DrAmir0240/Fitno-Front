import { FiSearch } from "react-icons/fi";

const SearchBar = ({ placeholder }) => {
  return (
    <div className="relative mb-4">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-[#f3f4f6] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-4 py-3 pr-12 text-sm placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:bg-white dark:focus:bg-gray-900 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-white transition-all duration-300"
      />
      <FiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500 transition-colors duration-300" />
    </div>
  );
};

export default SearchBar;