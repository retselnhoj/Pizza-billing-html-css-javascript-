document.getElementById("pizzaForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var size = document.getElementById("size").value.toUpperCase();
    var addPepperoni = document.getElementById("pepperoni").value.toUpperCase();
    var addCheese = document.getElementById("cheese").value.toUpperCase();
    var bill = 0;
    var sizePrices = {'S': 15, 'M': 20, 'L': 25};
    var pepperoniPrices = {'Y': 2, 'N': 0};
    var cheesePrices = {'Y': 1, 'N': 0};

    if (size in sizePrices) {
        bill += sizePrices[size];
    } else {
        // If invalid size input
        alert("Invalid pizza size. Please choose S, M, or L.");
        return;
    }

    if (addPepperoni in pepperoniPrices) {
        bill += pepperoniPrices[addPepperoni];
    } else {
        // If invalid pepperoni input
        alert("Invalid pepperoni option. Please choose Y or N.");
        return;
    }

    if (addCheese in cheesePrices) {
        bill += cheesePrices[addCheese];
    } else {
        // If invalid cheese input
        alert("Invalid extra cheese option. Please choose Y or N.");
        return;
    }

    var finalBillMessage = "Your final bill is: $" + bill;
    document.getElementById("finalBill").innerText = finalBillMessage;
    document.getElementById("finalBill").style.display = "block";
});
