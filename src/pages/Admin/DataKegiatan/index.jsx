import React, { PureComponent } from 'react'
import Footer from '../Footer'
import Nav from '../Nav'
import Sidebar from '../Sidebar'
import axios from 'axios'
import qs from 'querystring'
import { NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';


const api = 'http://127.0.0.1:8000/api'

const deleteKegiatan = (e, kegiatan_id) => {
    e.preventDefault();

    const thisClicked = e.currentTarget;
    thisClicked.innerText = "Deleting"

    axios.delete(api + `/kegiatan/delete/${kegiatan_id}`).then(res => {
        if (res.data.status === 200) {
            swal("Success", res.data.message, "success");
            thisClicked.closest("tr").remove()
        } else if (res.data.status === 500) {
            swal("Success", res.data.message, "Success");
            thisClicked.innerText = "Deleting"
        }
    });
}



class DataKegiatan extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            kegiatan: [],
            response: '',
            display: 'none'

        }
    }

    componentDidMount() {
        axios.get(api + `/kegiatan`).then(res => {
            this.setState({
                kegiatan: res.data
            })
        })
    }

    render() {
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
                                            <li className="breadcrumb-item active" aria-current="page">DataKegiatan</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="section">
                        <div className="card">
                        <div className="card-header d-sm-flex align-items-center justify-content-between">
                            <h3>Kegiatan</h3>
                            <NavLink href="/tambahkegiatan"><button className='btn btn-primary mr-4'>Tambah Data</button></NavLink>
                            </div>
                            <div className="card-body">
                                <table className="table table-striped" id="table1">
                                    <thead>
                                        <tr>
                                            {/* <th>No</th> */}
                                            <th>Tanggal</th>
                                            <th>Kegiatan</th>
                                            <th>Foto</th>
                                            <th>Keterangan</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.kegiatan.map(kegiatan =>
                                            <tr key={kegiatan.id}>
                                                <td>{kegiatan.tanggal}</td>
                                                <td>{kegiatan.kegiatan}</td>
                                                <td className='text-center'>
                                                    <img style={{ width: 150, height: 100 }}
                                                        src={"http://localhost:8000/" + kegiatan.image} />
                                                </td>
                                                <td className='text-center font-weight-bold'>{kegiatan.status == 0 ? "Belum Dilaksanakan" : "Sudah Dilaksakan"}</td>
                                                <td className='text-center'>
                                                    <Link to={`/editkegiatan/${kegiatan.id}`}>
                                                        {/* <Route path='/editartikel/:id' element={<EditArtikel />} id={artikel.id} /> */}
                                                        <button className="btn btn-success ml-3">Edit</button>
                                                    </Link>
                                                    <button className="btn btn-danger ml-3" onClick={(e) => deleteKegiatan(e, kegiatan.id)}>Delete</button>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        )
    }
}

export default DataKegiatan;
