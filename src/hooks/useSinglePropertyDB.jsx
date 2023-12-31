import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useSinglePropertyDB = () => {
    const{user}=useContext(AuthContext);
    const {refetch, data: singleAddedProperty=[]} = useQuery({
        queryKey: ['properties', user?.displayName],
        queryFn: async()=>{
            const res = await fetch(`https://rentopia-server.vercel.app/properties?name=${user?.displayName}`)
            return res.json();
        },
      })
    return [singleAddedProperty,refetch];
};

export default useSinglePropertyDB;