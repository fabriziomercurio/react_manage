import { useState, useEffect } from "react";

let globalParameter = {
    path: window.location.pathname,
    id: null
};

let listeners: any[] = [];

export function useRoute() {
    const [, forceUpdate] = useState({});

    useEffect(() => {
        listeners.push(forceUpdate);

        return () => {
            listeners = listeners.filter(
                listener => listener !== forceUpdate
            );
        }; 
    }, []);

    const navigate = (router: any) => {
        globalParameter = router; 

        window.history.pushState(
            {},
            "",
            router.path
        );

        listeners.forEach(listener => listener({}));
    };

    return {
        parameter: globalParameter,
        navigate
    };
}