import React, { PureComponent, useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../Footer'
import Nav from '../Nav'
import Sidebar from '../Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
        <div className='page-wrapper'>
            <Nav />
            <Sidebar />
            <div className="content-wrapper">
                {/* START PAGE CONTENT*/}
                <div className="page-content fade-in-up">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="ibox bg-success color-white widget-stat">
                                <div className="ibox-body">
                                    <h2 className="m-b-5 font-strong text-white">{jumlahPendudukInput}</h2>
                                    <div className="m-b-5">Jumlah Penduduk</div><i className="fa fa-users widget-stat-icon" />
                                    <div><i className="fa fa-level-up m-r-5" /><small>25% higher</small></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="ibox bg-info color-white widget-stat">
                                <div className="ibox-body">
                                    <h2 className="m-b-5 font-strong text-white">{totalArtikel}</h2>
                                    <div className="m-b-5">Jumlah Artikel</div><i className="fa fa-book widget-stat-icon" />
                                    <div><i className="fa fa-level-up m-r-5" /><small>17% higher</small></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="ibox bg-warning color-white widget-stat">
                                <div className="ibox-body">
                                    <h2 className="m-b-5 font-strong text-white">{totalKegiatanNot}</h2>
                                    <div className="m-b-5">Kegiatan Mendatang</div><i className="fa fa-calendar-minus-o widget-stat-icon" />
                                    <div><i className="fa fa-level-up m-r-5" /><small>22% higher</small></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="ibox bg-danger color-white widget-stat">
                                <div className="ibox-body">
                                    <h2 className="m-b-5 font-strong text-white">{totalKegiatanDone}</h2>
                                    <div className="m-b-5">Kegiatan Selesai</div><i className="fa fa-calendar-check-o widget-stat-icon" />
                                    <div><i className="fa fa-level-down m-r-5" /><small>-12% Lower</small></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="ibox">
                                <div className="ibox-body">
                                    <div className="flexbox mb-4">
                                        <div>
                                            <h3 className="m-0">Statistics</h3>
                                            <div>Your shop sales analytics</div>
                                        </div>
                                        <div className="d-inline-flex">
                                            <div className="px-3" style={{ borderRight: '1px solid rgba(0,0,0,.1)' }}>
                                                <div className="text-muted">WEEKLY INCOME</div>
                                                <div>
                                                    <span className="h2 m-0">$850</span>
                                                    <span className="text-success ml-2"><i className="fa fa-level-up" /> +25%</span>
                                                </div>
                                            </div>
                                            <div className="px-3">
                                                <div className="text-muted">WEEKLY SALES</div>
                                                <div>
                                                    <span className="h2 m-0">240</span>
                                                    <span className="text-warning ml-2"><i className="fa fa-level-down" /> -12%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <canvas id="bar_chart" style={{ height: 260 }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="ibox">
                                <div className="ibox-head">
                                    <div className="ibox-title">Statistics</div>
                                </div>
                                <div className="ibox-body">
                                    <div className="row align-items-center">
                                        <div className="col-md-6">
                                            <canvas id="doughnut_chart" style={{ height: 160 }} />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="m-b-20 text-success"><i className="fa fa-circle-o m-r-10" />Desktop 52%</div>
                                            <div className="m-b-20 text-info"><i className="fa fa-circle-o m-r-10" />Tablet 27%</div>
                                            <div className="m-b-20 text-warning"><i className="fa fa-circle-o m-r-10" />Mobile 21%</div>
                                        </div>
                                    </div>
                                    <ul className="list-group list-group-divider list-group-full">
                                        <li className="list-group-item">Chrome
                                            <span className="float-right text-success"><i className="fa fa-caret-up" /> 24%</span>
                                        </li>
                                        <li className="list-group-item">Firefox
                                            <span className="float-right text-success"><i className="fa fa-caret-up" /> 12%</span>
                                        </li>
                                        <li className="list-group-item">Opera
                                            <span className="float-right text-danger"><i className="fa fa-caret-down" /> 4%</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="ibox">
                                <div className="ibox-head">
                                    <div className="ibox-title">Visitors Statistics</div>
                                </div>
                                <div className="ibox-body">
                                    <div id="world-map" style={{ height: 300 }} />
                                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63429.309783856195!2d107.00892233512408!3d-6.479586249988036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69bc0d7468736b%3A0x401576d14fed560!2sJonggol%2C%20Kec.%20Jonggol%2C%20Kabupaten%20Bogor%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1645670452110!5m2!1sid!2sid" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" /> */}

                                    <table className="table table-striped m-t-20 visitors-table">
                                        <thead>
                                            <tr>
                                                <th>Country</th>
                                                <th>Visits</th>
                                                <th>Data</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <img className="m-r-10" src="./assets/img/flags/us.png" />USA</td>
                                                <td>755</td>
                                                <td>
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-success" role="progressbar" style={{ width: '52%', height: 5 }} aria-valuenow={52} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                    <span className="progress-parcent">52%</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img className="m-r-10" src="./assets/img/flags/Canada.png" />Canada</td>
                                                <td>700</td>
                                                <td>
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-warning" role="progressbar" style={{ width: '48%', height: 5 }} aria-valuenow={48} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                    <span className="progress-parcent">48%</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img className="m-r-10" src="./assets/img/flags/India.png" />India</td>
                                                <td>410</td>
                                                <td>
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-danger" role="progressbar" style={{ width: '37%', height: 5 }} aria-valuenow={37} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                    <span className="progress-parcent">37%</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img className="m-r-10" src="./assets/img/flags/Australia.png" />Australia</td>
                                                <td>304</td>
                                                <td>
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-info" role="progressbar" style={{ width: '36%', height: 5 }} aria-valuenow={36} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                    <span className="progress-parcent">36%</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img className="m-r-10" src="./assets/img/flags/Singapore.png" />Singapore</td>
                                                <td>203</td>
                                                <td>
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar" role="progressbar" style={{ width: '35%', height: 5 }} aria-valuenow={35} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                    <span className="progress-parcent">35%</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img className="m-r-10" src="./assets/img/flags/uk.png" />UK</td>
                                                <td>202</td>
                                                <td>
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-info" role="progressbar" style={{ width: '35%', height: 5 }} aria-valuenow={35} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                    <span className="progress-parcent">35%</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img className="m-r-10" src="./assets/img/flags/UAE.png" />UAE</td>
                                                <td>180</td>
                                                <td>
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-warning" role="progressbar" style={{ width: '30%', height: 5 }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                    <span className="progress-parcent">30%</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="ibox">
                                <div className="ibox-head">
                                    <div className="ibox-title">Tasks</div>
                                    <div>
                                        <a className="btn btn-info btn-sm" href="javascript:;">New Task</a>
                                    </div>
                                </div>
                                <div className="ibox-body">
                                    <ul className="list-group list-group-divider list-group-full tasks-list">
                                        <li className="list-group-item task-item">
                                            <div>
                                                <label className="ui-checkbox ui-checkbox-gray ui-checkbox-success">
                                                    <input type="checkbox" />
                                                    <span className="input-span" />
                                                    <span className="task-title">Meeting with Eliza</span>
                                                </label>
                                            </div>
                                            <div className="task-data"><small className="text-muted">10 July 2018</small></div>
                                            <div className="task-actions">
                                                <a href="javascript:;"><i className="fa fa-edit text-muted m-r-10" /></a>
                                                <a href="javascript:;"><i className="fa fa-trash text-muted" /></a>
                                            </div>
                                        </li>
                                        <li className="list-group-item task-item">
                                            <div>
                                                <label className="ui-checkbox ui-checkbox-gray ui-checkbox-success">
                                                    <input type="checkbox" defaultChecked />
                                                    <span className="input-span" />
                                                    <span className="task-title">Check your inbox</span>
                                                </label>
                                            </div>
                                            <div className="task-data"><small className="text-muted">22 May 2018</small></div>
                                            <div className="task-actions">
                                                <a href="javascript:;"><i className="fa fa-edit text-muted m-r-10" /></a>
                                                <a href="javascript:;"><i className="fa fa-trash text-muted" /></a>
                                            </div>
                                        </li>
                                        <li className="list-group-item task-item">
                                            <div>
                                                <label className="ui-checkbox ui-checkbox-gray ui-checkbox-success">
                                                    <input type="checkbox" />
                                                    <span className="input-span" />
                                                    <span className="task-title">Create Financial Report</span>
                                                </label>
                                                <span className="badge badge-danger m-l-5"><i className="ti-alarm-clock" /> 1 hrs</span>
                                            </div>
                                            <div className="task-data"><small className="text-muted">No due date</small></div>
                                            <div className="task-actions">
                                                <a href="javascript:;"><i className="fa fa-edit text-muted m-r-10" /></a>
                                                <a href="javascript:;"><i className="fa fa-trash text-muted" /></a>
                                            </div>
                                        </li>
                                        <li className="list-group-item task-item">
                                            <div>
                                                <label className="ui-checkbox ui-checkbox-gray ui-checkbox-success">
                                                    <input type="checkbox" defaultChecked />
                                                    <span className="input-span" />
                                                    <span className="task-title">Send message to Mick</span>
                                                </label>
                                            </div>
                                            <div className="task-data"><small className="text-muted">04 Apr 2018</small></div>
                                            <div className="task-actions">
                                                <a href="javascript:;"><i className="fa fa-edit text-muted m-r-10" /></a>
                                                <a href="javascript:;"><i className="fa fa-trash text-muted" /></a>
                                            </div>
                                        </li>
                                        <li className="list-group-item task-item">
                                            <div>
                                                <label className="ui-checkbox ui-checkbox-gray ui-checkbox-success">
                                                    <input type="checkbox" />
                                                    <span className="input-span" />
                                                    <span className="task-title">Create new page</span>
                                                </label>
                                                <span className="badge badge-success m-l-5">2 Days</span>
                                            </div>
                                            <div className="task-data"><small className="text-muted">07 Dec 2018</small></div>
                                            <div className="task-actions">
                                                <a href="javascript:;"><i className="fa fa-edit text-muted m-r-10" /></a>
                                                <a href="javascript:;"><i className="fa fa-trash text-muted" /></a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="ibox">
                                <div className="ibox-head">
                                    <div className="ibox-title">Messages</div>
                                </div>
                                <div className="ibox-body">
                                    <ul className="media-list media-list-divider m-0">
                                        <li className="media">
                                            <a className="media-img" href="javascript:;">
                                                <img className="img-circle" src="./assets/img/users/u1.jpg" width={40} />
                                            </a>
                                            <div className="media-body">
                                                <div className="media-heading">Jeanne Gonzalez <small className="float-right text-muted">12:05</small></div>
                                                <div className="font-13">Lorem Ipsum is simply dummy text of the printing and typesetting.</div>
                                            </div>
                                        </li>
                                        <li className="media">
                                            <a className="media-img" href="javascript:;">
                                                <img className="img-circle" src="./assets/img/users/u2.jpg" width={40} />
                                            </a>
                                            <div className="media-body">
                                                <div className="media-heading">Becky Brooks <small className="float-right text-muted">1 hrs ago</small></div>
                                                <div className="font-13">Lorem Ipsum is simply dummy text of the printing and typesetting.</div>
                                            </div>
                                        </li>
                                        <li className="media">
                                            <a className="media-img" href="javascript:;">
                                                <img className="img-circle" src="./assets/img/users/u3.jpg" width={40} />
                                            </a>
                                            <div className="media-body">
                                                <div className="media-heading">Frank Cruz <small className="float-right text-muted">3 hrs ago</small></div>
                                                <div className="font-13">Lorem Ipsum is simply dummy text of the printing and typesetting.</div>
                                            </div>
                                        </li>
                                        <li className="media">
                                            <a className="media-img" href="javascript:;">
                                                <img className="img-circle" src="./assets/img/users/u6.jpg" width={40} />
                                            </a>
                                            <div className="media-body">
                                                <div className="media-heading">Connor Perez <small className="float-right text-muted">Today</small></div>
                                                <div className="font-13">Lorem Ipsum is simply dummy text of the printing and typesetting.</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="ibox">
                                <div className="ibox-head">
                                    <div className="ibox-title">Latest Orders</div>
                                    <div className="ibox-tools">
                                        <a className="ibox-collapse"><i className="fa fa-minus" /></a>
                                        <a className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-ellipsis-v" /></a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item">option 1</a>
                                            <a className="dropdown-item">option 2</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="ibox-body">
                                    <table className="table table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th>Order ID</th>
                                                <th>Customer</th>
                                                <th>Amount</th>
                                                <th>Status</th>
                                                <th width="91px">Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <a href="invoice.html">AT2584</a>
                                                </td>
                                                <td>@Jack</td>
                                                <td>$564.00</td>
                                                <td>
                                                    <span className="badge badge-success">Shipped</span>
                                                </td>
                                                <td>10/07/2017</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="invoice.html">AT2575</a>
                                                </td>
                                                <td>@Amalia</td>
                                                <td>$220.60</td>
                                                <td>
                                                    <span className="badge badge-success">Shipped</span>
                                                </td>
                                                <td>10/07/2017</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="invoice.html">AT1204</a>
                                                </td>
                                                <td>@Emma</td>
                                                <td>$760.00</td>
                                                <td>
                                                    <span className="badge badge-default">Pending</span>
                                                </td>
                                                <td>10/07/2017</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="invoice.html">AT7578</a>
                                                </td>
                                                <td>@James</td>
                                                <td>$87.60</td>
                                                <td>
                                                    <span className="badge badge-warning">Expired</span>
                                                </td>
                                                <td>10/07/2017</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="invoice.html">AT0158</a>
                                                </td>
                                                <td>@Ava</td>
                                                <td>$430.50</td>
                                                <td>
                                                    <span className="badge badge-default">Pending</span>
                                                </td>
                                                <td>10/07/2017</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="invoice.html">AT0127</a>
                                                </td>
                                                <td>@Noah</td>
                                                <td>$64.00</td>
                                                <td>
                                                    <span className="badge badge-success">Shipped</span>
                                                </td>
                                                <td>10/07/2017</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="ibox">
                                <div className="ibox-head">
                                    <div className="ibox-title">Best Sellers</div>
                                </div>
                                <div className="ibox-body">
                                    <ul className="media-list media-list-divider m-0">
                                        <li className="media">
                                            <a className="media-img" href="javascript:;">
                                                <img src="./assets/img/image.jpg" width="50px;" />
                                            </a>
                                            <div className="media-body">
                                                <div className="media-heading">
                                                    <a href="javascript:;">Samsung</a>
                                                    <span className="font-16 float-right">1200</span>
                                                </div>
                                                <div className="font-13">Lorem Ipsum is simply dummy text.</div>
                                            </div>
                                        </li>
                                        <li className="media">
                                            <a className="media-img" href="javascript:;">
                                                <img src="./assets/img/image.jpg" width="50px;" />
                                            </a>
                                            <div className="media-body">
                                                <div className="media-heading">
                                                    <a href="javascript:;">iPhone</a>
                                                    <span className="font-16 float-right">1150</span>
                                                </div>
                                                <div className="font-13">Lorem Ipsum is simply dummy text.</div>
                                            </div>
                                        </li>
                                        <li className="media">
                                            <a className="media-img" href="javascript:;">
                                                <img src="./assets/img/image.jpg" width="50px;" />
                                            </a>
                                            <div className="media-body">
                                                <div className="media-heading">
                                                    <a href="javascript:;">iMac</a>
                                                    <span className="font-16 float-right">800</span>
                                                </div>
                                                <div className="font-13">Lorem Ipsum is simply dummy text.</div>
                                            </div>
                                        </li>
                                        <li className="media">
                                            <a className="media-img" href="javascript:;">
                                                <img src="./assets/img/image.jpg" width="50px;" />
                                            </a>
                                            <div className="media-body">
                                                <div className="media-heading">
                                                    <a href="javascript:;">apple Watch</a>
                                                    <span className="font-16 float-right">705</span>
                                                </div>
                                                <div className="font-13">Lorem Ipsum is simply dummy text.</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="ibox-footer text-center">
                                    <a href="javascript:;">View All Products</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <style dangerouslySetInnerHTML={{ __html: "\n                    .visitors-table tbody tr td:last-child {\n                        display: flex;\n                        align-items: center;\n                    }\n\n                    .visitors-table .progress {\n                        flex: 1;\n                    }\n\n                    .visitors-table .progress-parcent {\n                        text-align: right;\n                        margin-left: 10px;\n                    }\n                " }} />
                    <div>
                        <a className="adminca-banner" href="http://admincast.com/adminca/" target="_blank">
                            <div className="adminca-banner-ribbon"><i className="fa fa-trophy mr-2" />PREMIUM TEMPLATE</div>
                            <div className="wrap-1">
                                <div className="wrap-2">
                                    <div>
                                        <img src="./assets/img/adminca-banner/adminca-preview.jpg" style={{ height: 160, marginTop: 50 }} />
                                    </div>
                                    <div className="color-white" style={{ marginLeft: 40 }}>
                                        <h1 className="font-bold">ADMINCA</h1>
                                        <p className="font-16">Save your time, choose the best</p>
                                        <ul className="list-unstyled">
                                            <li className="m-b-5"><i className="ti-check m-r-5" />High Quality Design</li>
                                            <li className="m-b-5"><i className="ti-check m-r-5" />Fully Customizable and Easy Code</li>
                                            <li className="m-b-5"><i className="ti-check m-r-5" />Bootstrap 4 and Angular 5+</li>
                                            <li className="m-b-5"><i className="ti-check m-r-5" />Best Build Tools: Gulp, SaSS, Pug...</li>
                                            <li><i className="ti-check m-r-5" />More layouts, pages, components</li>
                                        </ul>
                                    </div>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div className="d-flex justify-content-end wrap-3">
                                        <div className="adminca-banner-b m-r-20">
                                            <img src="./assets/img/adminca-banner/bootstrap.png" style={{ width: 40, marginRight: 10 }} />Bootstrap v4</div>
                                        <div className="adminca-banner-b m-r-10">
                                            <img src="./assets/img/adminca-banner/angular.png" style={{ width: 35, marginRight: 10 }} />Angular v5+</div>
                                    </div>
                                    <div className="dev-img">
                                        <img src="./assets/img/adminca-banner/sprite.png" />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <footer className="page-footer">
                    <div className="font-13">2018 ?? <b>AdminCAST</b> - All rights reserved.</div>
                    <a className="px-4" href="http://themeforest.net/item/adminca-responsive-bootstrap-4-3-angular-4-admin-dashboard-template/20912589" target="_blank">BUY PREMIUM</a>
                    <div className="to-top"><i className="fa fa-angle-double-up" /></div>
                </footer>
            </div>
        </div>
            
            
    )
}



