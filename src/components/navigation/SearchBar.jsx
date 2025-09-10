import { CiSearch } from "react-icons/ci";

const SearchBar = ({ placeholder }) => {
  return (
    <div className="mt-8 mb-5 relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <CiSearch className="text-gray-400 text-xl" />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-2xl pl-10 pr-4 py-3 text-base font-bold border border-gray-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
};

export default SearchBar;