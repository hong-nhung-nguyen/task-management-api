const Task = require("../models/task.model");

// [GET] /api/v1/tasks
module.exports.index = async (req, res) => {
    let find = {
        deleted: false,
    };

    if(req.query.status) {
        find.status = req.query.status;
    };

    // sort by different criteria
    const sort = {};

    if(req.query.sortKey && req.query.sortValue) {
        sort[req.query.sortKey] = req.query.sortValue;
    }
    // end sort by different criteria

    const tasks = await Task.find(find).sort(sort);

    res.json(tasks);
}

// [GET] /api/v1/tasks/detail/:id 
module.exports.detail = async (req, res) => {
    const id = req.params.id;

    const task = await Task.findOne({
        _id: id,
        deleted: false,
    })

    res.json(task);
}
