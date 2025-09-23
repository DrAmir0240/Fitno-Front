"use client";
import { useForm } from "react-hook-form";
import { Button, Input, Select } from "@/components/ui";
import Image from "next/image";
import { useRegister } from "@/services/mutation/auth";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const { mutate: registerUser, isPending } = useRegister();
 const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      national_code: "",
      city: "",
      password: "",
      confirmPassword: "",
    },
  });

  const password = watch("password");

  const onSubmit = (data) => {
    const apiData = {
      full_name: data.fullName,
      phone: data.phone,
      email: data.email,
      national_code: data.national_code,
      password: data.password,
      city: data.city,
    };

    registerUser(apiData, {
      onSuccess: (response) => {
        console.log(response);
router.push("/auth/login")
        reset();
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };

  return (
    <div className="bg-[#D0E4FF] min-h-screen max-w-[600px] mx-auto relative px-10 pb-5 flex flex-col">
      <Image
        src="/images/user/pattern2.svg"
        width={300}
        height={300}
        className="absolute top-0 right-0"
        alt="pattern"
      />
      <Image
        src="/images/user/pattern.svg"
        width={300}
        height={300}
        className="absolute bottom-0 left-0"
        alt="pattern"
      />

      <div className="flex justify-center pt-10">
        <Image
          src="/images/user/frame.svg"
          width={48}
          height={48}
          alt="frame"
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-auto mb-5">
        <div className="my-10">
          <h4 className="font-semibold text-base md:text-xl">ثبت نام</h4>
          <p className="text-[12px] md:text-base mt-3">
            برای ثبت‌نام اطلاعات خود را وارد نمایید.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <Input
            label="نام و نام خانوادگی"
            type="text"
            className="z-10"
            {...register("fullName", {
              required: "نام و نام خانوادگی الزامی است",
              minLength: {
                value: 3,
                message: "نام و نام خانوادگی باید حداقل ۳ کاراکتر باشد",
              },
            })}
            error={errors.fullName?.message}
            required
          />

          <Input
            label="تلفن همراه "
            type="text"
            {...register("phone", {
              required: "شماره همراه الزامی است",
              validate: (value) => {
                const phoneRegex = /^09[0-9]{9}$/;

                return (
                  phoneRegex.test(value) || "لطفاً شماره همراه معتبر وارد کنید"
                );
              },
            })}
            error={errors.phone?.message}
            required
          />
          <Input
            label="ایمیل"
            type="text"
            {...register("email", {
              required: " ایمیل الزامی است",
              validate: (value) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                return emailRegex.test(value) || "لطفاً ایمیل معتبر وارد کنید";
              },
            })}
            error={errors.email?.message}
            required
          />

           <Input
            label="کد ملی"
            type="text"
            className="z-10"
            {...register("national_code", {
              required: "کد ملی الزامی است",
              minLength: {
                value: 3,
                message: "کد ملی باید حداقل ۳ کاراکتر باشد",
              },
            })}
            error={errors.national_code?.message}
            required
          />
           <Input
            label="شهر"
            type="text"
            className="z-10"
            {...register("city", {
              required: "شهر الزامی است",
            })}
            error={errors.city?.message}
            required
          />


          <Input
            label="کلمه عبور"
            type="password"
            {...register("password", {
              required: "کلمه عبور الزامی است",
              minLength: {
                value: 6,
                message: "کلمه عبور باید حداقل ۶ کاراکتر باشد",
              },
            })}
            error={errors.password?.message}
            required
          />

          <Input
            label="تکرار کلمه عبور"
            type="password"
            className="z-12"
            {...register("confirmPassword", {
              required: "تکرار کلمه عبور الزامی است",
              validate: (value) =>
                value === password || "کلمه عبور با تکرار آن مطابقت ندارد",
            })}
            error={errors.confirmPassword?.message}
            required
          />

          <Button type="submit" className="mt-5 z-10" disabled={isSubmitting}>
            {isSubmitting ? "در حال ثبت..." : "تایید"}
          </Button>
        </div>
      </form>
    </div>
  );
}
