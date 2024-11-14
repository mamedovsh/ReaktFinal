import React, { useState } from "react";
import Product from "./Product";
import SizeFilter from "./SizeFilter";
import "../style.css";
import "../styleCatalog.css"

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


const Breadcrumb = () => (
        <div className="breadcrumb">
            <div className="breadcrumb__left">
                <h4 className="breadcrumb__title">NEW ARRIVALS</h4>
            </div>
            <div className="breadcrumb__right">
                <a href="#" className="breadcrumb__home">HOME</a>
                <a href="#" className="breadcrumb__men">MEN</a>
                <a href="#" className="breadcrumb__new__arrivals">NEW ARRIVALS</a>
            </div>
        </div>
    );


const categories = ["Accessories", "Bags", "Denim", "Hoodies & Sweatshirts", "Jackets & Coats", "Polos", "Shirts","Shoes","Sweaters & Knits","T-Shirts","Tanks"];
const brands = ["Accessories", "Bags", "Denim", "Hoodies & Sweatshirts", "Jackets & Coats", "Polos", "Shirts","Shoes","Sweaters & Knits","T-Shirts","Tanks"];
const designers = ["Accessories", "Bags", "Denim", "Hoodies & Sweatshirts", "Jackets & Coats", "Polos", "Shirts","Shoes","Sweaters & Knits","T-Shirts","Tanks"];

const FilterSort = () => (
    <div className="filter-sort">
        <details className="filter">
            <summary className="filter__summary">
                <span className="filter__head">FILTER</span>
            </summary>
            <div className="filter__content">
                <FilterSection title="CATEGORY" items={categories} />
                <FilterSection title="BRAND" items={brands} />
                <FilterSection title="CATEGORY" items={designers} />
            </div>
        </details>
        <div className="sort">
            <SortItem title="TRENDING NOW" />
            <SortItem title="SIZE" />
            <SortItem title="PRICE" />
        </div>
    </div>
);

const FilterSection = ({title, items}) => (
    <details className="filter__item">
        <summary className="filter__heading">{title}</summary>
        <div className="filter__link-box">
            {items.map(item => <a href="#" className="filter__link" key={item}>{item}</a>)}
        </div>
    </details>
);

const SortItem = ({title}) => (
    <details className="sort__item">
        <summary>{title}</summary>
    </details>
);



// const SizeFilter = ({ setFilteredSize }) => {
//     return (
//       <div>
//         <h3>Filter by Size:</h3>
//         <button onClick={() => setFilteredSize('All')}>All</button>
//         <button onClick={() => setFilteredSize('S')}>S</button>
//         <button onClick={() => setFilteredSize('M')}>M</button>
//         <button onClick={() => setFilteredSize('L')}>L</button>
//         <button onClick={() => setFilteredSize('XS')}>XS</button>
//       </div>
//     );
//   };


const Pagination = () =>(
    <div className="pagination">
        <img src="../img/pagination.png" alt="#"/>
    </div>
);


const products = [
    {
        image:"../img/Rectangle 15 copy.jpeg",
        title:"ELLERY DDF CAPSULE",
        description:" Known for her sculptural takes on traditional tailoring",
        price:"$100"
    },    
    {
        image:"../img/Rectangle 16 copy.jpeg",
        title:"ELLERY X M'O CAPSULE",
        description:" Known for her sculptural takes on traditional tailoring",
        price:"$160"
    },    
    {
        image:"../img/Image (5).png",
        title:"ELLERY X M CAPSULE",
        description:" Known for her sculptural takes on traditional tailoring",
        price:"$108"
    },    
    {
        image:"../img/Rectangle 15 copy.jpeg",
        title:"ELLERY PHP CAPSULE",
        description:" Known for her sculptural takes on traditional tailoring",
        price:"$200"
    }    
                            
];

const Footer = () => (
    <footer className="footer">
        <div className="foooter__top">
        <div className="footer__top__left">
                    <img className="footer__top__img__1" src="/img/Forma 1 (3).svg" alt="" />
                    <h3 className="footer__top__text__big">Free Delivery</h3>
                    <p className="footer__top__text">
                        Worldwide delivery on all. Authorit tively morph next-generation
                        innov tion with extensive models.
                    </p>
        </div>
        <div className="footer__top__mid">
                    <img className="footer__top__img__2" src="/img/Forma 1 (1).png" alt="" />
                    <h3 className="footer__top__text__big">Sales & discounts</h3>
                    <p className="footer__top__text">
                        Worldwide delivery on all. Authorit tively morph next-generation
                        innov tion with extensive models.
                    </p>
                </div>
                <div className="footer__top__right">
                    <img className="footer__top__img__3" src="/img/Forma 1.png" alt="" />
                    <h3 className="footer__top__text__big">Quality assurance</h3>
                    <p className="footer__top__text">
                        Worldwide delivery on all. Authorit tively morph next-generation
                        innov tion with extensive models.
                    </p>
                </div>
        </div>
    </footer>
);

const Catalog = () => {
    const [filterSize, setFilteredSize] = useState('All');
    return (
        <div className="center">
            <Header/>
            <div>
            <SizeFilter setFilteredSize={setFilteredSize} />
            <Product filterSize={filterSize} />
            </div>
            <div>
            <Breadcrumb/>
            </div>
            <FilterSort />
            <div className="bott__content">
            <div className="bott__content__container">
                {products.map(product => <Product key={product.title} product={product} />)}
            </div>
        </div>
        <SizeFilter />
        <Pagination />
        <Footer />
        </div>
    );
};


export default Catalog;




