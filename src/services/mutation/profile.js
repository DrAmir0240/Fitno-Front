import api from "@/config/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
const useUpgradeProfile = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const mutationFn = (data) => api.post("/accounts/gym-manager/upgrade/", data);
  return useMutation({
    mutationFn,
    onSuccess: (response) => {
      console.log(response);
      queryClient.invalidateQueries({ queryKey: ["gym-manager"] });
      router.push("/club-panel");
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
const useCreateTicket = () => {
  const queryClient = useQueryClient();
  const mutationFn = (data) =>
    api.post("/communications/customer/tickets/", data);
  return useMutation({
    mutationFn,
    onSuccess: (response) => {
      console.log(response);
      queryClient.invalidateQueries({ queryKey: ["tickets"] });
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export { useUpgradeProfile, useCreateTicket };
