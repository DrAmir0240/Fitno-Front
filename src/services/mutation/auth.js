import api from "@/config/api";
import { useMutation } from "@tanstack/react-query";

const useRegister = () => {
  const mutationFn = (data) => api.post("accounts/customer/register/", data);

  return useMutation({ mutationFn });
};

export { useRegister };
