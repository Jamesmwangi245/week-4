
$('.btn-click').click(function () {


    $(".imageshow").toggle()
});
function getVal(){
    var pizzaSize = document.getElementById("size").value;
    var pizzaTopping = document.getElementById("toppings").value;
    var pizzaCrust = document.getElementById("crust").value;
    var pizzaNumber = document.getElementById("number").value;
    var num = parseInt(pizzaNumber);
    
    if(pizzaSize == "large"){
      var sizes = 3500;
    }
    else if(pizzaSize == "medium"){
      var sizes = 2500;
  
    }
    else if(pizzaSize == "small"){
      var sizes = 1500;
  
    }
    else{
      alert("enter correct value");
  
    }
    
    
    
    if(pizzaTopping == "ham"){
      var topping = 300;
    }
    else if(pizzaTopping == "BBQ-chicken"){
      var topping = 350;
  
    }
    else if(pizzaTopping == "bacon"){
      var topping = 300;
  
    }
    else if(pizzaTopping == "beef"){
      var topping = 350;
  
    }
    else if(pizzaTopping == "blue-cheese"){
      var topping = 300;
  
    }
    else{
      alert("enter correct value");
    }
  
    if(pizzaCrust == "brie"){
      var crust = 250;
    }
    else if(pizzaCrust == "manchengo"){
      var crust = 250;
  
    }
    else if(pizzaCrust == "flatbread"){
      var crust = 300;
  
    }
    else if(pizzaCrust == "parmessan"){
      var crust = 300;
  
    }
    else if(pizzaCrust == "carrots"){
      var crust = 250;
  
    }
    else{
      alert("enter correct value");
    }
  
    var total = topping + crust + sizes;
    
    var final = num*total;
  
    alert("You ordered: " + pizzaSize +" Pizza, with " +pizzaTopping + " topping and " +pizzaCrust + " crust. The number of Pizzas is: " +pizzaNumber + ". Your Total bill is: " +final + "/=");
  
  
    var ans = document.getElementById("del").checked;
  
    if(ans == true){
      prompt("Please enter delivery location and phone number: ");
    }
    else{
        alert("there will be no delivery for you.");
    }
  
  
  
  
    var deliv = document.getElementById("delivery").value;
   
    if(deliv == "within" && ans == true){
      deliv = 200;
      alert("Your delivery cost is: 200/=");
    }
    else if(deliv == "5km after" && ans == true){
      deliv = 300;
      alert("Your delivery cost is: 300/=");
      
    }
    else if(deliv == "beyond 5km" && ans == true){
      deliv = 0;
      alert("We are sorry we do not deliver there.");
    }
    else{
  
    }
    var totalWithDelivery = final + deliv;
    alert("Your final cost with delivery is: " +totalWithDelivery +"/= we will call you through the number you entered. If you did not enter phone number please reach us through the number at the bottom of the page.");
  }

  Terms
  Privacy
  Security
  Status
  

