export const AuthService = {
   setAccessToken: (token:string) => localStorage.setItem("accessToken",token), 
   getAccessToken: () => localStorage.getItem("accessToken"), 
   setRefreshToken: (token:string) => localStorage.setItem("refreshToken",token), 
   getRefreshToken: () => localStorage.getItem("refreshToken")
} 
