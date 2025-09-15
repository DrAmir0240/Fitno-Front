import Image from "next/image";

export const AddUserHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 border-b border-gray-200 gap-4">
      <h1 className="text-lg sm:text-xl font-semibold text-gray-800 text-center sm:text-right">
        افزودن کاربر جدید
      </h1>
      <div className="flex items-center space-x-2 space-x-reverse">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden">
          <Image
            src="/images/user/user.png"
            alt="Profile"
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
