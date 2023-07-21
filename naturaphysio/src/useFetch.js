import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true);  
    const [error, setError] = useState(null);

    
    useEffect(() => {

        const abortConstant = new AbortController();

        fetch(url, {signal: abortConstant.signal }).then(res => {
            if (!res.ok) {
                throw Error("Incapable d'extraire l'information pour cette ressource.")
            }
            return res.json();
        }).then(data => {
            setData(data)
            setIsPending(false);
            setError(null);
        }).catch(err => {
            if (err.name === 'AbortError') {
                console.log('fetch aborted');
            } else {
                setIsPending(false);
                setError(err.message);
            }            
        });

        return () => abortConstant.abort();
        
    }, [url]);

    return { data, isPending, error }
}

export default useFetch;