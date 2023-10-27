import { ref, object, string} from "yup";
import { Formik, Form, Field, ErrorMessage} from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input/Input";

const RegisterValidation = object().shape({
    username: string().required("Required"),
    email: string().required("Reuired").email("Required"),
    password: string().min(8, "Password should contains 8 symbols").required("Required"),
    confirmPassword: string().oneOf([ref("password")], "Passwords do not same").required("Please confirm uour password"),
});

function SignUp() {
    const navigate = useNavigate();
    const handleSubmit = async(values) => {
        delete values.confirmPassword;
        console.log(values);

        try {
            const url = "http://localhost:8080/api/signup";

            const res = await axios.post(url, values);
            navigate("/movies");
            console.log(res.message);
        } catch (error) {
            console.log(error.response.data.message);
        }
    }

    return (
        <div className="h-screen flex items-center justify-center flex-сol bg-kino bg-center bg-no-repeat bg-cover">
            <Formik
            initialValues={{
                username: "",
                email: "",
                password:"",
                confirmPassword: "",
            }
        
            }
            onSubmit = {handleSubmit}
            validationSchema = {RegisterValidation}
            >
                {
                    () => (
                       
                         <Form className = "bg-[#1d1d1d] w-[25%] shadow-md rounded-md px-8 pt-6 pb-8 ">
                            <div className = "flex justify-center items-center text-white font-bold text-2xl mb-[4%]">
                                <h1>Sign Up</h1>
                            </div>

                            <Input name="username" label = "Username"/>
                            <Input name="email" label = "Email"/>
                            <Input name="password" label = "Password" type = "password" />
                            <Input name="confirmPassword" label = "Confirm Password" type="password" />
                            <div className= "flex items-center justify-center ">
                                <button className="bg-white text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadou-outline"
                                type = "submit">
                                    Register
                                </button>
                            </div>
                        </Form>
    )
                }
            </Formik>
        </div>
    );
}

export default SignUp;