import { Select } from "@/components/ui/select";

export const ProvinceSelect = ({ value, onValueChange, error, required }) => {
  const provinceOptions = [
    { value: "tehran", label: "تهران" },
    { value: "isfahan", label: "اصفهان" },
    { value: "shiraz", label: "شیراز" },
    { value: "tabriz", label: "تبریز" },
    { value: "mashhad", label: "مشهد" },
    { value: "ahvaz", label: "اهواز" }
  ];

  return (
    <Select
      label="استان"
      options={provinceOptions}
      value={value}
      onValueChange={onValueChange}
      placeholder="استان را انتخاب کنید"
      error={error}
      required={required}
    />
  );
};