const express = require('express');
const cors = require('cors');
const port = 3333;

const server = express();
server.use(express.json());
server.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

let trucks = [
  {
    name: 'El Oasis',
    cuisine_type: 'mexican',
    customer_rating: '5 stars',
    id: 0
  }
];
server.get('/trucks', (req, res) => {
  res.json(trucks);
});
let truckId = trucks.length;

server.post('/trucks', (req, res) => {
  const { name, cuisine_type, customer_rating } = req.body;
  const newTruck = { name, cuisine_type, customer_rating, id: truckId };
  if (!name || !cuisine_type || !customer_rating) {
    return sendUserError(
      'All fields are required to make a new truck',
      res
    );
  }
  const findTruckByName = truck => {
    return truck.name === name;
  };
  if (trucks.find(findTruckByName)) {
    return sendUserError(
      `${name} already exists in the smurf DB.`,
      res
    );
  }

  trucks.push(newTruck);
  truckId++;
  res.json(trucks);
});

server.put('/trucks/:id', (req, res) => {
  const { id } = req.params;
  const { name, cuisine_type, customer_rating } = req.body;
  const findTruckById = truck => {
    return truck.id == id;
  };
  const foundTruck = trucks.find(findTruckById);
  if (!foundTruck) {
    return sendUserError('No truck found by that ID', res);
  } else {
    if (name) foundTruck.name = name;
    if (customer_rating) foundTruck.customer_rating = customer_rating;
    if (cuisine_type) foundTruck.cuisine_type = cuisine_type;
    res.json(trucks);
  }
});

server.delete('/trucks/:id', (req, res) => {
  const { id } = req.params;
  const foundTruck = trucks.find(truck => truck.id == id);

  if (foundTruck) {
    const TruckRemoved = { ...foundTruck };
    trucks = trucks.filter(truck => truck.id != id);
    res.status(200).json(trucks);
  } else {
    sendUserError('No truck by that ID exists in the smurf DB', res);
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});
