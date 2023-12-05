import express from 'express';

import { createUsers, getUsers, getUser, deleteUser, patchUser } from '../controllers/users.js';

const router = express.Router();

// Get request
router.get('/', getUsers);

// Post request

router.post('/', createUsers);

// /users/2 => req.params { id: 2}
router.get('/:id', getUser);

// Delete request

router.delete('/:id', deleteUser);

router.patch('/:id', patchUser);

export default router;