import express from 'express';
import { v4 as uuidv4 } from 'uuid';


let Users = []

// getUsers
export const getUsers = (req, res) => {
    console.log(Users);

    res.send(Users);
}

export const createUsers = (req, res) => {
    const user = req.body;

    Users.push({ ...user, id: uuidv4() });

    res.send(`User with the name ${user.firstName} added to the database`);
}

// Getuser
export const getUser = (req, res) => {
    const { id } = req.params;

    const foundUser = Users.find((user) => user.id == id);

    res.send(foundUser); 
}

// deleteUser
export const deleteUser = (req, res) => {
    const { id } = req.params;

    Users = Users.filter((user) => user.id != id);

    res.send(`User with the id ${id} deleted from the database.`);

}

// PatchUser
export const patchUser = (req, res) => {
    const { id } = req.params;
    const {firstName, lastName, age } = req.body;

    const user = Users.find((user) => user.id === id);

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`User with the id ${id} has been updated`);

}