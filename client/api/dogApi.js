import request from 'superagent'

const apiDogUrl = '/api/dogs/'


export function getDogs() {
    return request
        .get(apiDogUrl)
        .then(res => res.body)
}

export function getDog(id) {
    return request
        .get(apiDogUrl + id)
        .then(res => res.body)
}

export function addDog(dog) {
    // console.log(dog)
    return request
        .post(apiDogUrl)
        .send(dog)
        .then(res => 
            res.body
        )
}