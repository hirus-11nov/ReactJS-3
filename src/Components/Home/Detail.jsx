import React, { Component } from 'react'

export default class Detail extends Component {
    render() {
        const {detailProd} = this.props;
        return (
            <div className='container'>
                <div className="mt-3">
                    <div className="row">
                        <div className="col-4 text-center">
                            <h3>{detailProd.tenSP}</h3>
                            <img src={detailProd.hinhAnh} alt="" height={350} className="w-100" style={{ objectFit: 'contain' }} />
                        </div>
                        <div className="col-8">
                            <h3>Thông tin chi tiết</h3>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Màn hình</th>
                                        <td>{detailProd.manHinh}</td>
                                    </tr>
                                    <tr>
                                        <th>Hệ điều hành</th>
                                        <td>{detailProd.heDieuHanh}</td>
                                    </tr>
                                    <tr>
                                        <th>Cam trước</th>
                                        <td>{detailProd.cameraTruoc}</td>
                                    </tr>
                                    <tr>
                                        <th>Cam sau</th>
                                        <td>{detailProd.cameraSau}</td>
                                    </tr>
                                    <tr>
                                        <th>Ram</th>
                                        <td>{detailProd.ram}</td>
                                    </tr>
                                    <tr>
                                        <th>Rom</th>
                                        <td>{detailProd.rom}</td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
