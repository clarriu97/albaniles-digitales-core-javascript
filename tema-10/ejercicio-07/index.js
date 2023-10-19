
let addressRequest = "Por favor, introduce la dirección de la que quieres saber su geolocalización";
let address = prompt(addressRequest);
let apikey = "";

fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apikey}`)
  .then((response) => {
    return response.json();
  }).then(jsonData => {
    console.log(jsonData.results[0].geometry.location);
  }).catch(error => {
    console.log(error);
  });
