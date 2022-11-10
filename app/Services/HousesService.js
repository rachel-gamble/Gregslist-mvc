import { appState } from "../AppState.js";
import { House } from "../Models/House.js";
import { saveState } from "../Utils/Store.js";


export class HouseService {
    setActiveHouse(houseId) {
        let foundHouse = appState.houses.find(h => h.id == houseId)
        console.log(foundHouse);
        appState.activeHouse = foundHouse
    }
    createHouse(formData) {
        let newHouse = new House(formData)
        console.log(newHouse);
        appState.houses = [...appState.houses, newHouse]
        saveState('houses', appState.houses)
    }
    removeCar(houseId) {
        // NOTE test that things are talking to each other
        // console.log("it's the car service", carId);
        // NOTE give me a new array of cars, where all of the cars Id's do not match the Id I passed down
        let filteredArray = appState.houses.filter(h => h.id != houseId)
        appState.houses = filteredArray
        console.log('New array in AppState:', appState.houses);
        saveState('houses', appState.houses)
    }

}

export const housesService = new HouseService()