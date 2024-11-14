import React, { useState } from "react";
import '../cartStyle.css';

const products = [
        {
          id: 1,
          title: "ELLERY X M'O CAPSULE",
          description:
            "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
          price: 52.0,
          size: "M",
          color: "Red",
          quantity:1,
          imageUrl: "./img/prod1.jpg",
        },
        {
          id: 2,
          title: "ELLERY  M'O CAPSULE",
          description:
            "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
          price: 252.0,
          size: "S",
          color: "Red",
          quantity:1,
          imageUrl: "./img/prod2.jpg",
        },
        {
          id: 3,
          title: "ELLERY X M' CAPSULE",
          description:
            "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
          price: 152.0,
          size: "XS",
          color: "Red",
          quantity:1,
          imageUrl: "./img/prod3.png",
        },
        {
          id: 4,
          title: "ELLERY XO CAPSULE",
          description:
            "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
          price: 122.0,
          size: "L",
          color: "Red",
          quantity:1,
          imageUrl: "./img/prod4.png",
        }
    ];

const Cart = () => {
    const [items, setItems] = useState(products);

    const handleQuantutyChange = (id, quantity) =>{
        const updatedItems =items.map(item =>
         items.id === id ? {...item, quantity: Math.max(1, quantity)} : item 
);
setItems(updatedItems);
};

const calculateGrandTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

return (
    <div className="center">
        <header className="header">
            <div className="header__left">
                <img src="/img/Group 2.png" alt="header__logo" className="header__logo" />
                <img src="/img/Forma 1 (2).svg" alt="header__search" className="header__search" />
            </div>
            <div className="header__right">
                <img src="/img/Forma 1.svg" alt="header__menu" className="header__menu" />
                <img src="/img/Forma 1 (1).svg" alt="" className="header__profile" />
                <img src="/img/Forma 1 (4).svg" alt="" className="header__basket" />
            </div>
        </header>
    
        
            <div className="breadcrumb">
                <div className="breadcrumb__left">
                    <h4 className="breadcrumb__title">SHOPPING</h4>
                    <h4 className="breadcrumb__title">CART</h4>
                </div>
                
            </div>
        

    <div className="cart__block">
        {items.map(item => (
            <div key={item.id} className="cart__block__item">
                <div className="cart__block__info">
                    <h5>{item.title}</h5>
                    <p>Price: ${item.price}</p>
                    <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => handleQuantutyChange(item.id, parseInt(e.target.value))}
                />
            </div>
        </div>
    ))}
    <div className="total">
            <h6>GRAND TOTAL: ${calculateGrandTotal()}</h6>
            {/* <img className="total__sub" src="/img/SUB TOTAL $900.svg" alt="">
            <img class="total__shape" src="/img/Shape 8.svg" alt="">
            <img class="total__grand" src="/img/GRAND TOTAL $900.svg" alt=""> */}
            <button className="total__button">PROCEED TO CHECKOUT</button>
            {/* <input class="total__button" type="button" value="PROCEED TO CHECKOUT"/> */}
        </div>
        </div>
            
        <footer class="footer">
            <div class="footer__mid">
                <img class="footer__mid__background__img" src="../img/photo subscribe.jpeg" alt="" />
                <div class="footer__mid__left">
                    <img class="footer__mid__left__img" src="../img/Intersect.png" alt="" />
                    <p class="footer__mid__left__text">
                        “Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                        <span class="footer__mid__left__text__italic">a pulvinar purus condimentum“</span>
                    </p>
                </div>
                <div class="footer__mid__right">
                    <h3 class="footer__mid__right__header">SUBSCRIBE</h3>
                    <p class="footer__mid__right__text">FOR OUR NEWLETTER AND PROMOTION</p>
                    <form action="#">
                        <input required type="email" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>

            <div class="footer__bott">
                <div class="footer__bott__left">
                    <p>© 2023  Brand  All Rights Reserved.</p>
                </div>
                <div class="footer__bott__right">
                    <img src="../img/footer__bott__right__3.svg" alt="pinterest" />
                    <img src="../img/2 (1).png" alt="X" />
                </div>
            </div>
        </footer>
    
    </div> 

);

};

export default Cart;