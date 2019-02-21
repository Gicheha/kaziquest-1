import { API_HOST } from '../config'

//postJob function takes in formData passed in from where it's
//being called. 
export const postJob = formData => {

    fetch(`${API_HOST}/addjob`, {
        method: "POST",
        headers: {
            Authorization: "Bearer token"
        },
        body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(response => setToken(response))
    .catch(err => console.error(err))
}

//setToken assumes the data passed in from reponse
//is a token. it the sets it in sessionstorage with key={"jwt"}
export const setToken = (data) => {
    sessionStorage.setItem('jwt', data)
}