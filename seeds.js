const mongoose = require('mongoose');
const User = require('./models/user');

//. DB - test //
//. COLLECTION - users //

mongoose.connect('mongodb+srv://Nalkaa:nalkaa@cluster0.5sqny.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to DB!'))
    .catch(error => console.log(error.message));

const seedUsers = [
    {
        name: 'Arpan',
        email: 'arpan_tyagi@gmail.com',
        credits: 20000
    },
    {
        name: 'Rohit',
        email: 'rohit15raman@yahoo.com',
        credits: 9000
    },
    {
        name: 'Sarthak',
        email: 'sarthak32@gmail.com',
        credits: 10500
    },
    {
        name: 'Shaurya',
        email: 'shaurya170410@yahoo.com',
        credits: 8600
    },
    {
        name: 'Saurav',
        email: 'Saurav2050@gmail.com',
        credits: 7500
    },
    {
        name: 'Aman',
        email: 'aman2305@yahoo.com',
        credits: 7900
    },
    {
        name: 'Manish',
        email: 'manish09@gmail.com',
        credits: 3000
    },
    {
        name: 'Sanchit',
        email: 'sanchitbajpai@yahoo.com',
        credits: 2100
    },
    {
        name: 'Saurabh',
        email: 'saurabh_kothari@gmail.com',
        credits: 6500
    },
    {
        name: 'Harsh',
        email: 'hvd@gmail.com',
        credits: 7300
    }
]


function seedDB() {
    User.remove({}, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("removed users!");
    });
    seedUsers.forEach(function (seed) {
        User.create(seed, function (err, user) {
            if (err) {
                console.log(err)
            } else {
                console.log("added a user");
            }
        });
    });
}

module.exports = seedDB;