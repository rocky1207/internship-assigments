let hasMoreValue = true;
const args = new URLSearchParams(window.location.search);
let page = args.get('page') ?? 1;
let limit = args.get('limit') ?? 3;

let url = `http://localhost:3001/api/users?page=${page}&limit=${limit}`;

document.querySelector('#next').addEventListener('click', function () {
    if (hasMoreValue) {
        page++;
        querrySetUp();
        fetchData(url);
    }
});

document.querySelector('#previous').addEventListener('click', function () {
    if (page != 1) {
        page--;
        querrySetUp();
        fetchData(url);
    } else {
        page = 1;
    }
});
function querrySetUp() {
    window.location.search = `?page=${page}&limit=${limit}`;
}
async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    const res = data.results;
    let bool = data.hasMore;
    hasMoreValue = bool;
    writeNames(res);
}
function writeNames(res) {
    document.querySelector('#container').innerHTML = '';
    res.forEach((person) => {
        document
            .querySelector('#container')
            .insertAdjacentHTML('beforeend', `<p>${person.name}</p>`);
    });
}
fetchData(url);
