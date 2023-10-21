
function fetchPost(postNumber) {
    if (!Number.isInteger(postNumber)) {
        throw new Error("Invalid post number");
    }

    let url = `https://jsonplaceholder.typicode.com/posts/${postNumber}`;

    return fetch(url)
        .then((response) => {
            return response.json().then((data) => {
                return { status: response.status, body: data.body };
            });
        });
}

// let postNumber = prompt("Enter the post number:");
// fetchPost(postNumber).then(response => console.log(response));

module.exports = {
    fetchPost
};
