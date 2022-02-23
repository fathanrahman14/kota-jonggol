import React, { useState } from 'react'
import { Formik } from "formik"
import { useSelector } from "react-redux";
import { resetPassword } from "../../redux/actions/authAction";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useParams } from 'react-router'
import swal from 'sweetalert';

const ResetPassword = (props) => {
    // const [errorBE, setErrorBE] = React.useState({});
    // const initialState = {
    //     token: props.token,
    //     password: "",
    //     confirmPassword: "",
    // };

    // const isLoading = useSelector((state) => state.auth.isLoading);
    // const navigate = useNavigate();
    // const dispatch = useDispatch();


    // const onSubmit = async (values) => {
    //     const result = await dispatch(resetPassword(values));
    //     console.log("result", result);
    //     if (result.status === "Failed") {
    //         setErrorBE(result);
    //         alert(result?.msg)
    //     }
    //     if (result.status === "Success") {
    //         return navigate("/login");
    //     }
    // };

    const api = 'http://127.0.0.1:8000/api';

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

    const changePassword = (e) => {
        const value = e.target.value
        setPassword(value)
        if (!value) {
            setErrorPassword("Password tidak boleh kosong")
        } else {
            setErrorPassword("")
        }
    }

    const changeConfirmPassword = (e) => {
        const value = e.target.value
        setConfirmPassword(value)
        if (!value) {
            setErrorConfirmPassword("Konfirmasi Password tidak boleh kosong")
        } else if (password !== value) {
            setErrorConfirmPassword("Konfirmasi Password Tidak Cocok")
        } else {
            setErrorConfirmPassword("")
        }
    }
    const {token} = useParams()
    const simpan = () => {
        const data = {
            password: password,
            token: token
        }
        console.log(data)
        axios.put(api + `/password/reset/`, data)
            .then(res => {
                if(res.data.status === 200){
                    swal("Success", res.data.message, "success")
                }else if(res.data.status === 500){
                    swal("Error", res.data.message, "error")
                }
            })
    }
    return (
        <div className=''>
            <div className="content mt-5" style={{ mt: "100px" }}>
                <div className="brand">
                    <h2>Reset Your Password</h2>
                </div>
                {/* <Formik
                    initialValues={initialState}
                    enableReinitialize
                    onSubmit={onSubmit}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        setFieldValue,
                        isSubmitting,
                    }) => ( */}
                        <form onSubmit={simpan}>
                            <h2 className="login-title">Log in</h2>
                            <div className="form-group">
                                <div className="input-group-icon right">
                                    <div className="input-icon"><i className="fa fa-envelope" /></div>
                                    <input className="form-control" type="email" name="email" id="email" placeholder="Email"
                                        // error={errors.email && touched.email}
                                        // onChange={handleChange}
                                        // onBlur={handleBlur}
                                        value={password}
                                        onChange={changePassword}
                                        />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group-icon right">
                                    <div className="input-icon"><i className="fa fa-lock font-16" /></div>
                                    <input className="form-control" type="password" name="password" id="password" placeholder="Password"
                                        // error={errors.password && touched.password}
                                        // onChange={handleChange}
                                        // onBlur={handleBlur}
                                        value={confirmPassword}
                                        onChange={changeConfirmPassword}
                                        />              
                                </div>
                            </div>
                            <div className="form-group d-flex justify-content-between">
                                <a href="/forgotpassword">Forgot password?</a>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-info btn-block" type="submit">Login</button>
                            </div>
                        </form>
                    {/* )}
                </Formik> */}
            </div>
        </div>

        // <div className="">
        //     <div className="container mt-5">
        //         {/* Outer Row */}
        //         <div className="row justify-content-center">
        //             <div className="col-xl-10 col-lg-12 col-md-9">
        //                 <div className="card o-hidden border-0 shadow-lg my-5">
        //                     <div className="card-body p-0">
        //                         {/* Nested Row within Card Body */}
        //                         <div className="row">
        //                             <div className="col-lg-6 d-none d-lg-block bg-password-image" />
        //                             <div className="col-lg-6">
        //                                 <div className="p-5">
        //                                     <div className="text-center">
        //                                         <h1 className="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
        //                                         <p className="mb-4">We get it, stuff happens. Just enter your email address below
        //                                             and we'll send you a link to reset your password!</p>
        //                                     </div>
        //                                     {/* <Formik
        //                                         initialValues={initialState}
        //                                         enableReinitialize
        //                                         onSubmit={onSubmit}
        //                                     >
        //                                         {({
        //                                             values,
        //                                             errors,
        //                                             touched,
        //                                             handleChange,
        //                                             handleBlur,
        //                                             handleSubmit,
        //                                             setFieldValue,
        //                                             isSubmitting,
        //                                         }) => ( */}
        //                                     <form className="user" onSubmit={simpan}>
        //                                         <div className="form-group">
        //                                             <input type="password" className="form-control" id="password" placeholder="Enter New Password"
        //                                                 // error={errors.password && touched.password}
        //                                                 // onChange={handleChange}
        //                                                 // onBlur={handleBlur}
        //                                                 // value={values.password}
        //                                                 // disabled={isSubmitting} 
        //                                                 value={password}
        //                                                 onChange={changePassword}
        //                                             />
        //                                             {
        //                                                 errorPassword && (
        //                                                     <div className=''>
        //                                                         <h6 className='text-danger'>{errorPassword}</h6>
        //                                                     </div>
        //                                                 )
        //                                             }
        //                                         </div>
        //                                         <div className="form-group">
        //                                             <input type="password" className="form-control " id="password_confirmation" placeholder="Re-enter New Pasword"
        //                                                 // error={errors.confirmPassword && touched.confirmPassword}
        //                                                 // onChange={handleChange}
        //                                                 // onBlur={handleBlur}
        //                                                 // value={values.confirmPassword}
        //                                                 // disabled={isSubmitting} 
        //                                                 value={confirmPassword}
        //                                                 onChange={changeConfirmPassword}
        //                                             />
        //                                             {
        //                                                 errorConfirmPassword && (
        //                                                     <div className=''>
        //                                                         <h6 className='text-danger'>{errorConfirmPassword}</h6>
        //                                                     </div>
        //                                                 )
        //                                             }
        //                                         </div>
        //                                         <button
        //                                             type="submit"
        //                                             className="btn btn-primary btn-block">
        //                                            Reset Password
        //                                         </button>
        //                                     </form>
        //                                     {/* )}
        //                                     </Formik> */}
        //                                     <hr/>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        // <div style={{marginTop: "170px"}}>
        // <div className='container'>
        // <div className="row justify-content-center">
        //     <div className="col-md-6">
        //         <div className='card'>
        //             <div className='card-body'>
        //         <form>
        //             <div className="form-group">
        //                 <label >Email address</label>
        //                 <input type="password" className="form-control" placeholder="Masukkan Password Baru" 
        //                 value={password}
        //                 onChange={changePassword}/>
        //             </div>
        //             <div className="form-group">
        //                 <label>Password</label>
        //                 <input type="password" className="form-control" placeholder="Konfirmasi Password Baru" 
        //                 value={confirmPassword}
        //                 onChange={changeConfirmPassword}/>
        //             </div>
        //             <button type="submit" className="btn btn-primary" onClick={simpan}>{isLoading ? "Process ..." : "Reset Password"}</button>
        //         </form>
        //     </div>
        //     </div>
        //     </div>
        // </div>
        // </div>
        // </div>
    )
}

export default ResetPassword