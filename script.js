var number;
var movie;
var count = 0;


function getNumber(){
    number = document.getElementById("GuestNumbs").value;
    console.log(number);
}

function getMovie(){
    movie = document.getElementById("movie").value;
    console.log(movie);
}

function changeSeats(element){
    
    if(count < Number(number) && element.classList.contains("seat")){
        element.classList.toggle("seat2");
        element.classList.toggle("seat");
        console.log("Seat Changed");
        count +=1;
        console.log(count);
    } else if(element.classList.contains("seat2")){
        element.classList.toggle("seat");
        element.classList.toggle("seat2");
        console.log("Seat Returned");
        count -=1;
    }
    
}

function displayResponse(){
    let text = "";
    if(count <= Number(number)){
        text = "You have chosen "+ count + " seats out of "+ number + ".\nEnjoy " + movie +"!!! Don't forget the popcorn :)";
    } else {
        text = "Choose less seats";


    }
    document.getElementById("response").innerHTML = text;

}
