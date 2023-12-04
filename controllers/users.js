import express from 'express';
import { v4 as uuidv4 } from 'uuid';

export const createUsers = (req, res) => {
    const user = req.body;

    Users.push({ ...user, id: uuidv4() });

    res.send(`User with the name ${user.firstName} added to the database`);
}

// getUsers

export const getUsers = (req, res) => {
    console.log(Users);

    res.send(Users);
}

// Getuser
export const getUser = (req, res) => {
    const { id } = req.params;

    const foundUser = Users.find((user) => user.id == id);

    res.send(foundUser); 
}