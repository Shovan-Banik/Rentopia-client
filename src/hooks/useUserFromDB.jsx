import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUserFromDB = () => {
    const[axiosSecure]=useAxiosSecure();
    const {refetch, data: allUser=[]} = useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
            const res = await axiosSecure('/users')
            return res.data;
        },
        // queryFn: async()=>{
        //     const res = await fetch('https://rentopia-server.vercel.app/users')
        //     return res.json();
        // },
      })
    return [allUser,refetch];
};

export default useUserFromDB;