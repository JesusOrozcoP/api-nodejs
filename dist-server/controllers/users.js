import { v4 as uuidv4 } from "uuid";
let users = [];

export const createUser = (req, res) => {
    const user = req.body;
    users.push({ user, id: uuidv4() });
    return res.status(200).send(`User with the name ${user.lastName},${user.firstName} added to the database`);
};

export const getUsers = (req, res) => {
    //console.log(users);
    res.send(users);
};

export const getUser = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find(user => user.id === id);

    return res.status(200).send(foundUser);
};

export const updateUser = (req, res) => {
    const { id } = req.params;

    const { firstName, lastName, age, stateBorn, active } = req.body;

    const user = users.find(user => user.id === id);

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;
    if (stateBorn) user.stateBorn = stateBorn;
    if (active) user.active = active;

    return res.status(200).send(`User with id ${id} was updated`);
};

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter(user => user.id !== id);
    return res.status(200).send(`User with id  ${id} deleted from array`);
};