var ambassador = {
    make: "Sen Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341
};

var cadillac = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892
};

var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000
};

var chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021
};


var preEqual = function(object)
{
    if (object.year < 1955 || object.mileage > 10000)
    {
        return false;
    }
    else
    {
        return true;
    }
};

var cars = [ambassador, cadillac, fiat, chevy];
var idx = 0;
while(idx < cars.length)
{
    var worthALook = preEqual(cars[idx]);
    if (worthALook)
    {
        console.log("You gotta check out this " + cars[idx].make + " " + cars[idx].model);
    }
    else
    {
        console.log("You should really pass on the " + cars[idx].make + " " + cars[idx].model);
    }
    idx++;
}