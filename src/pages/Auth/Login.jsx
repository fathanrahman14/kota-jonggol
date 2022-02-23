import React from 'react'
import { Formik } from "formik"
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "../../redux/actions/authAction";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import ErrorMessage from "../../components/templates/ErrorMessage";
import { ButtonGroup } from 'reactstrap';

const RegisterSchema = Yup.object().shape({
    email: Yup.string().email().required("Wajib di isi"),
    password: Yup.string()
        .min(8, "Password minimal 8 Karakter")
        .required("wajib di isi"),
});

const Login = () => {

    const [errorBE, setErrorBE] = React.useState({});
    const initialState = {
        email: "",
        password: "",
    };

    const isLoading = useSelector((state) => state.auth.isLoading);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onSubmit = async (values) => {
        const result = await dispatch(authLogin(values));
        console.log("result", result);
        if (result.status === "error") {
            setErrorBE(result);
            alert(result?.msg)
        }
        if (result.status === "success") {
            return navigate("/dashboard");
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 text-center mb-5">
                    <img src="logo192.png" alt="" />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <div className="login-wrap p-0">
                        <h3 className="mb-4 text-center">Have an account?</h3>
                        <form action="#" className="signin-form">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Username" required />
                            </div>
                            <div className="form-group">
                                <input id="password-field" type="password" className="form-control" placeholder="Password" required />
                                <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password" />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="form-control btn btn-primary submit px-3">Sign In</button>
                            </div>
                            <div className="form-group ">
                                <div className="w-50">
                                    
                                </div>
                                <div className="text-center">
                                    <a href="#" style={{ color: '#fff' }}>Forgot Password</a>
                                </div>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login;