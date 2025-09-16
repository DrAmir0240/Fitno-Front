export  const ProvinceSelect =() =>{
  return (
    <div className="grid w-full gap-3">
      <label className="text-sm font-medium leading-none">
        استان
      </label>
      <select
        name="province"
        className="flex h-12 w-full rounded-xl border border-input bg-transparent px-3 py-2 text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
      >
        <option value="">استان را انتخاب کنید</option>
        <option value="tehran">تهران</option>
        <option value="isfahan">اصفهان</option>
        <option value="shiraz">شیراز</option>
        <option value="tabriz">تبریز</option>
        <option value="mashhad">مشهد</option>
        <option value="ahvaz">اهواز</option>
      </select>
    </div>
  );
}