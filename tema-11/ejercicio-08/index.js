
function getNumberOfPosts() {
  let url = `https://jsonplaceholder.typicode.com/posts/`;

  return fetch(url)
      .then(response => response.json())
      .then(data => {
          return data.length;
      });
}

function getPostTittles() {
  let url = `https://jsonplaceholder.typicode.com/posts/`;

  return fetch(url)
      .then(response => response.json())
      .then(data => {
          return data.map(post => post.title);
      });
}

function insertContentIntoTable() {
  let table = document.getElementById("table");

  let url = `https://jsonplaceholder.typicode.com/posts/`;

  return fetch(url)
      .then(response => response.json())
      .then(data => {
          data.forEach(post => {
              let row = table.insertRow();
              let tittleCell = row.insertCell();
              let bodyCell = row.insertCell();

              tittleCell.innerHTML = post.title;
              bodyCell.innerHTML = post.body;
          });
      });
}

// getNumberOfPosts().then(number => console.log(`Number of posts received: ${number}`));
// getPostTittles().then(titles => console.log(titles));
// insertContentIntoTable();

module.exports = {
    getNumberOfPosts,
    getPostTittles,
    insertContentIntoTable
};
