import Service from "../models/Service.js";

// -------------------- MAIN SERVICES --------------------
export const getServices = async (req, res) => {
  try {
    const doc = await Service.findOne().sort({ createdAt: -1 });
    res.json(doc || {});
  } catch (e) {
    res
      .status(500)
      .json({ error: "Failed to fetch services", details: e.message });
  }
};

export const upsertManthan = async (req, res) => {
  try {
    const doc = await Service.findOneAndUpdate(
      {},
      { manthan: req.body },
      { upsert: true, new: true }
    );
    res.json(doc.manthan);
  } catch (e) {
    res
      .status(400)
      .json({ error: "Failed to save manthan", details: e.message });
  }
};

// -------------------- WEBINARS CRUD --------------------
export const getWebinars = async (req, res) => {
  try {
    const doc = await Service.findOne();
    res.json(doc?.webinars?.list || []);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getWebinarById = async (req, res) => {
  try {
    const { id } = req.params;
    const doc = await Service.findOne(
      { "webinars.list._id": id },
      { "webinars.list.$": 1 }
    );
    if (!doc?.webinars?.list?.length)
      return res.status(404).json({ error: "Webinar not found" });
    res.json(doc.webinars.list[0]);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const addWebinar = async (req, res) => {
  try {
    const doc = await Service.findOneAndUpdate(
      {},
      {
        $push: {
          "webinars.list": {
            ...req.body,
            _id: new Date().getTime().toString(),
          },
        },
      },
      { upsert: true, new: true }
    );
    res.json(doc.webinars.list);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

export const updateWebinar = async (req, res) => {
  try {
    const { id } = req.params;
    const doc = await Service.findOneAndUpdate(
      { "webinars.list._id": id },
      { $set: { "webinars.list.$": { ...req.body, _id: id } } },
      { new: true }
    );
    res.json(doc.webinars.list);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

export const deleteWebinar = async (req, res) => {
  try {
    const { id } = req.params;
    const doc = await Service.findOneAndUpdate(
      {},
      { $pull: { "webinars.list": { _id: id } } },
      { new: true }
    );
    res.json(doc.webinars.list);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

// -------------------- MANTHAN UPCOMING EVENTS --------------------
export const getUpcomingEvents = async (req, res) => {
  try {
    const doc = await Service.findOne();
    res.json(doc?.manthan?.upcomingEvents || []);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const addUpcomingEvent = async (req, res) => {
  try {
    const doc = await Service.findOneAndUpdate(
      {},
      {
        $push: {
          "manthan.upcomingEvents": {
            ...req.body,
            _id: new Date().getTime().toString(),
          },
        },
      },
      { upsert: true, new: true }
    );
    res.json(doc.manthan.upcomingEvents);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

export const updateUpcomingEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const doc = await Service.findOneAndUpdate(
      { "manthan.upcomingEvents._id": id },
      { $set: { "manthan.upcomingEvents.$": { ...req.body, _id: id } } },
      { new: true }
    );
    res.json(doc.manthan.upcomingEvents);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

export const deleteUpcomingEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const doc = await Service.findOneAndUpdate(
      {},
      { $pull: { "manthan.upcomingEvents": { _id: id } } },
      { new: true }
    );
    res.json(doc.manthan.upcomingEvents);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

// -------------------- MANTHAN PAST EVENTS --------------------
export const getPastEvents = async (req, res) => {
  try {
    const doc = await Service.findOne();
    res.json(doc?.manthan?.pastEvents || []);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const addPastEvent = async (req, res) => {
  try {
    const doc = await Service.findOneAndUpdate(
      {},
      {
        $push: {
          "manthan.pastEvents": {
            ...req.body,
            _id: new Date().getTime().toString(),
          },
        },
      },
      { upsert: true, new: true }
    );
    res.json(doc.manthan.pastEvents);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

export const updatePastEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const doc = await Service.findOneAndUpdate(
      { "manthan.pastEvents._id": id },
      { $set: { "manthan.pastEvents.$": { ...req.body, _id: id } } },
      { new: true }
    );
    res.json(doc.manthan.pastEvents);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

export const deletePastEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const doc = await Service.findOneAndUpdate(
      {},
      { $pull: { "manthan.pastEvents": { _id: id } } },
      { new: true }
    );
    res.json(doc.manthan.pastEvents);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};
