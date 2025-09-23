"use client";
import { Button, Input } from "@/components/ui";
import { useLogin } from "@/services/mutation/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const router = useRouter()
  const { mutate: loginUser, isPending } = useLogin();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      phone: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    loginUser(data, {
      onSuccess: (response) => {
        console.log(response);
        router.push("/profile");
        reset();
        setCookie(response.data.access ,response.data.refresh)
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

      <div className="flex justify-center pt-30">
        <Image
          src="/images/user/frame.svg"
          width={48}
          height={48}
          alt="frame"
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-auto mb-15">
        <div className="my-10">
          <h4 className="font-semibold text-base md:text-xl ">ورود</h4>
          <p className="text-[12px] md:text-base mt-3">
            برای ورود اطلاعات خود را وارد نمایید.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <Input
            label="تلفن همراه"
            type="text"
            className="z-10"
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
          />
          <Input
            label="رمز عبور"
            type="password"
            {...register("password", {
              required: "کلمه عبور الزامی است",
              minLength: {
                value: 6,
                message: "کلمه عبور باید حداقل ۶ کاراکتر باشد",
              },
            })}
            error={errors.password?.message}
          />

          <Button type="submit" disabled={isSubmitting} className="mt-5 z-10">
            تایید
          </Button>
        </div>
      </form>
    </div>
  );
}
