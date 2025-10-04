import Image from "next/image";

const AdminCard = ({ admin }) => {
  return (
    <div className="bg-[#BCBCBC80] dark:bg-gray-700/80 rounded-xl p-5 transition-colors duration-300">
      <div className="flex flex-col items-center gap-3">
        <Image
          src={admin.image || "/images/user/user.png"}
          alt={admin.name}
          className="rounded-full object-cover mx-auto border-2 border-white dark:border-gray-600"
          width={80}
          height={80}
        />
        <p className="font-medium text-gray-800 dark:text-white">{admin.name}</p>
        <p className="mt-5 text-gray-500 dark:text-gray-400 transition-colors duration-300">
          {admin.role}
        </p>
      </div>
    </div>
  );
};

export default AdminCard;