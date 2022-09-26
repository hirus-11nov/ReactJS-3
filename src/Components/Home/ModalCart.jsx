import React, { Component } from 'react'

export default class ModalCart extends Component {

    renderCart = () => {
        const {cart, deleteCartItem, updateQuantity} = this.props;
        return cart.map((item, index) => {
            return (<tr key={index}>
                <td>{item.maSP}</td>
                <td><img src={item.hinhAnh} alt="" width={75} height={75} /></td>
                <td>{item.tenSP}</td>
                <td>
                    <button className='btn btn-success' onClick={() => {
                        updateQuantity(false, item.maSP)
                    }}>-</button>
                    <span className='mx-2' style={{fontSize: 20, verticalAlign: 'middle'}}>{item.soLuong}</span>
                    <button className='btn btn-success' onClick={() => {
                        updateQuantity(true, item.maSP)
                    }}>+</button>
                </td>
                <td>{item.giaBan.toLocaleString()}</td>
                <td>{(item.soLuong * item.giaBan).toLocaleString()}</td>
                <td><button className='btn btn-danger' onClick={() => {
                    deleteCartItem(item.maSP)
                }}>Xóa</button></td>
            </tr>)
        })
    }

    render() {
        return (
            <div>
                {/* if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard */}
                <div className="modal fade" id="modalId" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="modalTitleId">Giỏ hàng</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Mã sản phẩm</th>
                                            <th>Hình ảnh</th>
                                            <th>Tên Sản Phẩm</th>
                                            <th>Số lượng</th>
                                            <th>Đơn giá</th>
                                            <th>Thành tiền</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderCart()}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan={5}></td>
                                            <td>Tổng tiền</td>
                                            <td>
                                                {this.props.cart.reduce((total, item) => {
                                                    return total += item.soLuong * item.giaBan
                                                }, 0).toLocaleString()}
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

