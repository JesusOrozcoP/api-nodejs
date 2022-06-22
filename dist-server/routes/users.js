import express from "express";
import { createUser, getUsers, getUser, updateUser, deleteUser } from "../controllers/users.js";

const router = express.Router();

router.get('/', getUsers);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.post('/', createUser);

router.patch('/:id', updateUser);

export default router;