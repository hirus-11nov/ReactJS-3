import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        const {product, viewDetail, addToCart} = this.props;
        return (
            <div className="card">
                    <img src={product.hinhAnh} alt="" height={350} className="w-100" style={{ objectFit: 'contain' }} />
                    <div className="card-body">
                        <p>{product.tenSP}</p>
                        <p>{product.giaBan.toLocaleString()}</p>
                        <button className="btn btn-success" onClick={() => {
                            viewDetail(product)
                        }}>Xem chi tiết</button>
                        <button className="btn btn-danger ms-3" onClick={() => {
                            addToCart(product)
                        }}>Thêm giỏ hàng</button>
                    </div>
            </div>
        )
    }
}
