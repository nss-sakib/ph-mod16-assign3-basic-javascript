// https://github.com/nss-sakib/ph-mod16-assign3-basic-javascript

//1.Convert kilometer into meter
function kilometerToMeter(distanceKm) {
    if (typeof distanceKm != "number") {
        //Checking user input is numerical or not
        return "Enter a numerical value.";
    }
    if (distanceKm >= 0) {
        var distanceM = distanceKm * 1000;   //1 kilometer = 1000 meter
        return distanceM;
    }
    else
        return "Distance never be negative! Enter a positive value.";
}

//2.Calculate total budget for various item
function budgetCalculator(watch, phone, laptop) {
    if (typeof watch != "number" || typeof phone != "number" || typeof laptop != "number") {
        //Checking user input is numerical or not
        return "Enter numerical value for each item.";
    }
    if (watch >= 0 && phone >= 0 && laptop >= 0) {
        if (Math.round(watch) == watch && Math.round(phone) == phone && Math.round(laptop) == laptop) {
            var watchPrice = watch * 50;    //Each watch price 50 taka
            var phonePrice = phone * 100;   //Each phone price 100 taka
            var laptopPrice = laptop * 500; //Each laptop price 500 taka
            var totalPrice = watchPrice + phonePrice + laptopPrice;
            return totalPrice;
        }
        else {
            return "Number of each item should be integer!"
        }
    }
    else {
        return "Number of each item should be positive!";
    }
}

//3.Calculate total cost for hotel days
function hotelCost(day) {
    if (typeof day != "number") {
        //Checking user input is numerical or not
        return "Enter a numerical value.";
    }
    if (day >= 0 && Math.round(day) == day) {
        var cost;
        if (day <= 10) {
            cost = day * 100;   //100 taka per day for first 10 days
        }
        else if (day <= 20) {
            cost = 10 * 100 + (day - 10) * 80;  //80 taka per day for second 10 days
        }
        else {
            cost = 10 * 100 + 10 * 80 + (day - 20) * 50; //50 taka per day after first 20 days
        }
        return cost;
    }
    else {
        return "Number of days must be a positive integer!"
    }
}

//4.Find the most lengthy friend name
function megaFriend(friendList) {
    //Checking user input is an array or not
    if (Array.isArray(friendList)) {
        var maxLength = 0;
        var maxLengthName;
        for (var i = 0; i < friendList.length; i++) {
            if (typeof friendList[i] != "string") {
                //Checking if there any friend name is not of string type
                return "Check all of your friends name again. Every name must be of string type!";
            }
            //Checking if there any friend name is empty
            if (friendList[i].length != 0) {
                var splittedName = friendList[i].split("");
                for (var j = 0; j < splittedName.length; j++) {
                    if (splittedName[j] >= "0" && splittedName[j] <= "9") {
                        //Checking if there any friend name containing numerical character
                        return "Check all of your friends name again. None should contain numerical character!";
                    }
                }
                if (friendList[i].length > maxLength) {
                    maxLength = friendList[i].length;
                    maxLengthName = friendList[i];
                }
            }
            else {
                return "Check all of your friends name again. None should be null!";
            }
        }
        return maxLengthName;
    }
    return "Enter your friend list as an array.";
}
