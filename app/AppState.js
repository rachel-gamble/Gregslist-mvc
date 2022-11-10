import { Car } from "./Models/Car.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"
import { House } from "./Models/House.js"

// FIXME Step 2: set up a place to store our data

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  // NOTE this does denote what is stored in this collection, but it also gives us intellisense in our code
  /** @type {import('./Models/Car').Car[]} */
  cars = loadState('cars', [Car])
  /** @type {import('./Models/Car').Car|null} */
  activeCar = null
  /** @type {import('./Models/House').House[]} */
  houses = loadState('houses', [House])

  /** @type {import('./Models/House').House|null} */
  activeHouse = null

  houses = [
    new House({
      name: "Cherry Wood Ln 5 Bed 3.5 Bath",
      price: "2,700 Monthly",
      address: "367 Cherry Wood Ln, Boise",
      bedrooms: 5,
      bathrooms: 3.5,
      year: 1986,
      img: "https://images.craigslist.org/00F0F_aeS5sF8Dxxsz_0hr0bC_600x450.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend lorem at sapien scelerisque ullamcorper. Aliquam maximus at sem id feugiat. Aenean ullamcorper odio a leo tincidunt, sit amet vulputate massa fringilla. Vestibulum porttitor, tortor volutpat dignissim vehicula, lorem tellus ultricies quam, eu interdum purus enim in felis.",

    }),
    new House({
      name: "Safewater 2 Bed 2 Bath Townhome for Rent",
      price: "1,800 monthly",
      address: "7800 Safewater Dr, Meridian",
      bedrooms: 2,
      bathrooms: 2,
      year: 2007,
      img: "https://images.craigslist.org/00L0L_erXVeoZ8I5hz_0CI0pO_600x450.jpg",
      description: "Vestibulum scelerisque mauris sem, sit amet faucibus massa tincidunt vel. Praesent mi magna, ullamcorper ornare metus a, maximus sagittis diam. Etiam fringilla convallis velit non sodales."

    })
  ]

}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})