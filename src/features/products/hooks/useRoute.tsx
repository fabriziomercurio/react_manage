import { useState, useEffect } from "react";

let globalParameter = {
    path: "",
    id: null
};

let listeners: any[] = [];

export function useRoute() {

    const [, forceUpdate] = useState({});

    useEffect(() => {
        listeners.push(forceUpdate);
    }, []);

    const navigate = (router: any) => {
        globalParameter = router;
        listeners.forEach(l => l({}));
    };

    return {
        parameter: globalParameter,
        navigate
    };
}