import { useEffect } from "react";
import { useRoute } from "../../navbar/hooks/UseRoute";
import { Logout } from "../../auth/api/Logout";

const LogoutPage = () => {
    const { navigate } = useRoute();

    useEffect(() => {
        Logout(navigate);
    }, []);

    return <p>Logout in corso...</p>;
};

export default LogoutPage;