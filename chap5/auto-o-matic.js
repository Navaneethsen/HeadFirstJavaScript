/**
 * Created by Navaneeth Sen on 2015/06/21.
 */

function makeCar()
{
    var makes = ["Chevy", "GM", "Fiat", "Sen Motors", "Tucker"];
    var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
    var years = [1955, 1957, 1948, 1954, 1961];
    var colors = ["red", "blue", "tan", "yellow", "white"];
    var convertible = [true, false];
    var passengers = [2, 4, 5, 6];

    var makeIdx = Math.floor(Math.random() * 5);
    var modelIdx = Math.floor(Math.random() * 5);
    var yearIdx = Math.floor(Math.random() * 5);
    var colorIdx = Math.floor(Math.random() * 5);
    var convertibleIdx = Math.floor(Math.random() * 2);
    var passengerIdx = Math.floor(Math.random() * 4);

    var car =
    {
        "make": makes[makeIdx],
        "model": models[modelIdx],
        "year": years[yearIdx],
        "color": colors[colorIdx],
        "passengers": passengers[passengerIdx],
        "convertible": convertible[convertibleIdx],
        "started": false,
        "drive": function drive()
        {
            if (this.started)
            {
                switch (this.model) {
                    case "Cadillac":
                        alert("shoom.. shoomm..");
                        break;
                    case "500":
                        alert("zoom.. zoomm..");
                        break;
                    case "Bel-Air":
                        alert("croom.. croomm..");
                        break;
                    case "Taxi":
                        alert("kroom.. kroomm..");
                        break;
                    case "Torpedo":
                        alert("foom.. foomm..");
                        break;
                    default:
                        alert("broom.. broomm..");
                        break;
                }
            }
            else
            {
                alert("You need to start the engine first.");
            }
        }
    };

    return car;
}

function displayCar(car)
{
    console.log("Your new car is a " + car.year + " " + car.make + " " + car.model);
}

function startCar(car)
{
    car.started = true;
}

function stopCar(car)
{
    car.started = false;
}

var carToSell = makeCar();
displayCar(carToSell);

carToSell.drive();
startCar(carToSell);
carToSell.drive();
stopCar(carToSell);
