import express from "express";
import { MemberController } from "./member.controller";

const router = express.Router();

router.post("/members", MemberController.createMember);
router.get("/members", MemberController.getAllMembers);
router.get("/members/:memberId", MemberController.getSingleMember);
router.put("/members/:memberId", MemberController.updateMember);
router.delete("/members/:memberId", MemberController.deleteMember);

export const MemberRoutes = router;
