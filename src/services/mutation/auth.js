import api from "@/config/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useRegister = () => {
  const queryClient = useQueryClient()
  const mutationFn = (data) => api.post("accounts/customer/register/", data);
  return useMutation({ mutationFn , 
    onSuccess: (response) => {
     queryClient.invalidateQueries({ queryKey: ["user"] });
    },
   });
};
const useLogin = () => {
  const queryClient = useQueryClient()
  const mutationFn = (data) => api.post("accounts/login/", data);
  return useMutation({ mutationFn , 
    onSuccess: (response) => {
     queryClient.invalidateQueries({ queryKey: ["user"] });
    },
   });
};

export { useRegister, useLogin };
