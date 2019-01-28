const DB = require ('../models')

module.exports = app => {

    app.get ('/api/usersList', (req, res) => {
        console.log("Users data.")
        DB.User.deleteMany({}, function(err) {
            if (err) {
                console.log(err)
            } else {
                for (let x = 0; x < 10; x++) {
                    DB.User.create ({
                    firstName: "One of Many" + x,
                    lastName: "Customers" + x,
                    userName: "misterRight" + x,
                    password: "secret" + x,
                    email: "mrRight@email.com" + x
                    });
                }
                res.json('Users Complete');
            }
        });

    });


    app.get ('/api/users', (req, res) => {
        DB.User.find({}).then(records => res.json(records));

    })

}