import { generateId } from "../Utils/generateId.js";

export class Job {

    constructor(data) {
        this.id = generateId()
        this.company = data.company
        this.title = data.title
        this.salary = data.salary
        this.hours = data.hours
        this.prerequisites = this.prerequisites.data
        this.img = data.img
        this.description = data.description
    }

    get CardTemplateJob() {
        return /*html*/ `
    <div class="col-12 col-md-4 p-4">
        <div class="card">
          <img src="${this.img}" class="card-img-top"
            alt="${this.name}">
          <div class="card-body">
            <h5 class="card-title d-flex justify-content-between mb-2">
              <span>${this.company}</span>
              <span>${this.title}</span>
              <span>${this.hours}</span>
            </h5>
            <div class="d-flex justify-content-between">
            <button onclick="app.jobsController.setActiveJob('${this.id}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            See Details
            </button>
            <button onclick="app.jobsController.removeJob('${this.id}')" title="Delete job!" class="btn btn-danger">
              <i class="mdi mdi-delete"></i>
            </button>
          </div>
        </div>
        </div>
        </div>
    `
    }

    get ActiveJobTemplate() {
        return `
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">${this.company}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <h5>
       
        </h5>
          <img src="${this.img}" alt="job" class="img-fluid">
          <div>Address: ${this.title}</div>
          <b>$${this.salary}</b>
          <div>Address: ${this.hours}</div>
          <div>Address: ${this.prerequisites}</div>
          <p>Description: ${this.description}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
        `
    }

    static GetJobFormTemplate() {
        return /*html*/ `
<form onsubmit="app.jobsController.createJob()">
    <div class="form-floating mb-3">
      <input required type="text" minlength="3" class="form-control" id="job-company" placeholder="Company"
        name="company">
      <label for="job-company">Company</label>
    </div>
    <div class="form-floating mb-3">
      <input required type="text" class="form-control" id="job-title" placeholder="Job Title"
        name="title">
      <label for="job-title">Title</label>
    </div>
    <div class="form-floating mb-3">
      <input required type="text" class="form-control" id="job-salary" placeholder="job-salary"
        name="salary">
      <label for="job-salary">Salary</label>
    </div>
    <div class="form-floating mb-3">
      <input required type="text" class="form-control" id="job-hours" placeholder="Job Hours"
        name="hours">
      <label for="job-hours">Hours</label>
    </div>
    <div class="form-floating mb-3">
      <input required type="text" class="form-control" id="job-prerequisites" placeholder="Job Prerequisites" name="prerequisites">
      <label for="job-prerequisites">Prerequisites</label>
    </div>
    <div class="form-floating mb-3">
      <input required type="url" class="form-control" id="job-img" placeholder="Job Image" name="img">
      <label for="Job-img">Image</label>
    </div>
    <div class="form-floating">
      <textarea class="form-control" placeholder="Leave a description here" id="job-description"
        name="description">Description</textarea>
      <label for="job-description">Description</label>
    </div>
    <button type="submit" class="btn btn-success mt-3">Submit</button>
    <button type="reset" class="btn btn-outline-danger mt-3">Reset</button>
  </form>
`
    }



}