import { Button } from "@/components/ui";

export const FormActions =()=> {
  return (
    <div className="flex justify-end gap-3 sm:gap-4 pt-6 border-t border-gray-200">
      <Button
        type="submit"
        className="w-full sm:w-32 px-4 py-2"
      >
        ثبت
      </Button>
      <Button
        type="button"
        variant="destructive"
        className="w-full sm:w-32 px-4 py-2"
      >
        حذف کاربر
      </Button>
    </div>
  );
}
