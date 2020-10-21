
const router = require("express").Router();
let Grocery = require("../models/grocery.model");

//get all patients
router.route("/").get((req, res) => {
  Grocery.find()
    .then((grocery) => res.json(grocery))
    .catch((err) => res.status(400).json("Error: " + err));
});

//add a patient - won't add
router.route("/add").post((req, res) => {
  const Name = req.body.Name;
  const Quantity = req.body.Quantity;
  const Unit = req.body.Unit;
  const From = req.body.From;
  const Datetime = req.body.Datetime;
  
  const newGrocery = new Grocery({
    Name,
    Quantity,
    Unit,
    From,
    Datetime,
  
    
  });

  newGrocery
    .save()
    .then(() => res.json("Grocery added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route('/:id').delete((req, res) => {
  Grocery.findByIdAndDelete(req.params.id)
    .then(() => res.json('Grocery deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Grocery.findById(req.params.id)
    .then(grocery => {
      grocery.Name = req.body.Name;
      grocery.Quantity = req.body.Quantity;
      grocery.Unit = req.body.Unit;
      grocery.From = req.body.From;
      grocery.Datetime = req.body.Datetime;
      
      grocery.save()
        .then(() => res.json('grocery updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Grocery.findById(req.params.id)
    .then(grocery => res.json(grocery))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;