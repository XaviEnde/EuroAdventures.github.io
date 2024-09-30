/* PRICE FILTER */

let minP = document.getElementById("priceMin");
let maxP = document.getElementById("priceMax");
let countryArray = [];

const trip1 = { country: "Germany",
                price: 729,
                id: 1
}
const trip2 = { country: "Portugal",
                price: 1099,
                id: 2
}
const trip3 = { country: "Greece",
                price: 576,
                id: 3
}
const trip4 = { country: "Spain",
                price: 925,
                id: 4
}
const trip5 = { country: "Austria",
                price: 899,
                id:5
}
const trip6 = { country: "CzechRepublic",
                price: 899,
                id:6
}
const trip7 = { country: "Hungary",
                price: 899,
                id:7
}
const trip8 = { country: "Poland",
                price: 899,
                id:8
}
const trip9 = { country: "Slovakia",
                price: 899,
                id:9
}
const trip10 = { country: "Slovenia",
                price: 899,
                id:10
}
const trip11 = { country: "Switzerland",
                price: 899,
                id:11
}
const trip12 = { country: "Belarus",
                price: 899,
                id:12
}
const trip13 = { country: "Bulgaria",
                price: 899,
                id:13
}
const trip14 = { country: "Estonia",
                price: 899,
                id:14
}
const trip15 = { country: "Latvia",
                price: 899,
                id:15
}
const trip16 = { country: "Lithuania",
                price: 899,
                id:16
}
const trip17 = { country: "Moldova",
                price: 899,
                id:17
}
const trip18 = { country: "Romania",
                price: 899,
                id:18
}
const trip19 = { country: "Albania",
                price: 899,
                id:19
}
const trip20 = { country: "Bosnia and herzegovina",
                price: 899,
                id:20
}
const trip21 = { country: "Croatia",
                price: 899,
                id:21
}
const trip22 = { country: "Cyprus",
                price: 899,
                id:22
}
const trip23 = { country: "France",
                price: 899,
                id:23
}
const trip24 = { country: "Italy",
                price: 899,
                id:24
}
const trip25 = { country: "Malta",
                price: 899,
                id:25
}
const trip26 = { country: "Montenegro",
                price: 899,
                id:26
}
const trip27 = { country: "Slovenia",
                price: 899,
                id:27
}
const trip28 = { country: "Turkey",
                price: 899,
                id:28
}



const minPrice = parseInt(minP.value, 10) || 0;
const maxPrice = parseInt(maxP.value, 10) || Infinity;

document.getElementById("priceF").addEventListener("change", function(){

    console.log(minPrice, maxPrice);
    
   

    filterTrips(minPrice, maxPrice,)
    
})



/* COUNTRY FILTERS */

const filterDiv = document.getElementById("filterDiv");

let deleteIndex = 1

document.getElementById("region").addEventListener("change", function() {
    const regionValue = this.value;
const countryDropdowns = document.querySelectorAll(".countryF");
countryDropdowns.forEach(dropdown => dropdown.style.display = 'none');


const selectedDropdown = document.querySelector(`.${regionValue}`)
    selectedDropdown.style.display = "block"
})



document.getElementById("priceF").addEventListener("input", filterTrips)

document.querySelectorAll(".countryF select").forEach(select => {
    select.addEventListener("change", function() {
        const countryValue = this.value;
        if(!countryArray.includes(countryValue)){
            countryArray.push(countryValue);

            const addFilterValue = document.createElement("div")
            addFilterValue.innerHTML = `${countryValue} <button onclick="deleteFilter(this, '${countryValue}')">X</button>`;
            document.getElementById("filterDiv").appendChild(addFilterValue)
        }
        filterTrips()
    })
})


function filterTrips(){
    const minPrice = parseInt(minP.value, 10) || 0;
    const maxPrice = parseInt(maxP.value, 10) || Infinity;

    [trip1, trip2, trip3, trip4, trip5, trip6, trip7, trip8, trip9, trip10, trip11, trip12, trip13, trip14, trip15, trip16, trip17, trip18, trip19, trip20, trip21, trip22, trip23, trip24, trip25, trip26, trip27, trip28].forEach(trip => {
        const inPriceRange = trip.price >= minPrice && trip.price <= maxPrice;
        const matchesCountry = countryArray.length === 0 || countryArray.includes(trip.country)

        if(inPriceRange && matchesCountry) {
            document.getElementById(`trip${trip.id}`).style.display = "flex"
        }
        else{
            document.getElementById(`trip${trip.id}`).style.display = "none"
        }
    });
}



function deleteFilter(button, countryValue) {
    const index = countryArray.indexOf(countryValue)
    if(index > -1){
        countryArray.splice(index, 1);
    }
    button.parentElement.remove();
    filterTrips()


    
}

window.onload = filterTrips










/* show Filters Pop Up */


const filterBTN = document.getElementById("filterBTN")
const popUp = document.getElementById("filterPopUp")

filterBTN.addEventListener("click", () => {
    if(!popUp.classList.contains("showPopup")){
        popUp.classList.add("showPopup")
    }
    else if(popUp.classList.contains("showPopup")){
        popUp.classList.remove("showPopup")
        
    }
  
})



const closeFilters = document.getElementById("closeFilters")


closeFilters.addEventListener("click", () => {
    popUp.classList.remove("showPopup")
})












