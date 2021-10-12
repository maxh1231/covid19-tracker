let body = document.getElementById("body");
let searchInput = document.getElementById("search");
let searchBtn = document.getElementById("searchBtn");
var searchInputValue = searchInput.value;

let submitBtnHandler = function (event) {
    event.preventDefault();

    let search = fetch(`https://covid-19-data.p.rapidapi.com/country?name=${searchInput.value}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
            "x-rapidapi-key": "26aa5aaa64msh7c71403c8404b50p1f70d8jsn250c3dfeb42e"
        }
    })
        .then(response => response.json())

        .then(function (data) {
            console.log(data);
            console.log(data[0].confirmed)
            console.log(data[0].recovered)
            console.log(data[0].deaths)

            var dataCard = document.createElement("div");
            dataCard.classList.add("dataCard");
            body.appendChild(dataCard)

            var dataHeader = document.createElement("h2");
            dataHeader.textContent = searchInput.value;
            dataHeader.classList.add("dataHeader");
            dataCard.appendChild(dataHeader);

            var dataConfirmed = document.createElement("p");
            dataConfirmed.textContent = "Confirmed Cases: " + data[0].confirmed;
            dataConfirmed.classList.add("dataConfirmed");
            dataCard.appendChild(dataConfirmed);

            var dataRecovered = document.createElement("p");
            dataRecovered.textContent = "Recovered Cases: " + data[0].recovered;
            dataConfirmed.classList.add("dataRecovered");
            dataCard.appendChild(dataRecovered);

            var dataDeaths = document.createElement("p");
            dataDeaths.textContent = "Deaths: " + data[0].deaths;
            dataConfirmed.classList.add("dataDeaths");
            dataCard.appendChild(dataDeaths);


        })








}



searchBtn.addEventListener("click", submitBtnHandler);













