"use client";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui";
import Dialog from "@/components/ui/dialog";
import { FiX } from "react-icons/fi";
import { useCreateTicket } from "@/services/mutation/profile";

const TicketModal = ({ open, onOpenChange }) => {
  const { mutate: createTicket, isLoading } = useCreateTicket();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm({
    mode: "onChange",
    defaultValues: {
      message: ""
    }
  });

  const onSubmit = (data) => {
    createTicket(data, {
      onSuccess: () => {
        reset(); 
        onOpenChange(false);
      },
      onError: (error) => {
        console.error("Error creating ticket:", error);
      }
    });
  };

  const handleClose = () => {
    reset();
    onOpenChange(false);
  };

  return (
    <Dialog

      open={open}
      onOpenChange={handleClose}
      contentClassName="max-w-md p-0 bg-white rounded-2xl [&>button]:hidden"
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-800">تیکت جدید</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            className="h-8 w-8 text-gray-400 hover:text-gray-600"
            disabled={isLoading}
          >
            <FiX size={18} />
          </Button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              متن پیام
            </label>
            <textarea
              id="message"
              {...register("message", {
                required: "لطفا متن تیکت را وارد کنید",
                maxLength: {
                  value: 1000,
                  message: "متن تیکت نمی‌تواند بیشتر از ۱۰۰۰ کاراکتر باشد"
                }
              })}
              placeholder="متن تیکت خود را وارد کنید..."
              className={`w-full h-32 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
            )}
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              className="flex-1 hover:text-black"
              disabled={isLoading}
            >
              انصراف
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600"
              disabled={isLoading || !isValid}
            >
              {isLoading ? "در حال ارسال..." : "ارسال تیکت"}
            </Button>
          </div>
        </form>
      </div>
    </Dialog>
  );
};

export default TicketModal;