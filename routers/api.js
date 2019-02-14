const DB = require ('../models')
const bodyParser = require('body-parser')

module.exports = app => {
    app.use(bodyParser.json())

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

    });

    app.post('/api/createUser', (req, res) => {
        console.log("Create the user.")
        //console.log(req);
        //console.log(res);
        console.log(req.body);
        DB.User.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log("Goty an error");
                console.log(err);
                res.status(422).json(err);
            });
    })

    app.post('/api/createUserProfile', (req, res) => {
        console.log("Create the user Profile.")
    
        console.log(req.body);
        DB.UserProfile.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log("Got  an error saving using profile");
                console.log(err);
                res.status(422).json(err);
            });
    })

    app.post('/api/login', (req, res) => {
        console.log("login the user")
        const body = req.body;
        console.log(body);

        DB.User.find ({email: body.email, password: body.password}, function (err, results) {
            if (!err) {
                if (results.length == 0 ){
                    console.log("badlogin");
                    return res.send ({result: "badlogin"});                    
                }
                else {
                    DB.UserProfile.find({email: body.email}, function (profErr, profResults) {
                        if (profResults.length > 0) {
                            console.log("goodlogin");
                            return res.send ({result:"goodlogin", profile:profResults[0], user: results[0]})      
                        }
                        else {
                            console.log("noprofil");
                            return res.send ({result:"noprofile"})
                        }
                    })
                }
            }
            else {
                return res.send(err)
            }
        });        
    });


    app.post('/api/search', (req, res) => {
        console.log("search for:")
        const body = req.body;
        console.log(body);

        DB.UserProfile.find (body, function (err, results) {
            if (!err) {
               
                let emails = []
                results.forEach(it => emails.push(it.email));
                DB.User.find({email:emails}, function(userErr, userResults) {
                    return res.send(userResults)
                });
            }
            else {
                return res.send(err)
            }
        });        
    });

    app.get('/api/getprofile', (req, res) => {
        console.log("search for:")
        const email = req.query.email;
        console.log(email);

        DB.UserProfile.find ({email: email}, function (err, results) {
            if (!err) {
                if (results.length > 0) {
                    DB.User.find ({email: email}, function (err, userResults) {
                       res.send({profile: results[0], user: userResults[0]})
                    });
                }
                else {
                    res.send({result: "noprofile"})
                }
            }
            else {
                return res.send(err)
            }
        });        
    });


}