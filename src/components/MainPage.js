import React from "react";
import "../style.css";
// import { Link } from "react-router-dom";




const Header = () => (
  <header className="header">
      <div className="header__left">
      <img src="../img/Group 2.png" alt="header__logo" className="header__logo" />
      <img src="../img/Forma 1(2).svg" alt="header__search" className="header__search" />
      </div>
      <div className="header__right">
          <img src="../img/Forma 1.svg" alt="header__menu" className="header__menu"/>
          <img src="../img/Forma 1 (1).svg" alt="header__profile" className="header__profile" />
          <img src="../img/Forma 1 (4).svg" alt="header__basket" className="header__basket" />
      </div>
  </header>
);



function MidContent() {
  const items = [
    {
      imgSrc: "../img/1-for women  (1).png",
      smallText: "30%&nbsp;OFF",
      bigText: "FOR&nbsp;WOMEN"
    },
    {
      imgSrc: "../img/2-for men  (1).jpeg",
      smallText: "HOT&nbsp;DEAL",
      bigText: "FOR&nbsp;MEN"
    },
    {
      imgSrc: "../img/3-for kids  (1).png",
      smallText: "NEW&nbsp;ARRIVALS",
      bigText: "FOR&nbsp;KIDS"
    }

  ];

  return(
    <div className="content__center">
      <div className="mid__content__block__small">
        {items.map((item, index) => (
          <div className="mid__block" key={index}>
            <img src={item.imgSrc} alt={item.bigText} className="mid__block__back__img" />
            <div className="mid__block__text">
              <p className="mid__block__text__small"dangerouslySetInnerHTML={{__html: item.smallText}} />
              <p className="mid__block__text__big"dangerouslySetInnerHTML={{__html: item.bigText}} />
              </div>
              </div>
        ))}
      </div>
      <div className="mid__block__big">
        <img src="../img/Group 39.jpeg" alt="accesories" className="mid__block__back__img" />
        <div className="mid__block__text">
          <p className="mid__block__text__small">LUXIROUS&nbsp;&&nbsp;TRENDY</p>
          <p className="mid__block__text__big">ACCESSORIES</p>

        </div>
      </div>
    </div>
  );
}

function BottContent() {
  const featuredItems = [
{
  imgSrc: "../img/Rectangle 15 copy.jpeg",
  title: "ELLERY X M'O CAPSULE",
  text: "Known for her sculptural takes on traditional tailoring",
  price: "$65.00"
},
{
  imgSrc: "../img/Image (4).png",
  title: "ELLERY X M' CAPSULE",
  text: "Known for her sculptural takes on traditional tailoring",
  price: "$165.00"
},
{
  imgSrc: "../img/Rectangle 16 copy.png",
  title: "ELLERY  M'O CAPSULE",
  text: "Known for her sculptural takes on traditional tailoring",
  price: "$85.00"
}
  ];

  return (
    <div className="bott__content">
      <div className="bott__content__text">
        <h3 className="bott__block__text__small">Featured Items</h3>
        <p className="bott__block__text__small">
          Shop for items based on what we featured in this week</p>
      </div>
      <div className="bott__content__container">
        {featuredItems.map((item, index) =>(
          <div className="bott__content__container__box" key={index}>
            <img src={item.imgSrc} alt={`bott__${index+1}__img`} className="bott__content__container__box__img" />
            <h6 className="bott__content__container__box__title">{item.title}</h6>
            <p className="bott__content__container__box__text">{item.text}</p>
            <p className="bott__content__container__box__price">{item.price}</p>
            </div>
        ))}
      </div>
    </div>
  );
}


function Footer() {
  return (
    <footer className="footer">
            <div className="footer__top">
                <div className="footer__top__left">
                    <img className="footer__top__img__1" src="img/Forma 1 (3).svg" alt="" />
                    <h3 className="footer__top__text__big">Free Delivery</h3>
                    <p className="footer__top__text">
                        Worldwide delivery on all. Authorit tively morph next-generation
                        innov tion with extensive models.
                    </p>
                </div>
                <div className="footer__top__mid">
                    <img className="footer__top__img__2" src="img/Forma 1 (1).png" alt="" />
                    <h3 className="footer__top__text__big">Sales & discounts</h3>
                    <p className="footer__top__text">
                        Worldwide delivery on all. Authorit tively morph next-generation
                        innov tion with extensive models.
                    </p>
                </div>
                <div className="footer__top__right">
                    <img className="footer__top__img__3" src="img/Forma 1.png" alt="" />
                    <h3 className="footer__top__text__big">Quality assurance</h3>
                    <p className="footer__top__text">
                        Worldwide delivery on all. Authorit tively morph next-generation
                        innov tion with extensive models.
                    </p>
                </div>
            </div>

            <div className="footer__mid">
                <img className="footer__mid__background__img" src="img/photo subscribe.jpeg" alt="" />
                <div className="footer__mid__left">
                    <img className="footer__mid__left__img" src="img/Intersect.png" alt="" />
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
                    <img src="img/footer__bott__right__3.svg" alt="pinterest" />
                    <img src="img/2 (1).png" alt="X" />
                </div>
            </div>
        </footer>
  );
};

const MainPage = () => {
  // <nav>
  //   <ul>
  //   <li>
  //       <Link to="/">Главная</Link>
  //       </li>
  //     <li>
  //       <Link to="/Catalog">Каталог</Link>
  //       </li>
  //       <li>
  //       <Link to="/Cart">Корзина</Link>
  //       </li>
  //       <li>
  //       <Link to="/Registration">Регистрация</Link>
  //       </li>
  //       <li>
  //       <Link to="/ProductList">ProductList</Link>
  //       </li>
        
      
  //   </ul>
  // </nav>
  return(
  <div className="center">
    <Header />
    <MidContent />
    <BottContent />
    <Footer />
  </div>
);
};

export default MainPage;