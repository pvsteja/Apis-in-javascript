const url = "https://api.wheretheiss.at/v1/satellites/25544"; 

async function getData() { 
    const response = await fetch(url);

    const data = await response.json();
    console.log(data);
    const { latitude, longitude } = data;
    document.getElementById("lat").textContent = latitude;
    document.getElementById("long").textContent = longitude;



}
getData()