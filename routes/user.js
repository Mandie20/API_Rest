import express from 'express';

const router = express.Router();

const Users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 25
    },
    {
        firstName: "Joane",
        lastName: "Doe",
        age: 20
    }
]

router.get('/', (req, res) => {
    console.log(Users);

    res.send(Users);
});

// Post request
router.post('/', (req, res) => {

});

export default router;