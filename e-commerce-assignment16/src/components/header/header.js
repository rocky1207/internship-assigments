import React from 'react';
import Nav from '../nav/nav';
const Header = () => {
    const clearCart = () => {
        const del = document.querySelectorAll('.itemNumber');
        del.forEach((el) => {
            el.remove();
        });
        document.querySelector('.ammount-js').innerText = '0';
    };
    const procced = () => {
        const del = document.querySelectorAll('.itemNumber');
        del.forEach((el) => {
            el.remove();
        });
        const elHide = document.querySelector('.cartSummary');
        elHide.classList.add('hidden');
        document.querySelector('.finallStep').classList.add('hidden');
        document.querySelector('.ammount-js').innerText = '0';
    };
    return (
        <header className="headerScroll">
            <section className="headerSection">
                <p className="logo">ROCKYTech</p>
                <article className="searchArea">
                    <input
                        class="inputSearch"
                        type="text"
                        name="search"
                        placeholder="Search"
                    />
                    <button class="searchBtn" type="submit">
                        Search
                    </button>
                </article>
                <article className="cart">
                    <div className="cartSummary hidden">
                        <p className="fullPrice">
                            Ukupan iznos: <span className="ammount-js">0</span>
                        </p>
                    </div>
                    <i class="fa fa-shopping-basket" aria-hidden="true"></i>
                    <div className="finallStep hidden">
                        <button
                            className="addToCart space"
                            type="button"
                            onClick={clearCart}
                        >
                            Poništi kupovinu
                        </button>
                        <button
                            className=" addToCart space"
                            type="button"
                            onClick={procced}
                        >
                            Potvrdi kupovinu
                        </button>
                    </div>
                </article>
            </section>
            <Nav />
        </header>
    );
};
export default Header;
