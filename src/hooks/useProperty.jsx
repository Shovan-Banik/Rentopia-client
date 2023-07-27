import { useEffect, useState } from "react";
import { set } from "react-hook-form";

const useProperty = () => {
    const[category,setCategory]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        fetch('http://localhost:5000/property')
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