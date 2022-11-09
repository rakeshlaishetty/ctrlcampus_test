const TodoUserData = require("../mongodb/model/user");

// Get All Dat from MongoDb
const getData = async (req, res) => {
  try {
    const allTodoitems = await TodoUserData.find({});
    res.status(200).json(allTodoitems);
  } catch (err) {
    res.json(err);
  }
};

// Get particular data from mongodb pasing parameter our particular Id....

const getOneData = async (req, res) => {
  let id = req.params.id || req.body._id;
  try {
    const getbyOne = await TodoUserData.findOne({ _id: id });
    if (getbyOne) {
      res.status(200).json(getbyOne);
    } else {
      res.status(404).json("Sorry data is Not Found");
    }
  } catch (err) {
    res.json(err);
  }
};

// Create the New Data ex we have a fullname And Message
const postData = (req, res) => {
  const { fullName, message } = req.body;
  try {
    let data = new TodoUserData({ fullName: fullName, message: message });
    data
      .save()
      .then((item) => {
        res.status(200).send(item);
      })
      .catch((err) => {
        res.status(400).send("unable to save to database");
      });
  } catch (err) {
    res.json(err);
  }
};

// Its Update the Data
const putData = async (req, res) => {
  let id = req.params.id || req.body._id;

  try {
    const isExisted = await TodoUserData.findOne({ _id: id });
    if (isExisted) {
      await TodoUserData.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).send("Updated the Data");
    } else {
      res.status(404).json("Sorry data is Not Found");
    }
  } catch (err) {
    res.json(err);
  }
};

// Its Deletes the Our data
const deleteData = async (req, res) => {
  let id = req.params.id || req.body._id;
  let isExisted = await TodoUserData.findOne({ _id: id });
  if (!isExisted) {
    res.status(400).send("404 Not Found");
  } else {
    TodoUserData.findByIdAndDelete(id, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send("Deleted the Data");
      }
    });
  }
};

module.exports = { getData, getOneData, postData, putData, deleteData };
