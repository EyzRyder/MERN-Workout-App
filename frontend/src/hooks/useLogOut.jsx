import { useAuthContext } from "./useAuthContext"
import { useWorkoutContext } from "./useWorkoutsContext"



export const useLogOut = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: dispatchWorkouts } = useWorkoutContext()

    const logout = () => { 
        localStorage.removeItem('user')
        dispatch({ type: 'LOGOUT' })
        dispatchWorkouts({ type: 'SET_WORKOUTS', payload: null })
    }

    return {logout}
}