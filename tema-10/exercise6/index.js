
text = document.getElementById("text")

url = "https://google.com"

let request = new XMLHttpRequest();
request.open("GET", url);
request.setRequestHeader('Access-Control-Allow-Headers', '*');
request.setRequestHeader('Content-type', 'application/ecmascript');
request.setRequestHeader('Access-Control-Allow-Origin', '*');
request.send()

request.onload = function() {
    let status = request.status;
    if (status == 200) {
        text.innerHTML = request.responseText;
    } else {
        text = `An error has occurred, status code: ${status}`
    }
}

request.onerror = function() {
    text = "An error has occurred"
}
