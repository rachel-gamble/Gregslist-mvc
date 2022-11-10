import { appState } from "../AppState.js"
import { Job } from "../Models/Job.js";
import { jobsService } from "../Services/JobsService.js"
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";



function _drawJobs() {
    // grab all of my cases from appState
    let template = ''
    appState.jobs.forEach(job => template += job.CardTemplateJob)
    setHTML('listings', template)
    setHTML('listing-form', Job.GetJobFormTemplate())
}

function _drawActiveJob() {
    setHTML('details', appState.activeJob.ActiveJobTemplate)
}

export class JobsController {

    constructor() {
        console.log("your job controller is working")
        appState.on('jobs', _drawJobs)
        appState.on('activeJob', _drawActiveJob)
    }

    async removeJob(jobId) {
        if (await Pop.confirm('Are you sure you want to delete this job?')) {
            jobsService.removeJob(jobId)
        }
    }

    createJob() {
        window.event = window.event.target
        let form = window.event.target
        let formData = getFormData(form)
        console.log(formData);
        jobsService.createJob(formData)
    }

    setActiveJob(jobId) {
        jobsService.setActiveJob(jobId)
    }

    showJobs() {
        _drawJobs()
    }


}