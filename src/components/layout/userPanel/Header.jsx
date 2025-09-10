import { HiUser } from "react-icons/hi2";
import { TbWallet } from "react-icons/tb";

export default function Header() {
  return (
    <header>
        <section className="flex  justify-between items-center mb-5">
          <div>
            <div className="bg-[#289DFC38] w-[92px] h-[33px] rounded-2xl flex justify-center items-center">
              لوگو
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <TbWallet size={24} />
            <HiUser size={24} />
          </div>
        </section>
      </header>
  );
}