// the fetch api works by passing url as first property and and OPTIONAL second property such as GET and POST. fetch is promise based

// this is creating a new user to the api. 
fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'User 1'
    })
})
    .then(res => { 
        return res.json()
    })
    .then(data => console.log(data))
    .catch(err => console.log(err))