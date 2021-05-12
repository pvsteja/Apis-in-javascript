
        function loadDoc() {
            var xhttp = new XMLHttpRequest();

            let url = "https://api.wheretheiss.at/v1/satellites/25544";

            xhttp.onreadystatechange = function () {

                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("root").innerHTML = this.responseText;
                }
            };
            xhttp.open("GET", url, true);
            xhttp.send();
        }
        loadDoc();