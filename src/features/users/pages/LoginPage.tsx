import LoginNew from "../components/Login";
import { useLogin } from "../hooks/UseLogin";

const LoginPage = () =>  
{
   const input = useLogin(); 
   return(
    <>
       <LoginNew  {...input}/> 
    </>
   )
}


export default LoginPage; 