import { useEffect, useState } from "react";

const useProperty = () => {
    const[category,setCategory]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        fetch('https://rentopia-server.vercel.app/property')
        .then(res=>res.json())
        .then(data=>{
            setCategory(data);
            setLoading(false);
        }
            );
    },[])
    return [category,loading];
};

export default useProperty;