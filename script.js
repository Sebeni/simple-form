let checkbox = document.getElementById("pet-check");
let hiddenDiv = document.getElementById("pet-select-container");
let form = document.getElementById("save-form");


checkbox.addEventListener("change", (event)=> {
    if(checkbox.checked) {
        hiddenDiv.style.display = "block";
    } else {
        hiddenDiv.style.display = "none";
    }
});

form.addEventListener("submit", (event)=> {
    event.preventDefault();
    let name = form.elements[0].value;
    let address = form.elements[1].value;
    let age = form.elements[2].value;
    let petText = "No pets";
    if(checkbox.checked) {
        petText = document.getElementById("pet-select").value;
    }
    
    if(petText == "Dog") {
        alert("Sorry, our dog capacity is full :(")
        return;
    }

    alert(`Booking saved! 
    Info:
    name: ${name}
    address: ${address}
    age: ${age}
    pet: ${petText}`)
})