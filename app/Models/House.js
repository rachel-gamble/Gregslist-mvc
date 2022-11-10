import { generateId } from "../Utils/generateId.js"

export class House {
  //NOTE - name, address, cost, size, bedroom in title
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.price = data.price
    this.address = data.address
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.year = data.year
    this.img = data.img
    this.description = data.description
  }

  get CardTemplateHouse() {
    return /*html*/ `
        <div class="col-12 col-md-4 p-4">
        <div class="card">
          <img src="${this.img}" class="card-img-top"
            alt="${this.name}">
          <div class="card-body">
            <h5 class="card-title d-flex justify-content-between mb-2">
              <span>${this.name}</span>
              <span>${this.price}</span>
            </h5>
            <div class="d-flex justify-content-between">
            <button onclick="app.housesController.setActiveHouse('${this.id}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            See Details
            </button>
            <button onclick="app.housesController.removeHouse('${this.id}')" title="Delete house!" class="btn btn-danger">
              <i class="mdi mdi-delete"></i>
            </button>
          </div>
        </div>
        </div>
        </div>
        `
  }

  get ActiveHouseTemplate() {
    return `
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">${this.name}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <h5>
       
        </h5>
          <img src="${this.img}" alt="house" class="img-fluid">
          <b>$${this.price}</b>
          <p>Description: ${this.description}</p>
          <div>Address: ${this.address}</div>
          <div>Bedrooms: ${this.bedrooms}</div>
          <div>Bathrooms: ${this.bathrooms}</div>
          <div>Year: ${this.year}</div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    `
  }

  static GetHouseFormTemplate() {
    return /*html*/ `
    <form onsubmit="app.housesController.createHouse()">
    <div class="form-floating mb-3">
      <input required type="text" minlength="3" class="form-control" id="house-name" placeholder="House Title"
        name="name">
      <label for="house-name">Title</label>
    </div>
    <div class="form-floating mb-3">
      <input required type="number" class="form-control" id="house-price" placeholder="House Price"
        name="price">
      <label for="house-price">Price</label>
    </div>
    <div class="form-floating mb-3">
      <input required type="text" class="form-control" id="house-address" placeholder="House Address"
        name="address">
      <label for="house-address">Address</label>
    </div>
    <div class="form-floating mb-3">
      <input required type="text" class="form-control" id="house-bedrooms" placeholder="House Bedrooms"
        name="bedrooms">
      <label for="house-bedrooms">Bedrooms</label>
    </div>
    <div class="form-floating mb-3">
      <input required type="url" class="form-control" id="house-img" placeholder="House Image" name="img">
      <label for="House-img">Image</label>
    </div>
    <div class="form-floating mb-3">
      <input required type="number" class="form-control" id="house-year" placeholder="House Year" name="year">
      <label for="house-year">Year built</label>
    </div>
    <div class="form-floating mb-3">
      <input required type="number" class="form-control" id="house-bathrooms" placeholder="House Bathrooms"
        name="bathrooms">
      <label for="house-bathrooms">Bathrooms</label>
    </div>
    <div class="form-floating">
      <textarea class="form-control" placeholder="Leave a description here" id="house-description"
        name="description"></textarea>
      <label for="car-description">Description</label>
    </div>
    <button type="submit" class="btn btn-success mt-3">Submit</button>
    <button type="reset" class="btn btn-outline-danger mt-3">Reset</button>
  </form>
    
    `
  }
}