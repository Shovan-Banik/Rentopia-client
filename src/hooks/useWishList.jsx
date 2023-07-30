import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../provider/AuthProvider';
import { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';


const useWishList = () => {
    const{user,loading}=useContext(AuthContext);
    // const token=localStorage.getItem('access-token');
    const[axiosSecure]=useAxiosSecure();
    console.log(user);

    const {refetch, data: wishList=[]} = useQuery({
        queryKey: ['wishLists',user?.email],
        enabled: !loading,
        queryFn: async()=>{
            const res = await axiosSecure(`/wishLists?email=${user?.email}`)
            console.log('res from axios', res);
            return res.data;
        },
        // queryFn: async()=>{
        //     const res = await fetch(`http://localhost:5000/wishLists?email=${user?.email}`,{headers:{
        //         authorization: `bearer ${token}`
        //     }})
        //     return res.json();
        // },
      })
    return [wishList,refetch];
};

export default useWishList;