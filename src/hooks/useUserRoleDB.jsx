import { useContext} from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useUserRoleDB = () => {

    const{user}=useContext(AuthContext);
    const {refetch, data: userRole=[]} = useQuery({
        queryKey: ['user',user?.email],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/user?email=${user?.email}`)
            return res.json();
        },
      })
    return [userRole,refetch];
};

export default useUserRoleDB;


// const [userRole,setUserRole]=useState([]);
//     const{user}=useContext(AuthContext);

//     useEffect(()=>{
//      fetch(`http://localhost:5000/users/${user?.email}`)
//      .then(res=>res.json())
//      .then(data=>setUserRole(data));
//     },[])
 
//      return [userRole];