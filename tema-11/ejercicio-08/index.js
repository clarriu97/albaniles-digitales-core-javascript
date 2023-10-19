
function fetchPosts() {
  let url = `https://jsonplaceholder.typicode.com/posts/`;

  let table = document.getElementById("table");

  fetch(url)
      .then(response => response.json())
      .then(data => {
          console.log(`Number of posts received: ${data.length}`);
          data.forEach(post => {
              console.log(post.title)
              let row = table.insertRow();
              let titleCell = row.insertCell();
              let bodyCell = row.insertCell();
              titleCell.innerHTML = post.title;
              bodyCell.innerHTML = post.body;
          });
      })
      .catch(error => console.error(error));
}

fetchPosts();
