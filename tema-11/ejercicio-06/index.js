
function fetchPost() {
    let url = "https://jsonplaceholder.typicode.com/posts/1";

    return fetch(url)
        .then(response => {
            return response.json()
                .then(data => {
                    return { status: response.status, body: data.body };
                });
        })
}

// fetchPost().then(response => console.log(response));

module.exports = {
    fetchPost
};
