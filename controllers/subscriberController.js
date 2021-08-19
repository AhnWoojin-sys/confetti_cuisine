const Subscribe = require("../models/subscriber");

exports.getAllSubscribers = (req, res) => {
    Subscribe.find({})
    .exec()
    .then((subscribers)=>{
        res.render('subscribers', {
            subscribers: subscribers
        });
    })
    .catch((error)=>{
        console.log(error.message);
        return [];
    })
    .then(()=>{
        console.log("promise complete");
    })
}

exports.getSubscriberPage = (req, res) => {
    res.render("contact")
}

exports.saveSubscriber = (req, res) => {
    let newSubscriber = new Subscribe({
        name: req.body.name,
        email: req.body.email,
        zipCode: req.body.zipCode
    });
    newSubscriber.save()
    .then(() => {
        res.render("thanks");
    })
    .catch((error) => {
        res.send(error);
        console.log(error);
    });
}