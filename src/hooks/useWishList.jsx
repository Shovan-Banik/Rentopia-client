import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../provider/AuthProvider';
import { useContext } from 'react';

const useWishList = () => {
    const{user}=useContext(AuthContext);
    const {refetch, data: wishList=[]} = useQuery({
        queryKey: ['wishLists',user?.email],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/wishLists?email=${user?.email}`)
            return res.json();
        },
      })
    return [wishList,refetch];
};

export default useWishList;