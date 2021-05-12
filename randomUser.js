const u = "https://randomuser.me/api/";

async function getName() {
    const response = await fetch(u);
    const data = await response.json();
    var email = JSON.stringify(data);
    emailParsed = JSON.parse(email);
    const res = emailParsed.results
    for (let i = 0; i < res.length; i++) {
        const coordinates = res[i].location.coordinates.latitude;
        
        document.getElementById("coordinates").textContent = coordinates;
        
    }
    
}


getName()