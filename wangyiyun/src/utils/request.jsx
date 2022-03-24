const headers = new Headers({
    "Accept": "application/json",
    "Content-Type": "application/json"
})
const get = (url) => {
    return fetch(url, {
        method: "GET",
        headers: headers
    }).then(response => {
        handleResponse(url, response)
    }).catch(err => {
        console.error(`request failed url=${url},message=${err}`)
        return Promise.reject({ error: { message: "request fail" } })
    })
}
const post = (url, data) => {
    return fetch(url, {
        method: "POST",
        headers: headers,
        body: data
    }).then(response => {
        handleResponse(url, response)
    }).catch(err => {
        console.error(`request failed url=${url},message=${err}`)
        return Promise.reject({ error: { message: "request fail" } })
    })
}
const handleResponse = (url, response) => {
    if (response.status === 200) {
        return response.json()
    } else {
        console.error(`request failed url=${url}`)
        return Promise.reject({ error: { message: "request fail due to server error" } })
    }
}

export { get, post }