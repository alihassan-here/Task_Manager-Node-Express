const express = require('express');
const router = express.Router();
//CONTROLLERS
const { getAllTasks, createTask, getTask, updateTask, deleteTask } = require('../controller/tasks')

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);


module.exports = router;