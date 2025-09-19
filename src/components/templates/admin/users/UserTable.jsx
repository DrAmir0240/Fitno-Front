import { Button, Input } from "@/components/ui";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";

export const UserTable = ({ users }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "فعال":
        return "bg-green-100 text-green-800 border-green-200";
      case "غیرفعال":
        return "bg-gray-100 text-gray-800 border-gray-200";
      case "بلاک شده":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-blue-100 text-blue-800 border-blue-200";
    }
  };

  const getMobileStatusColor = (status) => {
    switch (status) {
      case "فعال":
        return "bg-blue-500 text-white";
      case "غیرفعال":
        return "bg-[#F3F3F4] text-black";
      case "بلاک شده":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const getMobileStatusText = (status) => {
    switch (status) {
      case "فعال":
        return "فعال";
      case "غیرفعال":
        return "غیرفعال";
      case "بلاک شده":
        return "بلاک شده";
      default:
        return status;
    }
  };

  return (
    <div className="w-full">
      {/* Desktop Table View */}
      <div className="hidden md:block relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                کاربر
              </th>
              <th scope="col" className="px-6 py-3">
                وضعیت
              </th>
              <th scope="col" className="px-6 py-3">
                شماره تماس
              </th>
              <th scope="col" className="px-6 py-3">
                کد ملی
              </th>
              <th scope="col" className="px-6 py-3">
                سانس
              </th>
              <th scope="col" className="px-6 py-3">
                تراکنش ها
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <Input
                      id={`checkbox-table-${user.id}`}
                      type="checkbox"
                      className="w-4 h-4 "
                    />
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center gap-3"
                >
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover"
                    width={32}
                    height={32}
                  />
                  {user.name}
                </th>
                <td className="px-6 py-4">
                  <span
                    className={cn(
                      "px-2 py-1 rounded-full text-xs border",
                      getStatusColor(user.status)
                    )}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4">{user.phone}</td>
                <td className="px-6 py-4">{user.nationalCode}</td>
                <td className="px-6 py-4">{user.session}</td>
                <td className="px-6 py-4">{user.transactions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden">
        <div className="flex gap-2 justify-center mb-4 overflow-x-auto py-2">
          <Button className="px-4 py-2 bg-red-600 text-white">بلاک شده</Button>
          <Button className="px-10 py-2  bg-blue-500 text-white">فعال</Button>
          <Button className="px-10 py-2 bg-yellow-600 text-white">
            غیرفعال
          </Button>
        </div>
        <div className="space-y-3">
          {users.map((user) => (
            <div
              key={user.id}
              className={cn(
                "rounded-xl p-4 shadow-lg border",
                getMobileStatusColor(user.status),
                "flex items-center justify-between"
              )}
            >
              <div className="flex items-center gap-3">
                <Image
                  src={user.avatar}
                  alt={user.name}
                  className={cn(
                    "w-10 h-10 rounded-full object-cover border-2",
                    user.status === "فعال" ? "border-white" : "border-gray-300"
                  )}
                  width={40}
                  height={40}
                />
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{user.name}</span>
                  <span className="text-xs">{user.phone}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">
                  {getMobileStatusText(user.status)}
                </span>
                <Button
                  size="icon"
                  variant="ghost"
                  className={cn(
                    "p-0",
                    user.status === "فعال" ? "text-white" : "text-gray-600"
                  )}
                >
                  <IoIosArrowBack size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
