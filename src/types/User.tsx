export type UserLoginProps = {
    submitLogin: React.FormEventHandler<HTMLFormElement>;
    handleInputChange: React.ChangeEventHandler<HTMLInputElement>;
} 

export type UserRegisterProps = {
    submit: React.FormEventHandler<HTMLFormElement>;
    handleInputChange: React.ChangeEventHandler<HTMLInputElement>;
} 

export type UserLogin = { 
    email: string;
    password: string;
}

export type UserRegister = { 
    email: string;
    password: string;
}