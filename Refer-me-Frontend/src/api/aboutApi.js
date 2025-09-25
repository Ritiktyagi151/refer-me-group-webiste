import axios from "axios";

const API_URL = "http://localhost:5000/api/about";

// =================== About ===================
// Get whole About document
export const getAbout = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (err) {
    console.error("Error fetching About data:", err);
    throw err;
  }
};

// =================== Our Story ===================
export const saveOurStory = async (data) => {
  try {
    const res = await axios.post(`${API_URL}/our-story`, data);
    return res.data;
  } catch (err) {
    console.error("Error saving Our Story:", err);
    throw err;
  }
};

export const getOurStory = async () => {
  try {
    const res = await axios.get(`${API_URL}/our-story`);
    return res.data;
  } catch (err) {
    console.error("Error fetching Our Story:", err);
    throw err;
  }
};

// =================== Core Committee ===================
export const getCoreCommittee = async () => {
  try {
    const res = await axios.get(`${API_URL}/core-committee`);
    return res.data;
  } catch (err) {
    console.error("Error fetching Core Committee:", err);
    throw err;
  }
};

export const addCoreMember = async (data) => {
  try {
    const res = await axios.post(`${API_URL}/core-committee`, data);
    return res.data;
  } catch (err) {
    console.error("Error adding Core Member:", err);
    throw err;
  }
};

export const updateCoreMember = async (id, data) => {
  try {
    const res = await axios.put(`${API_URL}/core-committee/${id}`, data);
    return res.data;
  } catch (err) {
    console.error("Error updating Core Member:", err);
    throw err;
  }
};

export const deleteCoreMember = async (id) => {
  try {
    const res = await axios.delete(`${API_URL}/core-committee/${id}`);
    return res.data;
  } catch (err) {
    console.error("Error deleting Core Member:", err);
    throw err;
  }
};

// =================== Payment Policy ===================
export const savePaymentPolicy = async (data) => {
  try {
    const res = await axios.post(`${API_URL}/payment-policy`, data);
    return res.data;
  } catch (err) {
    console.error("Error saving Payment Policy:", err);
    throw err;
  }
};

export const getPaymentPolicy = async () => {
  try {
    const res = await axios.get(`${API_URL}/payment-policy`);
    return res.data;
  } catch (err) {
    console.error("Error fetching Payment Policy:", err);
    throw err;
  }
};

export const addPaymentSection = async (data) => {
  try {
    const res = await axios.post(`${API_URL}/payment-policy/section`, data);
    return res.data;
  } catch (err) {
    console.error("Error adding Payment Section:", err);
    throw err;
  }
};

export const updatePaymentSection = async (id, data) => {
  try {
    const res = await axios.put(
      `${API_URL}/payment-policy/section/${id}`,
      data
    );
    return res.data;
  } catch (err) {
    console.error("Error updating Payment Section:", err);
    throw err;
  }
};

export const deletePaymentSection = async (id) => {
  try {
    const res = await axios.delete(`${API_URL}/payment-policy/section/${id}`);
    return res.data;
  } catch (err) {
    console.error("Error deleting Payment Section:", err);
    throw err;
  }
};

// =================== What We Do ===================
export const saveWhatWeDo = async (data) => {
  try {
    const res = await axios.post(`${API_URL}/what-we-do`, data);
    return res.data;
  } catch (err) {
    console.error("Error saving What We Do:", err);
    throw err;
  }
};

export const getWhatWeDo = async () => {
  try {
    const res = await axios.get(`${API_URL}/what-we-do`);
    return res.data;
  } catch (err) {
    console.error("Error fetching What We Do:", err);
    throw err;
  }
};

export const addWhatWeDoItem = async (item) => {
  try {
    const res = await axios.post(`${API_URL}/what-we-do/item`, { item });
    return res.data;
  } catch (err) {
    console.error("Error adding What We Do item:", err);
    throw err;
  }
};

export const deleteWhatWeDoItem = async (index) => {
  try {
    const res = await axios.delete(`${API_URL}/what-we-do/item/${index}`);
    return res.data;
  } catch (err) {
    console.error("Error deleting What We Do item:", err);
    throw err;
  }
};
