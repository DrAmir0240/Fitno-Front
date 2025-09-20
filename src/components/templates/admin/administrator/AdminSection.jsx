import AddButton from "./AddButton";
import AdminCard from "./AdminCard";

export const AdminSection = ({ admins, onAddAdmin }) => {
  return (
    <div className="mt-5">
      <div className="grid grid-cols-6 h-[220px] gap-5">
        <AddButton onClick={onAddAdmin} />
        
        {admins.map((admin, index) => (
          <AdminCard key={index} admin={admin} />
        ))}
      </div>
    </div>
  );
};
