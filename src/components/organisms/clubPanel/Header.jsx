import { LuMenu } from "react-icons/lu";

export default function Header() {
  return (
  <header>
         <section className="flex  justify-between items-center my-5 ">
           
           <div className="flex gap-2 items-center">
             <LuMenu size={24} />
   
           </div>

           <div>
             <div className="bg-[#289DFC38] w-[92px] h-[33px] rounded-2xl flex justify-center items-center">
               لوگو
             </div>
           </div>
         </section>
       </header>
  );
}