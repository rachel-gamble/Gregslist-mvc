import { CarsController } from "./Controllers/CarsController.js";
// FIXME Step 6: register your controller and get your console log on your web page
import { HousesController } from "./Controllers/HousesController.js"
import { JobsController } from "./Controllers/JobsController.js";

class App {
  carsController = new CarsController()
  housesController = new HousesController()
  jobsController = new JobsController()
}

window["app"] = new App();
