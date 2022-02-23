import React, { useState } from 'react'
import axios from 'axios'
import { useSelector } from "react-redux";

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const changeEmail = (e) => {
        setEmail(e.target.value)
        setError("")
    }

    const isLoading = useSelector((state) => state.auth.isLoading);
    const kirim = () => {
        if (!email) {
            setError("email wajib di isi")
        } else {
            axios.put('http://127.0.0.1:8000/api/password/forgot-password', { email: email })
                .then(res => {
                    setEmail("")
                })
        }
    }
    console.log(kirim);

    return (
        <div className="content">
            <div className="brand">
                <a className="link" href="index.html">Forgot Password</a>
            </div>
            <form id="forgot-form" onSubmit={kirim}>
                <h3 className="m-t-10 m-b-10">Forgot password</h3>
                <p className="m-b-20">Enter your email address below and we'll send you password reset instructions.</p>
                <div className="form-group">
                    <input type="email" placeholder='Masukkan Email'
                        className='form-control'
                        id='email'
                        name='email'
                        value={email}
                        onChange={changeEmail} />
                </div>
                <div className="form-group">
                    <button className="btn btn-info btn-block" type="submit">Submit</button>
                </div>
                <div className="text-center">
                    <a className="small" href="/login">Already have an account? Login!</a>
                </div>
            </form>
        </div>


        // <div>
        //     <div className="container mt-5">
        //         {/* Outer Row */}
        //         <div className="forgot-card row justify-content-center">
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
        //                                     <form onSubmit={kirim}>
        //                                         <div className='form-group'>
        //                                             <input type="email" placeholder='Masukkan Email' 
        //                                             className='form-control'
        //                                             id='email'
        //                                             name='email'
        //                                             value={email}
        //                                             onChange={changeEmail} />
        //                                         </div>
        //                                         <button className="btn btn-primary btn-user btn-block mt-3">
        //                                         {isLoading ? "Process ..." : "Kirim"}
        //                                         </button>
        //                                     </form>
        //                                     <hr />
        //                                     <div className="text-center">
        //                                         <a className="small" href="/login">Already have an account? Login!</a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default ForgotPassword;