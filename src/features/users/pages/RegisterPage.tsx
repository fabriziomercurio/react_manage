import Register from "../components/Register";
import { useRegister } from "../hooks/UseRegister";


const RegisterPage = () => {

    const register = useRegister();

     return (<> 
             { <Register {...register} />} 
         </>)
} 

export default RegisterPage; 
