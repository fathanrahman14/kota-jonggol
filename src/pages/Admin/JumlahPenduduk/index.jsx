import React, { PureComponent, useState, useEffect } from 'react'
import Footer from '../Footer'
import Nav from '../Nav'
import Sidebar from '../Sidebar'
import axios from 'axios'
import qs from 'querystring'
import { NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';


// class JumlahPenduduk extends PureComponent {
//     constructor(props) {
//         super(props)

//         this.state = {
//             jumlahpenduduk: [],
//             response: '',
//             display: 'none'

//         }
//     }

//     componentDidMount() {
//         axios.get(api + `/jumlah-penduduk`).then(res => {
//             this.setState({
//                 jumlahpenduduk: res
//             })
//         })
//         console.log(res)
//     }

//     render() {

export default function JumlahPenduduk(props) {
    const api = 'http://127.0.0.1:8000/api';

    const [loading, setLoading] = useState(false);
    const [jumlahPendudukInput, setJumlahPenduduk] = useState();
    const getJumlahPenduduk = async () => {
        try {
            setLoading(true)
            const res = await axios.get(api + `/jumlah-penduduk`)
            setLoading(false)
            console.log(res.data)
            setJumlahPenduduk(res.data)
        }
        catch (err) {
            setLoading(false)
        }
    }
    useEffect(() => {
        getJumlahPenduduk();
    }, [props])


    return (
        <div id="app">
            <Sidebar />
            <div id="main">
                <header className="mb-3">
                    <a href="#" className="burger-btn d-block d-xl-none">
                        <i className="bi bi-justify fs-3" />
                    </a>
                </header>
                <div className="page-heading">
                    <div className="page-title">
                        <div className="row">
                            <div className="col-12 col-md-6 order-md-1 order-last">
                                <h3>DataTable</h3>
                                <p className="text-subtitle text-muted">For user to check they list</p>
                            </div>
                            <div className="col-12 col-md-6 order-md-2 order-first">
                                <nav aria-label="breadcrumb" className="breadcrumb-header float-start float-lg-end">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">JumlahPenduduk</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="section">
                    <div className="card">

                        <div className="card-header d-sm-flex align-items-center justify-content-between">
                            <h3>Jumlah Penduduk</h3>
                        </div>
                        <div className="card-body">
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        {/* <th>No</th> */}
                                        <th>Jumlah Penduduk</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='text-center'><h2>{jumlahPendudukInput}</h2></td>
                                        <td>
                                            <Link to={`/editjumlahpenduduk/2`}>
                                                {/* <Route path='/editartikel/:id' element={<EditArtikel />} id={artikel.id} /> */}
                                                <button className="btn btn-success ml-3">Edit</button>
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}


