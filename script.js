//set variables / Array
let user;
let seats = [, false, false, false, false, false, false, false, false, false, false];
let firstclass = 1;
let economy = 6;
let client = 0;

//Function
function bookingSeat() {
    //keep program running till client = 10 
    if (client <= 10)
    // While firstclass and economy is not equal to 0 get user ID from form
        while ((firstclass != 0) && (economy != 0)) {
            user = parseInt(document.getElementById("form").user.value);
             //if user = 1 see if firstclass is <= to array
            if (user == 1) {
                // 5 seats to first class
                if (firstclass <= 5 && seats[firstclass] == 0) {
                    //see if they want another booking 
                    let check = confirm("You have booked first class, seat " + firstclass + ".  do you want to make another booking?");
                    if (check) {
                        seats[firstclass] - 1 //removes seat from first firstclass
                        ++client; //add client to variable
                        ++firstclass; //adds seat to first class
                    }
                    else {
                       alert("Flight leaves in 3 hours");
                        break;
                    }
                } 
                //If firstclass is full and economy still has seats, Ask if they would like a seat in economy 
                else if (firstclass > 5 && economy <= 10) {
                    let con = confirm("First class is full. Would you like a seat in the economy class?");

                    if (con) {
                        //see if they want another booking
                        confirm("You have booked economy class, seat " + economy + ". do you want to make another booking?");
                        seats[economy] - 1; //removes seat from economy class
                        ++client; //add client to variable
                        ++economy; //adds seat to economy class
                    }
                    else {
                        alert("Flight leaves in 3 hours");
                        break;
                    }
                }                    
            } 

            else if (user == 2) {
                //<= 10 is economy 
                if (economy <= 10 && seats[economy] == 0) {
                    confirm("You have booked economy class, seat " + economy + ".  do you want to make another booking?");
                    seats[economy] - 1; // Removes seat from economy 
                    ++client; //add client to variable 
                    ++economy;//adds seat to first class
                }
               
                else if (economy > 10 && firstclass <= 5) {
                    //check if they would like a seat in first class 
                    let con = confirm("Economy is full. Would like a seat in first class?");

                    if (con) {
                       confirm("You have booked  first class, seat " + firstclass + ". do you want to make another booking?");
                        seats[firstclass] - 1; //Removes seat from first class
                        ++client; // Add client to variable
                        ++firstclass; // adds seat to first class
                    }

                    else {
                        alert("Flight leaves in 3 hours");
                    }
                }
            }


        } 
}
