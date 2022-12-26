import { useEffect, useState } from "react";
import Axios from 'axios';
import { useWorkoutContext } from "./useWorkoutsContext";



const useGet = (url) => {
    const { workouts, dispatch } = useWorkoutContext()

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        Axios.get(url, { signal: abortCont.signal })
            .then((response) => {

            if (!response.statusText == "ok") {
                throw Error('Could not get the data fot that resource');
                }
            
                dispatch({ type: 'SET_WORKOUTS', payload: response.data })
            // setData(response.data);
            setIsPending(false)

        }).catch((err) => {

            if (err.name === 'CanceledError') {
                console.log(err.message + "get")
            } else {
                setError(err.message);
                setIsPending(false)
            }

        });

        return () => abortCont.abort();
    }, [dispatch]);
    return { workouts, isPending, error }
}

export default useGet;