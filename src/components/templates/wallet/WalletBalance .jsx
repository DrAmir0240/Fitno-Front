import { Button } from "@/components/ui";

export function WalletBalance({ balance = "0" }) {
  return (
    <div className="w-full max-h-[250px] relative rounded-3xl bg-gradient-to-br overflow-hidden z-6 pl-10 p-5 pt-7 from-[#0055DC] to-[#0063FF] shadow-xl">
      <div className="bg-[#49B1FF] w-[500px] h-[500px] rounded-full absolute -right-75 -top-8 z-5"></div>
      <div className="flex justify-between min-h-full">
        <div className="z-10 flex flex-col justify-between">
          <h4 className="font-semibold text-lg md:text-2xl">
            موجودی
            <p>{balance} ریال</p>
          </h4>
          <Button variant="link" color="white">
            افزایش
          </Button>
        </div>
        <div className="flex flex-col text-left gap-5 z-10">
          <Button variant="custom" color="#232222DE">
            افزایش موجودی
          </Button>
          <div className="font-semibold text-white">
            <h1 className="text-4xl mb-4">8,453.00</h1>
            <p className="text-xl">تومان</p>
          </div>
        </div>
      </div>
    </div>
  );
}