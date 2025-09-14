// components/settlement-modal.jsx
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui";
import { useState } from "react";

export function SettlementModal({ children, onSave }) {
  const [open, setOpen] = useState(false);
  const [settlementType, setSettlementType] = useState("daily");

  const handleSave = () => {
    onSave(settlementType);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="w-80 md:w-96 rounded-[20px] p-6">
        <DialogHeader className="mb-4">
          <DialogTitle className="font-medium text-center text-lg">
            نوع تسویه را انتخاب کنید
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col gap-3 mb-5">
          <div 
            className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer ${
              settlementType === "daily" ? "border-blue-500 bg-blue-50" : "border-gray-300"
            }`}
            onClick={() => setSettlementType("daily")}
          >
            <label htmlFor="daily" className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                id="daily"
                name="settlementType"
                value="daily"
                checked={settlementType === "daily"}
                onChange={(e) => setSettlementType(e.target.value)}
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-sm font-medium">روزانه</span>
            </label>
          </div>
          
          <div 
            className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer ${
              settlementType === "instant" ? "border-blue-500 bg-blue-50" : "border-gray-300"
            }`}
            onClick={() => setSettlementType("instant")}
          >
            <label htmlFor="instant" className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                id="instant"
                name="settlementType"
                value="instant"
                checked={settlementType === "instant"}
                onChange={(e) => setSettlementType(e.target.value)}
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-sm font-medium">در لحظه</span>
            </label>
          </div>
        </div>
        
        <div className="flex justify-center">
          <Button 
            className="px-10 py-2 rounded-xl"
            onClick={handleSave}
          >
            ذخیره
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}