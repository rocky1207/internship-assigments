/*
async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
fetchData("http://localhost:3001/api/users").then((res) => {
  console.log(res);
})
.catch(error => {
    console.log(error);
});
*/
async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
fetchData("http://localhost:3001/api/users")
  .then((res) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
