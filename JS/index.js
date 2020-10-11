//Front end
//slide show
var slideshows = document.querySelectorAll('[data-component="slideshow"]');
  
  // Apply to all slideshows defined
  slideshows.forEach(initSlideShow);

  function initSlideShow(slideshow) {

    var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`); // Get an array of slides

    var index = 0, time = 5000;
    slides[index].classList.add('active');  
    
    setInterval( () => {
      slides[index].classList.remove('active');
      
      //Go over each slide incrementing the index
      index++;
      
      //  restart the index to show the first slide and start again
      if (index === slides.length) index = 0; 
      
      slides[index].classList.add('active');

    }, time);
  }


//Back end code to determine what happens when the oderform is completed.
//creating a constructor function to pic the pizza options
function Specification(pizzatype, pizzasize, pizzacrust, pizzatopping) {
    this.pizzatype = pizzatype;
    this.pizzasize = pizzasize;
    this.pizzacrust = pizzacrust;
    this.pizzatopping = pizzatopping;
}

// prototype of the Specification contructor to specify the message containing the specification information given by the customer.
Specification.prototype.fullSpecification = function () {
    return this.pizzatype + " with the topping of " + this.pizzatopping + " and " + this.pizzacrust + " as crust.";
};

//creating a constructor function for variables that will determine the price of the ordered pizza.
function Totalprice(pizzaprice, pizzaquantity, pizzadelivery) {
    this.pizzaprice = pizzaprice;
    this.pizzaquantity = pizzaquantity;
    this.pizzadelivery = pizzadelivery;
}
//creating a prototype for the calculation of the total price of the ordered pizza.
Totalprice.prototype.finalTotalprice = function () {
    return this.pizzadelivery + this.pizzaprice * this.pizzaquantity ;
};

// creating variables to store the price of Pizza according to the size and the delivery fee.
var sizePrice = [1500, 900, 750]
var deliverPrices = [0, 200];
$(document).ready(function () {
    
    $('form#orderform').submit(function (event) {
        event.preventDefault();
        // variables for picking the inputs from the form according to the ids
        var pizzaType = $('#pizzatype').val();

        var pizzaSize = parseInt($('#pizzasize').val());

        var pizzaCrust = $('#pizzacrust').val();

        var pizzaTop = $('#pizzatop').val();

        var pizzaquantity = parseInt($('#pizzaquantity').val());

        var deliveryoption = parseInt($('#deliveryoption').val());
        var pizzaprice = sizePrice[pizzaSize - 1];
        var pizzaDeliveryCost = deliverPrices[deliveryoption - 1];


        //creating new function constructors
        newSpecification = new Specification(pizzaType, pizzaSize, pizzaCrust, pizzaTop);
        newTotalprice = new Totalprice(pizzaprice, pizzaquantity, pizzaDeliveryCost);

        //condition for printing the information of the ordered Pizza
        //condition according to the delivery option.

        // If the delivery option is to come pick the Pizza 
        if (deliveryoption===1){
        alert("Your order is: " + newSpecification.fullSpecification() + ".Click Ok to view your full fee.");
        alert("your bill is: " + newTotalprice.finalTotalprice() + ".");
       
        }else{
            //If the delivery option is for the Pizza to be delivered to them.
            if(deliveryoption===2){
                var place= prompt("Enter where you want your pizza to be delivered");
                alert("Your order has been received and it will be delivered at " + place +" . Click Ok to view your full ordered pizza.");
                alert("Your order is: " + newSpecification.fullSpecification() + ".Click Ok to view your full fee.");
                alert("your bill is: " + newTotalprice.finalTotalprice() + ".Your pizza will be delevered.");
            }
        }
        

    });

