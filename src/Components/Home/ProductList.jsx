import React, { Component } from 'react'
import ProductItem from './ProductItem';

export default class ProductList extends Component {
    renderProduct = () => {
        const {products, viewDetail, addToCart} = this.props;
        return products.map((item, index) => {
            return <div className="col-4" key={index}>
                <ProductItem product={item} viewDetail={viewDetail} addToCart={addToCart}></ProductItem>
            </div>
        })
    }
    render() {
        let totalQuantity = this.props.quantity.reduce((total, item) => {
            return total += item.soLuong
        },0);
        return (
            <div>
                <h3 className='text-center'>Bài tập giỏ hàng</h3>
                <p className='text-end' style={{color: 'red', fontSize: 20, cursor: 'pointer'}} data-bs-toggle="modal" data-bs-target="#modalId">Giỏ hàng ({totalQuantity})</p>
                <div className="row">
                    {this.renderProduct()}
                </div>
                <hr />
            </div>
        )
    }
}
