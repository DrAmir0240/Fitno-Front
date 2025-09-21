// components/settlement-modal.jsx
"use client";

import { useState } from "react";
import Dialog from "@/components/ui/dialog";
import { Button } from "@/components/ui";

export function SettlementModal({ children, onSave, open, onOpenChange }) {
  const [settlementType, setSettlementType] = useState("daily");

  const handleSave = () => {
    onSave(settlementType);
    onOpenChange(false);
  };

  return (
    <Dialog
      contentClassName="lg:max-w-[500px] rounded-xl bg-white"
      open={open}
      onOpenChange={onOpenChange}
      title="نوع تسویه را انتخاب کنید"
    >
      <div className="flex flex-col gap-4 mb-6">
        <div 
          className={`flex items-center justify-between p-4 border-2 rounded-xl cursor-pointer transition-all ${
            settlementType === "daily" 
              ? "border-blue-500 bg-blue-50" 
              : "border-gray-300 hover:border-gray-400"
          }`}
          onClick={() => setSettlementType("daily")}
        >
          <label htmlFor="daily" className="flex items-center gap-3 cursor-pointer flex-1">
            <input
              type="radio"
              id="daily"
              name="settlementType"
              value="daily"
              checked={settlementType === "daily"}
              onChange={(e) => setSettlementType(e.target.value)}
              className="w-5 h-5 text-blue-600"
            />
            <span className="text-base font-medium">روزانه</span>
          </label>
        </div>
        
        <div 
          className={`flex items-center justify-between p-4 border-2 rounded-xl cursor-pointer transition-all ${
            settlementType === "instant" 
              ? "border-blue-500 bg-blue-50" 
              : "border-gray-300 hover:border-gray-400"
          }`}
          onClick={() => setSettlementType("instant")}
        >
          <label htmlFor="instant" className="flex items-center gap-3 cursor-pointer flex-1">
            <input
              type="radio"
              id="instant"
              name="settlementType"
              value="instant"
              checked={settlementType === "instant"}
              onChange={(e) => setSettlementType(e.target.value)}
              className="w-5 h-5 text-blue-600"
            />
            <span className="text-base font-medium">در لحظه</span>
          </label>
        </div>
      </div>
      
      <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-gray-300">
        <Button
          onClick={() => onOpenChange(false)}
          variant="outline"
          className="w-28"
        >
          انصراف
        </Button>
        <Button
          className="w-28"
          onClick={handleSave}
        >
          ذخیره
        </Button>
      </div>
    </Dialog>
  );
}