import { AuthService } from "../../../services/AuthService"; 
import { RefreshToken } from "./RefreshToken";
const baseUrl = import.meta.env.VITE_BASE_URL  

export async function Logout(navigate: (route: any) => void) {

    try {
        let response = await fetch(`${baseUrl}/logout`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${AuthService.getAccessToken()}`
            },
        });

        // Se il token è scaduto, proviamo a rinnovarlo
        if (response.status === 401) {

            const result = await RefreshToken(AuthService.getRefreshToken());

            AuthService.setAccessToken(result.accessToken);
            AuthService.setRefreshToken(result.refreshToken);

            response = await fetch(`${baseUrl}/logout`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${result.accessToken}`
                },
            });
        }

        // Se il server rifiuta l'autenticazione
        if (response.status === 403) {
            console.log("Logout: 403 Forbidden");
        } 
        else if (!response.ok) {
            const errorData = await response.json().catch(() => null);

            throw new Error(
                errorData?.error || `HTTP ${response.status} - Error logout`
            );
        }

    } catch (error) {
        console.error("Errore durante il logout:", error);

    } finally {

        // Eliminiamo sempre i token locali
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");

        // Torniamo alla pagina login
        navigate({ path: "/login", id: null });
    }
}