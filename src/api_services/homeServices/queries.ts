import { useQuery } from "@tanstack/react-query";
import { getAllResults } from ".";

export const useGetAllResults = (pageCurrent: number) => {
  return useQuery({
    queryKey: ["get-driver-profile", pageCurrent],
    queryFn: () => getAllResults(pageCurrent),
  });
};
