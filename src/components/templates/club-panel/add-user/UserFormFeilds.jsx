import { Input } from "@/components/ui";
import { RadioGroup } from "@/components/ui/RadioGroup";

export const UserFormFields = ({ selectedGender, setSelectedGender }) => {
  const genderOptions = [
    { value: "male", label: "خانوم" },
    { value: "female", label: "آقا" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
      <Input
        type="text"
        name="name"
        label="نام و نام خانوادگی"
        className="shadow-none"
      />
      <Input
        type="text"
        name="nationalCode"
        label="کد ملی"
        className="shadow-none"
      />
      <Input
        type="tel"
        name="phone"
        label="شماره تماس"
        className="shadow-none"
      />
      <Input
        type="text"
        name="code"
        label="کد یکبار مصرف"
        className="shadow-none"
      />
      <Input
        type="date"
        name="birthdate"
        label="تاریخ تولد"
        className="shadow-none"
      />
      {/* Province Select */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          استان
        </label>
        <select
          name="province"
          className="w-full px-3 py-2 h-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
        >
          <option value="">استان را انتخاب کنید</option>
          <option value="tehran">تهران</option>
          <option value="karaj">کرج</option>
          <option value="isfahan">اصفهان</option>
          <option value="shiraz">شیراز</option>
          <option value="tabriz">تبریز</option>
          <option value="mashhad">مشهد</option>
        </select>
      </div>
      {/* City Select */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          شهر
        </label>
        <select
          name="city"
          className="w-full px-3 py-2 h-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
        >
          <option value="">شهر را انتخاب کنید</option>
          <option value="tehran">تهران</option>
          <option value="karaj">کرج</option>
          <option value="isfahan">اصفهان</option>
          <option value="shiraz">شیراز</option>
          <option value="tabriz">تبریز</option>
          <option value="mashhad">مشهد</option>
        </select>
      </div>
      {/* Gender Radio Group */}
      <div className="md:col-span-2">
        <RadioGroup
          label="جنسیت"
          options={genderOptions}
          value={selectedGender}
          onChange={setSelectedGender}
        />
      </div>
    </div>
  );
};
