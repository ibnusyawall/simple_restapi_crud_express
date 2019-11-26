'use strict';

var mongoose = require('mongoose');
var Task     = mongoose.model('Tasks');

exports.list_all_task = (req, res, err) => {
	Task.find({}, (err, task) => {
		if (err) 
			res.send(err);
		res.json(task);
		console.log(task);
	});
};

exports.create_a_task = (req, res, err) => {
	var new_task = new Task(req.body);
	new_task.save((err, task) => {
		if (err)
			res.send(err);
		res.json(task);
		console.log(task);
	});
};

exports.read_a_task = (req, res, err) => {
	Task.findById(req.params.taskId, (err, task) => {
		if (err)
			res.send(err);
		res.json(task);
		console.log(task);
	});
};

exports.update_a_task = (req, res, err) => {
	Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, (err, task) => {
		if (err)
			res.send(err);
		res.json(task);
		console.log(task);
	});
};

exports.delete_a_task = (req, res, err) => {
	Task.remove({
		_id: req.params.taskId
	}, (err, task) => {
		if (err)
			res.send(err);
		res.json({message: 'task successfuly deleted!'});
		console.log({message: 'task successfuly deleted'});
	});
};