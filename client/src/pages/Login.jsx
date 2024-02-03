
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const URL="http://localhost:5000/api/auth/login";


export const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

const navigate=useNavigate();
const {storeTokenInLS}=useAuth();

// Handle input change for user's email and password

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await fetch(URL,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(user),
            });
            console.log("login form",response);
            if (response.ok){
                alert("Login Successful");
                const res_data =await response.json();
                storeTokenInLS(res_data.token);
        localStorage.setItem("token", res_data.token);
                setUser({ email:"", password:""});
                navigate("/");
            
            }else{
                alert("Invalid Credentials");
                console.log("invalid credential");
            }


        } catch (error) {
            console.log(error);
        }
    };

    return <>
        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-image reg-img">
                            <img
                                src="/images/login.png"
                                alt="let's fill the login form"
                                width="500"
                                height="500"
                            />
                        </div>
                        {/* our main registration code  */}
                        <div className="registration-form">
                            <h1 className="main-heading mb-3">Login form</h1>
                            <br />
                            <form onSubmit={handleSubmit}>


                                <div>
                                    <label htmlFor="email">email</label>
                                    <input
                                        type="text"
                                        name="email"
                                        value={user.email}
                                        onChange={handleInput}
                                        placeholder="email"
                                    />
                                </div>


                                <div>
                                    <label htmlFor="password">password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={user.password}
                                        onChange={handleInput}
                                        placeholder="password"
                                    />
                                </div>
                                <br />
                                <button type="submit" className="btn btn-submit">
                                    Register Now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    </>
}