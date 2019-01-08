// const Note = require('../models/Note')
// const Tool = require('../models/Tool')
const User = require('../models/User')

l

User.deleteMany({}).then(() => {
    User.create(newUsers).then(users => {
        console.log('Saved Users', users)
        res.render(users)
    })
})