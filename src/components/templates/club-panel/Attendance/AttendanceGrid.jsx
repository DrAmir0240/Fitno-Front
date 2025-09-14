import AttendanceCard from "./AttendanceCard";

export function AttendanceGrid({ items }) {
  return (
    <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
      {items.map((item) => (
        <AttendanceCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default AttendanceGrid;