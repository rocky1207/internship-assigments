const Nav = () => {
    const showFunc = (e) => {
        const p = document.querySelectorAll('.headerP');
        const num = parseInt(e.target.getAttribute('data-num'));
        const section = document.querySelectorAll('.sec');
        for (let i = 0; i < section.length; i++) {
            if (i === num) {
                section[i].classList.remove('hidden');
                section[i].classList.add('section');
                p[i].classList.add('currentSection');
            } else {
                section[i].classList.remove('section');
                section[i].classList.add('hidden');
                p[i].classList.remove('currentSection');
            }
        }
    };
    return (
        <nav>
            <ul className="products">
                <li>
                    <p
                        className="currentSection headerP"
                        onClick={showFunc}
                        data-num="0"
                    >
                        laptopovi
                    </p>
                </li>
                <li>
                    <p className="headerP" onClick={showFunc} data-num="1">
                        televizori
                    </p>
                </li>
                <li>
                    <p className="headerP" onClick={showFunc} data-num="2">
                        slušalice
                    </p>
                </li>
            </ul>
        </nav>
    );
};
export default Nav;
