
let postNumber = prompt("Enter the post number:");

if (Number.isInteger(parseInt(postNumber))) {
    let url = `https://jsonplaceholder.typicode.com/posts/${postNumber}`;

    fetch(url)
        .then(response => {
                console.log(response.status);
                return response.json();
        })
        .then(data => console.log(`Post Number: ${data.id}\n\nTitle: ${data.title}\n\nBody: ${data.body}`))
        .catch(error => console.error(error));
} else {
    console.error("Invalid post number");
}
