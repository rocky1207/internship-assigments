import React from 'react';
import headPhoneList from '../../productList/headPhoneList';
const Article = (props) => {
    const { id, img, name, price } = props.article;
    const classId = 'product' + id.toString();
    const showItemDetails = () => {
        const itemDetails = document.querySelector('.addItem-js');
        itemDetails.classList.remove('hidden');
        const wh = window.innerHeight / 2;
        const scroll = window.scrollY;
        const ah = itemDetails.offsetHeight / 2;
        itemDetails.style.top = wh - ah + scroll - 100 + 'px';
        const ww = window.innerWidth / 2;
        const aw = itemDetails.offsetWidth / 2;
        itemDetails.style.left = ww - aw + 'px';
        document.body.classList.add('bodyOverflow');
        const h = document.querySelector('body').offsetHeight;
        const background = document.querySelector('.background');
        background.classList.remove('hidden');
        background.style.height = h + 200 + 'px';
        sendDatas();
        elements();
    };
    const elements = () => {
        const div = document.querySelector('.cartSummary');
        const p1 = document.createElement('p');
        p1.setAttribute('class', 'itemNumber');
        p1.classList.add('dataSpace');
        p1.innerText = 'broj artikala: ';
        const p2 = document.createElement('p');
        p2.setAttribute('class', 'itemNumber');
        p2.innerText = name;
        const span = document.createElement('span');
        span.setAttribute('class', 'itemNumber-js');
        p1.appendChild(span);
        div.insertBefore(p1, div.firstChild);
        div.insertBefore(p2, div.firstChild);
    };
    const sendDatas = () => {
        document.querySelector('.productName-js').innerHTML = name;
        document.querySelector('.productPrice-js').innerHTML = price;
    };
    return (
        <article className={`${classId} productArticle`}>
            <img className="productImg" src={img} alt="3" />
            <h6>{name}</h6>
            <p>Price: {price}</p>
            <button
                className="addToCart"
                type="button"
                onClick={showItemDetails}
            >
                Add to cart
            </button>
        </article>
    );
};
const HeadPhoneSection = () => {
    return (
        <section className="hidden sec">
            {headPhoneList.map((article) => {
                return <Article article={article} />;
            })}
        </section>
    );
};
export default HeadPhoneSection;
