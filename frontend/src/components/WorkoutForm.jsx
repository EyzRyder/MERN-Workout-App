import { useState } from "react";
import Axios from 'axios';
import { useWorkoutContext } from "../hooks/useWorkoutsContext";


const WorkoutForm = () => {
    const { dispatch } = useWorkoutContext()

    const [title, setTitle] = useState("")
    const [reps, setReps] = useState("")
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);


    const handleSubmit = async (e) => { 
        e.preventDefault();
        setIsPending(true);

        Axios.post('http://localhost:3000/api/workouts', { title: title, reps: reps })
            .then((response) => {
                setIsPending(false);
                setError(null);
                setTitle("");
                setReps("");
                dispatch({ type: 'CREATE_WORKOUTS', payload: response.data })
            }).catch((err) => {
                setError(err.response.data.error);
                setEmptyFields(err.response.data.emptyFields)
                setIsPending(false)
                console.log(err);
            });
        
        
    }

    return (
        <form className="" onSubmit={handleSubmit}>
            <h3>Add a new Workout</h3>
            <label className="block">Exercise Title:</label>
            <input className={emptyFields.includes('title') ? "error input" : "input"} type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
            <label className="block">Exercise reps:</label>
            <input className={emptyFields.includes('reps') ? "error input" : "input"} type="number" onChange={(e) => setReps(e.target.value)} value={reps}  />
            {!isPending && <button className="bg-primary border-0 p-3 text-[#fff] font-body rounded cursor-pointer">add Workout</button>}
            {isPending && <button className="bg-primary border-0 p-3 text-[#fff] font-body rounded cursor-pointer" disabled>adding Workout</button>}
            {error && <div className="text-error p-3 bg-[#ffefef] border border-solid border-[#ddd] rounded my-5 mx-0">{error}</div>}
        </form>
    );
}

export default WorkoutForm;