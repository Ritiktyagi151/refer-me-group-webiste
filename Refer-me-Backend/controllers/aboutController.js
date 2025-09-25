import About from "../models/About.js";

// ------------------- Our Story -------------------
export const getOurStory = async (req, res) => {
  const doc = await About.findOne({}, { ourStory: 1 });
  res.json(doc?.ourStory || {});
};

export const upsertOurStory = async (req, res) => {
  try {
    const doc = await About.findOneAndUpdate(
      {},
      { ourStory: req.body },
      { upsert: true, new: true }
    );
    res.json(doc.ourStory);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

// ------------------- Core Committee -------------------
export const getCoreCommittee = async (req, res) => {
  const doc = await About.findOne({}, { coreCommittee: 1 });
  res.json(doc?.coreCommittee || []);
};

export const addCoreMember = async (req, res) => {
  try {
    const doc = await About.findOneAndUpdate(
      {},
      { $push: { coreCommittee: req.body } },
      { upsert: true, new: true }
    );
    res.json(doc.coreCommittee);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

export const updateCoreMember = async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await About.findOneAndUpdate(
      { "coreCommittee._id": id },
      { $set: { "coreCommittee.$": req.body } },
      { new: true }
    );
    res.json(doc.coreCommittee);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

export const deleteCoreMember = async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await About.findOneAndUpdate(
      {},
      { $pull: { coreCommittee: { _id: id } } },
      { new: true }
    );
    res.json(doc.coreCommittee);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

// ------------------- Payment Policy -------------------
export const getPaymentPolicy = async (req, res) => {
  const doc = await About.findOne({}, { paymentPolicy: 1 });
  res.json(doc?.paymentPolicy || {});
};

export const upsertPaymentPolicy = async (req, res) => {
  try {
    const doc = await About.findOneAndUpdate(
      {},
      { paymentPolicy: req.body },
      { upsert: true, new: true }
    );
    res.json(doc.paymentPolicy);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

// Add/Delete sections in Payment Policy
export const addPaymentSection = async (req, res) => {
  try {
    const doc = await About.findOneAndUpdate(
      {},
      { $push: { "paymentPolicy.sections": req.body } },
      { new: true }
    );
    res.json(doc.paymentPolicy.sections);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

export const updatePaymentSection = async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await About.findOneAndUpdate(
      { "paymentPolicy.sections._id": id },
      { $set: { "paymentPolicy.sections.$": req.body } },
      { new: true }
    );
    res.json(doc.paymentPolicy.sections);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

export const deletePaymentSection = async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await About.findOneAndUpdate(
      {},
      { $pull: { "paymentPolicy.sections": { _id: id } } },
      { new: true }
    );
    res.json(doc.paymentPolicy.sections);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

// ------------------- What We Do -------------------
export const getWhatWeDo = async (req, res) => {
  const doc = await About.findOne({}, { whatWeDo: 1 });
  res.json(doc?.whatWeDo || {});
};

export const upsertWhatWeDo = async (req, res) => {
  try {
    const doc = await About.findOneAndUpdate(
      {},
      { whatWeDo: req.body },
      { upsert: true, new: true }
    );
    res.json(doc.whatWeDo);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

// Add/Delete items in What We Do
export const addWhatWeDoItem = async (req, res) => {
  try {
    const doc = await About.findOneAndUpdate(
      {},
      { $push: { "whatWeDo.items": req.body.item } },
      { new: true }
    );
    res.json(doc.whatWeDo.items);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

export const deleteWhatWeDoItem = async (req, res) => {
  const { index } = req.params; // index of item in array
  try {
    const doc = await About.findOne({});
    if (!doc || !doc.whatWeDo?.items) return res.json([]);
    doc.whatWeDo.items.splice(index, 1);
    await doc.save();
    res.json(doc.whatWeDo.items);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};
