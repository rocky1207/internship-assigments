import React from 'react';
let fullPrice1;
let price;
let num;
const ItemDetails = () => {
    const hideItemDetails = () => {
        const itemDetails = document.querySelector('.addItem-js');
        itemDetails.classList.add('hidden');
        const background = document.querySelector('.background');
        background.classList.add('hidden');
        document.body.classList.remove('bodyOverflow');
        fullPrice1 = document.querySelector('.ammount-js').innerText;
        showCart();
        ammount();
    };
    const pickUpPrice = (num) => {
        price = document.querySelector('.productPrice-js').innerText;
        price = price.replace('.', '');
        price = parseFloat(price);
        price = price * num;
        price = price.toString();
        price = fixPrice(price);
        document.querySelector('.priceValue-js').innerText = price;
    };
    const quantityPlus = () => {
        num = document.querySelector('.itemsAdded').innerText;
        num = parseInt(num);
        num += 1;
        document.querySelector('.itemsAdded').innerText = num;
        pickUpPrice(num);
    };
    const quantityMinus = () => {
        num = document.querySelector('.itemsAdded').innerText;
        num = parseInt(num);
        num -= 1;
        if (num <= 0) {
            num = 0;
        }
        document.querySelector('.itemsAdded').innerText = num;
        pickUpPrice(num);
    };
    const quantityDelete = () => {
        document.querySelector('.itemsAdded').innerText = 0;
        document.querySelector('.priceValue-js').innerText = '0.00';
    };

    const ammount = () => {
        const a = document.querySelectorAll('.itemNumber-js');
        a[0].innerText = num;
        let price = document.querySelector('.priceValue-js').innerText;
        price = price.replace('.', '');
        price = parseFloat(price);
        price = price.toString();
        price = fixPrice(price);
        document.querySelector('.ammount-js').innerText = price;
        fullAmmount(price);
        quantityDelete();
    };

    const fullAmmount = () => {
        fullPrice1 = fullPrice1.replace('.', '');
        fullPrice1 = fullPrice1.replace(',', '');
        fullPrice1 = parseFloat(fullPrice1);
        let fullPrice2 = document.querySelector('.priceValue-js').innerText;
        fullPrice2 = fullPrice2.replace('.', '');
        fullPrice2 = fullPrice2.replace(',', '');
        fullPrice2 = parseFloat(fullPrice2);
        let fullPrice3 = fullPrice1 + fullPrice2;
        fullPrice3 = fullPrice3.toString();
        let ammount = fixPrice(fullPrice3);
        console.log(ammount);
        document.querySelector('.ammount-js').innerText = ammount;
    };
    const fixPrice = (price) => {
        if (price.length > 3) {
            const partOne = price.slice(0, price.length - 3);
            const partTwo = price.slice(price.length - 3, price.length);
            price = partOne + '.' + partTwo;
        }
        if (price.length > 7) {
            price = price.replace('.', '');
            const partOne = price.slice(0, price.length - 6);
            const partTwo = price.slice(price.length - 6, price.length - 3);
            const partThree = price.slice(price.length - 3, price.length);
            price = partOne + '.' + partTwo + ',' + partThree;
        }
        return price;
    };
    const showCart = () => {
        document.querySelector('.cartSummary').classList.remove('hidden');
        document.querySelector('.finallStep').classList.remove('hidden');
    };
    return (
        <article className="hidden addItem addItem-js">
            <div className="productInfo info1">
                <p>Naziv proizvoda:</p>
                <h6 className="productName productName-js"></h6>
                <p>Cena:</p>
                <p className="productPrice-js"></p>
            </div>
            <div className="productInfo info2">
                <p className="totalAmmount">Ukupno:</p>
                <div className="plusMinus">
                    <button
                        className="changeQuantity plus-js"
                        onClick={quantityPlus}
                    >
                        +
                    </button>
                    <p className="itemsAdded">0</p>
                    <button
                        className="changeQuantity minus-js"
                        onClick={quantityMinus}
                    >
                        -
                    </button>
                </div>
            </div>
            <div className="productInfo info3">
                <p>Ukupna vrednost:</p>
                <p className="priceValue-js">0.00</p>
            </div>
            <div className="oneMoreStep">
                <button
                    className="addItemBtn addToCart"
                    onClick={quantityDelete}
                >
                    obriši
                </button>
                <button
                    className="addItemBtn addToCart"
                    onClick={hideItemDetails}
                >
                    potvrdi
                </button>
            </div>
        </article>
    );
};

export default ItemDetails;
