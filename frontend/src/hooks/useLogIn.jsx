import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import Axios from 'axios';


export const useLogIn = () => {
    const { user, dispatch } = useAuthContext()

    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    const logIn = async (email, password) => {
        setIsPending(true);
        setError(null);

        Axios.post('http://localhost:3000/api/user/login', { email, password })
            .then((response) => {
                localStorage.setItem('user', JSON.stringify(response.data))
                setIsPending(false);
                setError(null);
                dispatch({ type: 'LOGIN', payload: response.data })
            }).catch((err) => {
                setError(err.response.data.error);
                setIsPending(false)
            });
    }

    return { logIn, isPending, error }
}