import { useContext} from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useUserRoleDB = () => {

    const{user}=useContext(AuthContext);
    const {refetch, data: userRole=[]} = useQuery({
        queryKey: ['user',user?.email],
        queryFn: async()=>{
            const res = await fetch(`https://rentopia-server.vercel.app/user?email=${user?.email}`)
            return res.json();
        },
      })
    return [userRole,refetch];
};

export default useUserRoleDB;


// const [userRole,setUserRole]=useState([]);
//     const{user}=useContext(AuthContext);

//     useEffect(()=>{
//      fetch(`https://rentopia-server.vercel.app/users/${user?.email}`)
//      .then(res=>res.json())
//      .then(data=>setUserRole(data));
//     },[])
 
//      return [userRole];