import React, { Component } from 'react'
import Detail from './Detail';
import ProductList from './ProductList';
import ModalCart from './ModalCart';
import '../../assets/style.css'

const dataPhone = [
    { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
    { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
    { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
]

export default class Store extends Component {
    state = {
        product: [],
        cart: []
    }

    viewDetail = (prodClick) => {
        this.setState({
            product: prodClick
        })
    }

    addToCart = (prodClick) => {
        let cartItem = {
            maSP: prodClick.maSP,
            tenSP: prodClick.tenSP,
            giaBan: prodClick.giaBan,
            hinhAnh: prodClick.hinhAnh,
            soLuong: 1
        };
        let cartUpdate = [...this.state.cart];
        let index = cartUpdate.findIndex(item => item.maSP === cartItem.maSP)
        index != -1 ? cartUpdate[index].soLuong += 1 : cartUpdate.push(cartItem)
        this.setState({
            cart: cartUpdate
        })
    }

    deleteCartItem = (prodId) => {
        let cartUpdate = [...this.state.cart].filter(item => item.maSP !== prodId)
        this.setState({
            cart: cartUpdate
        })
    }

    updateQuantity = (type, prodId) => {
        let cartUpdate = [...this.state.cart];
        let index = cartUpdate.findIndex(item => item.maSP === prodId);
        if (type) {
            cartUpdate[index].soLuong += 1;
        } else {
            if (cartUpdate[index].soLuong > 1) {
                cartUpdate[index].soLuong -= 1;
            }
        }
        this.setState({
            cart: cartUpdate
        })
    }

    render() {
        return (
            <div className="container">
                <ModalCart cart={this.state.cart} deleteCartItem={this.deleteCartItem} updateQuantity={this.updateQuantity}></ModalCart>
                <ProductList products={dataPhone} viewDetail={this.viewDetail} quantity={this.state.cart} addToCart={this.addToCart} ></ProductList>
                <Detail detailProd={this.state.product}></Detail>
            </div>
        )
    }
}
