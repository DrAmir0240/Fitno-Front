import api from "@/config/api";
import { useQuery } from "@tanstack/react-query";

const useAuthStatus = () => {
  const queryFn = () => api.get("/accounts/status/" , {withCredentials : true});
  const queryKey = ["user"];
  const { data, error, isPending, isLoading, refetch } = useQuery({
    queryKey,
    queryFn,
    retry: false,
  });

  return { data, error, isPending, isLoading, refetch };
};
const useGetGyms = () => {
  const queryFn = () => api.get("/gyms/customer/gyms/");
  const queryKey = ["gyms"];
  const { data, error, isPending, isLoading, refetch } = useQuery({
    queryKey,
    queryFn,
    retry: false,
  });

  return { data, error, isPending, isLoading, refetch };
};

export {useAuthStatus ,useGetGyms}