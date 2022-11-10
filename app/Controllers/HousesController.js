import { appState } from "../AppState.js";
import { House } from "../Models/House.js"
import { housesService } from "../Services/HousesService.js"
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


function _drawHouses() {
    let template = ''
    appState.houses.forEach(house => template += house.CardTemplateHouse)
    setHTML('listings', template)
    setHTML('listing-form', House.GetHouseFormTemplate())
}

function _drawActiveHouse() {
    setHTML('details', appState.activeHouse.ActiveHouseTemplate)
}


export class HousesController {

    constructor() {
        console.log("your house  controller is working")
        appState.on('houses', _drawHouses)
        appState.on('activeHouse', _drawActiveHouse)
    }

    async removeCar(houseID) {
        if (await Pop.confirm('Are you sure want to delete this house?')) {
            housesService.removeHouse(HouseId)

        }
    }

    createHouse() {
        window.event.preventDefault()
        let form = window.event.target
        let formData = getFormData(form)
        console.log(formData);
        housesService.createHouse(formData)
    }

    setActiveHouse(houseID) {
        housesService.setActiveHouse(houseID)
    }

    showHouses() {
        _drawHouses()
    }
}


