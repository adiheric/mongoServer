import Course from "../models/course.models";
import _ from "lodash";

const create = (req, res) => {
  const course = Course(req.body);
  course.save((err, data) => {
    if (err) {
      return res.status(400).json(err.message);
    }
    res.status(201).json(data);
  });
};

const read = (req, res) => {
  const id = req.params.id;
  Course.findById(id).exec((err, data) => {
    if (err) {
      return res.status(400).json(err.message);
    }
    res.status(200).json(data);
  });
};

const update = (req, res) => {
  const id = req.params.id;
  Course.findById(id).exec((err, data) => {
    if (err || !data) {
      return res.status(400).json("Course is not found!");
    }
    const course = _.extend(data, req.body);
    course.save((err, data) => {
      if (err) {
        return res.status(400).json(err.message);
      }
      res.status(200).json(data);
    });
  });
};

const remove = (req, res) => {
  const id = req.params.id;
  Course.findById(id).exec((err, data) => {
    if (err || !data) {
      return res.status(400).json("Course is not found!");
    }
    data.remove((err, data) => {
      if (err) {
        return res.status(400).json(err.message);
      }
      res.status(200).json("Course deleted.");
    });
  });
};

const list = (req, res) => {
  Course.find((err, data) => {
    if (err) {
      return res.status(400).json(err.message);
    }
    return res.status(200).json(data);
  });
};

export default { list,create,read,update,remove }