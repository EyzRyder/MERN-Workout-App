import { useState } from "react";
import Loader from "../../components/Loader";
import { useSignUp } from "../../hooks/useSignUp";


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {signUp, isPending, error} =useSignUp()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signUp(email, password)
    }


    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h3 className="text-2xl font-semibold">Sign up</h3>

            <label className="block">Email: </label>
            <input className={"input"} type="email" onChange={(e) => setEmail(e.target.value)} value={email} />

            <label className="block">Password: </label>
            <input className={"input"} type="password" onChange={(e) => setPassword(e.target.value)} value={password} />


            {!isPending && <button className="bg-primary border-0 p-3 text-[#fff] font-body rounded cursor-pointer transition-transform  hover:scale-110 hover:bg-[#4edeb5]">Sign Up</button>}
            {isPending && <div className="absolute w-[300px] bg-primary rounded-xl"> <Loader /></div>}
            {error && <div className="text-error p-3 bg-[#ffefef] border border-solid border-[#ddd] rounded my-5 mx-0">{error}</div>}
        </form>
    );
}

export default SignUp;