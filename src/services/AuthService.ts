export const AuthService = {
   setToken: (token:string) => localStorage.setItem("token",token), 
   getToken: () => localStorage.getItem("token")
} 
