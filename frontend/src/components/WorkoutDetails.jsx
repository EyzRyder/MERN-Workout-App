import { useWorkoutContext } from "../hooks/useWorkoutsContext";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import Axios from 'axios';

const WorkoutDetails = ({ workout }) => {
    const { dispatch } = useWorkoutContext()

    const handleClickToDelete = async () => {
        const response = await Axios.delete(`http://localhost:3000/api/workouts/${workout._id}`)
            .then((response) => {
                dispatch({ type: 'DELETE_WORKOUT', payload: response.data })
            });
    }
    return (
        <div className="bg-[#fff] rounded m-5 p-5 relative shadow-lg" key={workout._id}>
            <h4 className="mb-3 text-xl text-primary"><strong>{workout.title}</strong></h4>
            <p className="m-0 text-sm text-[#555]"><strong>Reps: </strong>{workout.reps}</p>
            <p className="m-0 text-sm text-[#555]">{formatDistanceToNow(new Date(workout.createdAt), {addSuffix:true}) }</p>
            <span className="absolute top-5 right-5 cursor-pointer bg-[#f1f1f1] p-2 rounded-[50%] text-[#333]" onClick={handleClickToDelete}>delete</span>
        </div>
    );
}

export default WorkoutDetails;