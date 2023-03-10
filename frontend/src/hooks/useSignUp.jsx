import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import Axios from 'axios';


export const useSignUp = () => {
    const { user, dispatch } = useAuthContext()

    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    const signUp = async (email, password) => {
        setIsPending(true);
        setError(null);

        Axios.post('/api/user/signup', { email, password })
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

    return { signUp, isPending, error }
}