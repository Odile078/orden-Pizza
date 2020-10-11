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