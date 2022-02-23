import React from 'react'

const Sidebar = () => {
    return (
        <div id="sidebar" className="active">
            <div className="sidebar-wrapper active">
                <div className="sidebar-header">
                    <div className="d-flex justify-content-between">
                        <div className="logo">
                            <a href="/dashboard"><img src="assets/images/logo/logo.png" alt="Logo" srcSet /></a>
                        </div>
                        <div className="toggler">
                            <a href="#" className="sidebar-hide d-xl-none d-block"><i className="bi bi-x bi-middle" /></a>
                        </div>
                    </div>
                </div>
                <div className="sidebar-menu">
                    <ul className="menu">
                        <li className="sidebar-title">Menu</li>
                        <li className="sidebar-item">
                            <a href="/dashboard" className="sidebar-link">
                                <i className="bi bi-grid-fill" />
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li className="sidebar-title">Data Desa</li>
                        <li className="sidebar-item  ">
                            <a href="/artikel" className="sidebar-link">
                                <i className="bi bi-file-earmark-medical-fill" />
                                <span>Data Artikel</span>
                            </a>
                        </li>
                        <li className="sidebar-item  ">
                            <a href="/kegiatan" className="sidebar-link">
                                <i className="bi bi-file-earmark-medical-fill" />
                                <span>Data Kegiatan</span>
                            </a>
                        </li>
                        <li className="sidebar-item  ">
                            <a href="/jumlahpenduduk" className="sidebar-link">
                                <i className="bi bi-file-earmark-medical-fill" />
                                <span>Data Jumlah Penduduk</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <button className="sidebar-toggler btn x"><i data-feather="x" /></button>
            </div>
        </div>

    )
}

export default Sidebar;