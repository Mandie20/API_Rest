import express from 'express';

const router = express.Router();

const Users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 25
    }
]

router.get('/', (req, res) => {
    console.log(Users);
    
    res.send('Hello Everyone');
});

export default router;