import { Navigate,useLocation } from "react-router-dom";
import {useAuth} from "./auth";


const RequireAuth = ({children})=>{
    const auth = useAuth();
    const Location = useLocation();
    if(!auth.user){
        return <Navigate to="/login" state={{path:Location.pathname}}/>
    }

     return children;

}

export default RequireAuth;