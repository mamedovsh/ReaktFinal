import React from "react";
import '../style.css';
import '../styleRegistration.css';


const Header = () => (
    <header className="header">
        <div className="header__left">
            <img src="../img/Group 2.png" alt="header__logo" className="header__logo" />
            <img src="../img/Forma 1 (2).svg" alt="header__search" className="header__search" />
        </div>
        <div className="header__right">
            <img src="../img/Forma 1.png" alt="header__menu" className="header__menu" />
            <img src="../img/Forma 1 (1).svg" alt="header__profile" className="header__profile" />
            <img src="../img/Forma 1 (4).svg" alt="header__basket" className="header__basket" />
        </div>
    </header>
);

const RegistrationForm = ()=> (
    <form className="form">
        <h4>Your name</h4>
        <input className="first" placeholder="First Name" /><br/>
        <input className="last" placeholder="Last Name" />
    </form>
);

const GenderSelection = () => (
    <div className="check">
        <div className="male">
            <input type="radio" id="male" name="gender" value="male" defaultChecked />
            <label htmlFor="male">Male</label>
        </div>
        v\<div className="female">
            <input type="radio" id="female" name="gender" value="female" defaultChecked />
            <label htmlFor="female">Female</label>
        </div>
    </div>
);

const LoginDetails = () => (
    <div className="login">
        <h6 className="log">Login details</h6>
        <input className="e-mail" type="e-mail" placeholder="e-mail" />
        <input className="password" type="password" placeholder="password" />
        <img className="instruction" src="../img/instruction.svg" alt=""/>
        <input className="join" type="button" value="join now->" />
    </div>
);

const LoyaltyProgram = () =>(
    <div className="loyalty">
        <h2>LOYALTU HAS IS PERKS</h2>
        <h3>Get in on the loyalty program where you can earn points
             and unlock serious perks. Starting with these as
              soon as you join:</h3>
           <div className="offer">
            <img src="../img/bird.svg" alt=""/> 
            <h3>15% off welcome offer
            </h3>
           </div> 
           <div className="offer">
            <img src="../img/bird.svg" alt=""/> 
            <h3>Free shipping, returns and exchanges on all orders</h3>
            </div>
            <div className="offer">
            <img src="../img/bird.svg" alt=""/> 
            <h3>Early acces to products</h3>
            </div>
            <div className="offer">
            <img src="../img/bird.svg" alt=""/> 
            <h3>Exclusive offers & rewards</h3>
            </div>
            
    </div>

);

const Footer = () => (
    <footer className="footer">
        <div className="footer__top">
        <div className="footer__top__left">
                <img className="footer__top__img__1" src="../img/Forma 1 (3).svg" alt="" />
                <h3 className="footer__top__text__big">Free Delivery</h3>
                <p className="footer__top__text">
                    Worldwide delivery on all. Authorit tively morph next-generation
                    innov tion with extensive models.
                </p>
            </div>
            <div className="footer__top__mid">
                <img className="footer__top__img__2" src="../img/Forma 1 (1).png" alt="" />
                <h3 className="footer__top__text__big">Sales & discounts</h3>
                <p className="footer__top__text">
                    Worldwide delivery on all. Authorit tively morph next-generation
                    innov tion with extensive models.
                </p>
            </div>
            <div className="footer__top__right">
                <img className="footer__top__img__3" src="../img/Forma 1 (1).png" alt="" />
                <h3 className="footer__top__text__big">Quality assurance</h3>
                <p className="footer__top__text">
                    Worldwide delivery on all. Authorit tively morph next-generation
                    innov tion with extensive models.
                </p>
            </div>
        </div>
        <div className="footer__mid">
            <img className="footer__mid__background__img" src="./img/photo subscribe.jpeg" alt="" />
            <div className="footer__mid__left">
                <img className="footer__mid__left__img" src="./img/Intersect.png" alt="" />
                <p className="footer__mid__left__text">
                    “Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                    <span className="footer__mid__left__text__italic">a pulvinar purus condimentum“</span>
                </p>
            </div>
            <div className="footer__mid__right">
                <h3 className="footer__mid__right__header">SUBSCRIBE</h3>
                <p className="footer__mid__right__text">FOR OUR NEWLETTER AND PROMOTION</p>
                <form action="#">
                    <input required type="email" />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </div>
        <div className="footer__bott">
            <div className="footer__bott__left">
                <p>© 2023  Brand  All Rights Reserved.</p>
            </div>
            <div className="footer__bott__right">
                <img src="../img/footer__bott__right__3.svg" alt="pinterest" />
                <img src="../img/2 (1).png" alt="X" />
            </div>
        </div>
    </footer>
);

const RegistrationPage = () =>{
    return(
        <div className="center">
            <Header />
            <div className="breadcrumb">
                <div className="breadcrumb__left">
                    <h4 className="breadcrumb__title">REGISTRATION</h4>
                </div>
            </div>
            <RegistrationForm />
            <GenderSelection />
            <LoginDetails />
            <LoyaltyProgram />
            <Footer />
        </div>
    );
};



export default RegistrationPage;