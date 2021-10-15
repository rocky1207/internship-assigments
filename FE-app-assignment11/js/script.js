async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
fetchData('http://localhost:3001/api/users').then((res) => {
    for (let i = 0; i < res.length; i++) {
        document.write('<div>');
        document.write('<h2>Employee ' + res[i].id + ':</h2>');
        document.write('<p>Name: ' + res[i].name + '</p>');
        document.write('<p>E-mail: ' + res[i].email + '</p>');
        document.write('<p>Address: ' + res[i].address + '</p>');
        document.write('<p>Country: ' + res[i].country + '</p>');
        document.write('<p>Company: ' + res[i].company + '</p>');
        document.write('</div>');
        document.write('<hr>');
    }
});
