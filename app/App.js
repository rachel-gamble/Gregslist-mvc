import { CarsController } from "./Controllers/CarsController.js";
// FIXME Step 6: register your controller and get your console log on your web page
import { HousesController } from "./Controllers/HousesController.js"

class App {
  carsController = new CarsController()
  housesController = new HousesController()
}

window["app"] = new App();
