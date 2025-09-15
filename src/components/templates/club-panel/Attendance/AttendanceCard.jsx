export function AttendanceCard({ item }) {
  return (
    <div>
      <div
        className={`rounded-3xl p-4 text-center transition-all hover:shadow-lg cursor-pointer ${
          item.status === "inactive"
            ? "bg-[#FFC3C3] border-2 border-red-200"
            : "bg-[#9595951C] border-2 border-gray-200 hover:border-blue-300"
        }`}
      >
        <div className="flex justify-end">
          <h1 className="text-5xl font-extrabold text-[#289DFC61]">
            {item.number}
          </h1>
        </div>
        <div
          className={`w-8 h-8 rounded-full border-4 mb-3 ${
            item.status === "inactive"
              ? "border-red-400 bg-red-100"
              : "border-blue-400 bg-blue-100"
          }`}
        ></div>
      </div>
      <p className="text-sm md:text-lg font-medium text-gray-700 text-center mt-3">
        {item.name}
      </p>
    </div>
  );
}

