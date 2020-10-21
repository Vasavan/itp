const router = require("express").Router();
let Diet = require("../models/diet.model");

//get all patients
router.route("/").get((req, res) => {
  Diet.find()
    .then((diet) => res.json(diet))
    .catch((err) => res.status(400).json("Error: " + err));
});

//add a patient - won't add
router.route("/add").post((req, res) => {
  const Name = req.body.Name;
  const Quantity = req.body.Quantity;
  const Unit = req.body.Unit;
  const To = req.body.To;
  const Datetime = req.body.Datetime;
  const Remarks = req.body.Remarks;

  const newDiet = new Diet({
    Name,
    Quantity,
    Unit,
    To,
    Datetime,
    Remarks,
    
  });

  newDiet
    .save()
    .then(() => res.json("Diet added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route('/:id').delete((req, res) => {
  Diet.findByIdAndDelete(req.params.id)
    .then(() => res.json('Diet deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Diet.findById(req.params.id)
    .then(diet => {
      diet.Name = req.body.Name;
      diet.Quantity = req.body.Quantity;
      diet.Unit = req.body.Unit;
      diet.Remarks = req.body.Remarks;
      diet.To = req.body.To;
      diet.Datetime = req.body.Datetime;
      
      diet.save()
        .then(() => res.json('diet updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Diet.findById(req.params.id)
    .then(diet => res.json(diet))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;