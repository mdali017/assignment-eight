import { Request, Response } from "express";
import { MemberService } from "./member.service";

const createMember = async (req: Request, res: Response) => {
  try {
    const result = await MemberService.createMemberIntoDB(req.body);
    res.send({
      success: true,
      statusCode: 201,
      message: "Member created successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(404).send({ message: "Not Member Created Successfully" });
  }
};

const getAllMembers = async (req: Request, res: Response) => {
  try {
    const result = await MemberService.getAllMembersFromDB();
    res.send({
      success: true,
      statusCode: 200,
      message: "Get All Members fetched successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(404).send({ message: "Members not found" });
  }
};

const getSingleMember = async (req: Request, res: Response) => {
  try {
    const memberId = req.params.memberId;
    const member = await MemberService.getSingleMemberFromDB(memberId);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Get Single Member fetched successfully",
      data: member,
    });
  } catch (error) {
    res.status(404).send({ message: "Member not found" });
  }
};

export const MemberController = {
  createMember,
  getAllMembers,
  getSingleMember,
};
