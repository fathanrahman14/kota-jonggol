import React, { PureComponent, useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../Footer'
import Nav from '../Nav'
import Sidebar from '../Sidebar'

// class Dashboard extends PureComponent {

//     constructor(props) {
//         super(props)

//         this.state = {
//             jumlahpenduduk: [],
//             artikel: [],
//             response: '',
//             display: 'none'

//         }
//     }
//     componentDidMount() {
//         axios.get(api + `/jumlah-penduduk`).then(res => {
//             this.setState({
//                 jumlahpenduduk: res.data
//             })
//         })
//         axios.get(api + `/totalArtikel`).then(res => {
//             this.setState({
//                 artikel: res.data
//             })
//             console.log(res)
//             setArtikel(res.data) 
//         })
//     }
//     render() {

export default function Dashboard(props) {
    const api = 'http://127.0.0.1:8000/api';

    const [jumlahPendudukInput, setJumlahPenduduk] = useState();
    const [totalArtikel, setTotalArtikel] = useState([]);
    const [totalKegiatanDone, setTotalKegiatanDone] = useState([]);
    const [totalKegiatanNot, setTotalKegiatanNot] = useState([]);
    const [loading, setLoading] = useState(false);

    const getJumlahPenduduk = async () => {
        try {
            setLoading(true)
            const res = await axios.get(api + `/jumlah-penduduk`)
            setLoading(false)
            setJumlahPenduduk(res.data)
        }
        catch (err) {
            setLoading(false)
        }
    }
    const getTotalArtikel = async () => {
        try {
            setLoading(true)
            const res = await axios.get(api + `/totalArtikel`)
            setLoading(false)
            setTotalArtikel(res.data)
        }
        catch (err) {
            setLoading(false)
        }
    }
    const getTotalKegiatanDone = async () => {
        try {
            setLoading(true)
            const res = await axios.get(api + `/totalKegiatanDone`)
            setLoading(false)

            setTotalKegiatanDone(res.data)
        }
        catch (err) {
            setLoading(false)
        }
    }
    const getTotalKegiatanNot = async () => {
        try {
            setLoading(true)
            const res = await axios.get(api + `/totalKegiatanNot`)
            setLoading(false)
            // console.log(res)
            setTotalKegiatanNot(res.data)
        }
        catch (err) {
            setLoading(false)
        }
    }
    useEffect(() => {
        getJumlahPenduduk();
        getTotalArtikel();
        getTotalKegiatanDone();
        getTotalKegiatanNot();
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
                    <h3>Profile Desa</h3>
                </div>
                <div className="page-content">
                    <section className="row">
                        <div className="col-12 col-lg-12">
                            <div className="row">
                                <div className="col-6 col-lg-3 col-md-6">
                                    <div className="card">
                                        <div className="card-body px-3 py-4-5">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="stats-icon purple">
                                                        <i className="iconly-boldShow" />
                                                    </div>
                                                </div>
                                                <div className="col-md-8">
                                                    <h6 className="text-muted font-semibold">Jumlah Penduduk</h6>
                                                    <h6 className="font-extrabold mb-0">{jumlahPendudukInput}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-3 col-md-6">
                                    <div className="card">
                                        <div className="card-body px-3 py-4-5">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="stats-icon blue">
                                                        <i className="iconly-boldProfile" />
                                                    </div>
                                                </div>
                                                <div className="col-md-8">
                                                    <h6 className="text-muted font-semibold">Jumlah Artikel</h6>
                                                    <h6 className="font-extrabold mb-0">{totalArtikel}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-3 col-md-6">
                                    <div className="card">
                                        <div className="card-body px-3 py-4-5">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="stats-icon green">
                                                        <i className="iconly-boldAdd-User" />
                                                    </div>
                                                </div>
                                                <div className="col-md-8">
                                                    <h6 className="text-muted font-semibold">Kegiatan Mendatang</h6>
                                                    <h6 className="font-extrabold mb-0">{totalKegiatanNot}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-3 col-md-6">
                                    <div className="card">
                                        <div className="card-body px-3 py-4-5">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="stats-icon red">
                                                        <i className="iconly-boldBookmark" />
                                                    </div>
                                                </div>
                                                <div className="col-md-8">
                                                    <h6 className="text-muted font-semibold">Kegiatan Selesai</h6>
                                                    <h6 className="font-extrabold mb-0">{totalKegiatanDone}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>Profile Visit</h4>
                                        </div>
                                        <div className="card-body">
                                            <div id="chart-profile-visit" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h4>Peta</h4>
                                            </div>
                                            <div class="card-body">
                                                <div class="googlemaps">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Footer />
                </div>
            </div>
        </div>
    )
}



