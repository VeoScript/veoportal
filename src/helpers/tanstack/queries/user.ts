import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetUser = () => {
  return useQuery(
    ["user"],
    async () => {
      const user = await axios.get("/api/user");
      return user.data;
    },
    {
      onError: (error: any) => {
        console.error("ERROR GET USER", error.response.data);
      },
    }
  );
};
