import { appState } from "../AppState.js"
import { Job } from "../Models/Job.js"
import { saveState } from "../Utils/Store.js"



export class JobService {
    setActiveJob(jobId) {
        let foundJob = appState.jobs.find(h => h.id == jobId)
        console.log(foundJob)
        appState.activeJob = foundJob
    }

    createJob(formData) {
        let newJob = new Job(formData)
        console.log(newJob);
        appState.jobs = [...appState.jobs, newJob]
        saveState('jobs', appState.jobs)
    }
    removeJob(jobId) {
        let filteredArray = appState.jobs.filter(j => j.id != jobId)
        appState.jobs = filteredArray
        console.log('New array in  Appstate:', appState.jobs);
        saveState('jobs', appState.jobs)
    }
}



export const jobsService = new JobService()