import express from "express";
import * as aboutCtrl from "../controllers/aboutController.js";

const router = express.Router();

// Our Story
router.get("/our-story", aboutCtrl.getOurStory);
router.post("/our-story", aboutCtrl.upsertOurStory);

// Core Committee
router.get("/core-committee", aboutCtrl.getCoreCommittee);
router.post("/core-committee", aboutCtrl.addCoreMember);
router.put("/core-committee/:id", aboutCtrl.updateCoreMember);
router.delete("/core-committee/:id", aboutCtrl.deleteCoreMember);

// Payment Policy
router.get("/payment-policy", aboutCtrl.getPaymentPolicy);
router.post("/payment-policy", aboutCtrl.upsertPaymentPolicy);
router.post("/payment-policy/section", aboutCtrl.addPaymentSection);
router.put("/payment-policy/section/:id", aboutCtrl.updatePaymentSection);
router.delete("/payment-policy/section/:id", aboutCtrl.deletePaymentSection);

// What We Do
router.get("/what-we-do", aboutCtrl.getWhatWeDo);
router.post("/what-we-do", aboutCtrl.upsertWhatWeDo);
router.post("/what-we-do/item", aboutCtrl.addWhatWeDoItem);
router.delete("/what-we-do/item/:index", aboutCtrl.deleteWhatWeDoItem);

export default router;
