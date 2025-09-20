import Image from "next/image";

const AdminCard = ({ admin }) => {
  return (
    <div className="bg-[#BCBCBC80] rounded-xl p-5">
      <div className="flex flex-col items-center gap-3">
        <Image
          src={admin.image || "/images/user/user.png"}
          alt={admin.name}
          className="rounded-full object-cover mx-auto"
          width={80}
          height={80}
        />
        <p className="font-medium">{admin.name}</p>
        <p className="mt-5 text-gray-500">{admin.role}</p>
      </div>
    </div>
  );
};

export default AdminCard;