import Lane from '../models/lane';
import uuid from 'uuid';

export const getLanes = (req, res) => {
  Lane.find().exec((err, lanes) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ lanes });
  });
};

export const addLane = (req, res) => {
  if (!req.body.name) {
    res.status(403).end();
  }
  const newLane = new Lane(req.body);
  newLane.notes = [];
  newLane.id = uuid();
  newLane.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json(saved);
  });
};

export const deleteLane = (req, res) => {
  Lane.findOne({ id: req.params.laneId }).exec((err, lane) => {
    if (err) {
      res.status(500).send(err);
    }
    lane.remove(() => {
      res.status(200).end();
    });
  });
};

export const editLane = (req, res) => {
  const lane = req.body;
  Lane.findOneAndUpdate({ id: req.params.laneId },
    lane, { new: true }, (err, updated) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json(updated);
    });
};
