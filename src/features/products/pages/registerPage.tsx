import RegisterNew from "../components/register";
import { useRegister } from "../hooks/useRegister";


const RegisterPage = () => {

    const register = useRegister();

     return (<> 
             { <RegisterNew {...register} />} 
         </>)
} 

export default RegisterPage; 
