import express from 'express';

import { createUsers, getUsers, getUser } from '../controllers/users.js';

const router = express.Router();

let Users = []

// Get request
router.get('/', getUsers);

// Post request

router.post('/', createUsers);

// /users/2 => req.params { id: 2}
router.get('/:id', getUser);

// Delete request

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Users = Users.filter((user) => user.id != id);

    res.send(`User with the id ${id} deleted from the database.`);

});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const {firstName, lastName, age } = req.body;

    const user = Users.find((user) => user.id === id);

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`User with the id ${id} has been updated`);

});

export default router;