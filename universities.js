const ur = "http://universities.hipolabs.com/search?country=United+States";

async function getName() {
    const response = await fetch(ur);
    const data = await response.json();
    var email = JSON.stringify(data);
    res = JSON.parse(email);
    // var s = ""; 
    for (let i = 0; i < res.length; i++) {
        coordinates += res[i].domains + "<br>";    
    }
    document.getElementById("domains").innerHTML = coordinates;
    
}


getName()