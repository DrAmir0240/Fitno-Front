import api from "@/config/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

const useAuthStatus = () => {
  const queryFn = () => api.get("/accounts/status/", { withCredentials: true });
  const queryKey = ["user"];
  const { data, error, isPending, isLoading, refetch } = useQuery({
    queryKey,
    queryFn,
  });

  return { data, error, isPending, isLoading, refetch };
};
const useGetGyms = () => {
  const queryFn = () => api.get("/gyms/customer/gyms/");
  const queryKey = ["gyms"];
  const { data, error, isPending, isLoading, refetch } = useQuery({
    queryKey,
    queryFn,
  });

  return { data, error, isPending, isLoading, refetch };
};
const useGetGymDetails = () => {
  const {clubId} = useParams()
  const queryFn = () => api.get(`/gyms/customer/gyms/${clubId}`);
  const queryKey = ["gyms"];
  const { data, error, isPending, isLoading, refetch } = useQuery({
    queryKey,
    queryFn,
  });

  return { data, error, isPending, isLoading, refetch };
};
const useGetServices = () => {
  const queryFn = () => api.get("/gyms/customer/memberships/");
  const queryKey = ["services"];
  const { data, error, isPending, isLoading, refetch } = useQuery({
    queryKey,
    queryFn,
  });

  return { data, error, isPending, isLoading, refetch };
};
const useGetGymMessages = () => {
  const queryFn = () => api.get("/communications/customer/announcements/gym/");
  const queryKey = ["gymMessages"];
  return useQuery({
    queryKey,
    queryFn,
  });
};
const useGetPlatformMessages = () => {
  const queryFn = () =>
    api.get("/communications/customer/announcements/platform/");
  const queryKey = ["platformMessages"];
  return useQuery({
    queryKey,
    queryFn,
  });
};
const useGetTickets = () => {
  const queryFn = () => api.get("/communications/customer/tickets/");
  const queryKey = ["tickets"];
  return useQuery({
    queryKey,
    queryFn,
  });
};

const useGetTransactions = () => {
  const queryFn = () => api.get("/payments/customer/transactions/");
  const queryKey = ["transactions"];
  return useQuery({
    queryKey,
    queryFn,
  });
};
const useGetSignedGyms = () => {
  const queryFn = () => api.get("/gyms/customer/gyms/signed/");
  const queryKey = ["signedGyms"];
  return useQuery({
    queryKey,
    queryFn,
  });
};
const useGetNotifications = () => {
  const queryFn = () => api.get("/communications/customer/notifications/");
  const queryKey = ["signedGyms"];
  return useQuery({
    queryKey,
    queryFn,
  });
};
const useGetSingleNotification = (id) => {
  const queryFn = () => api.get(`/communications/customer/notifications/${id}`);
  const queryKey = ["notification"];
  return useQuery({
    queryKey,
    queryFn,
  });
};
const useGetProfile = () => {
  const queryFn = () => api.get("/accounts/customer/profile/");
  const queryKey = ["profile"];
  return useQuery({
    queryKey,
    queryFn,
  });
};


 
export {
  useAuthStatus,
  useGetGyms,
  useGetGymDetails,
  useGetServices,
  useGetGymMessages,
  useGetPlatformMessages,
  useGetTickets,
  useGetTransactions,
  useGetSignedGyms,
  useGetNotifications,
  useGetSingleNotification,
  useGetProfile
};
