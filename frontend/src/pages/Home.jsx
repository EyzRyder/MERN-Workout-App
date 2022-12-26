import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import useGet from "../hooks/useGet";

function Home() {

    const { workouts, isPending, error } = useGet('http://localhost:3000/api/workouts')


    return (
        <div className="home" >
            <div className="">
            {error && <div>{error}</div>}
            {isPending && <div>Loading ...</div>}

            {workouts && workouts.map((workout) => (
                <WorkoutDetails
                    key={workout._id}
                    workout={workout}
                />))}
            </div>
            <WorkoutForm />
        </div>
    );
}

export default Home;