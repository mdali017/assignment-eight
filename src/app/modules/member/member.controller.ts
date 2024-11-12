import { NextFunction, Request, Response } from "express";
import { MemberService } from "./member.service";

const createMember = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await MemberService.createMemberIntoDB(req.body);
    res.send({
      success: true,
      statusCode: 201,
      message: "Member created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllMembers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await MemberService.getAllMembersFromDB();
    res.send({
      success: true,
      statusCode: 200,
      message: "Get All Members fetched successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getSingleMember = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
    next(error);
  }
};

const updateMember = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await MemberService.updateMemberIntoDB(
      req.params.memberId,
      req.body
    );
    res.send({
      success: true,
      statusCode: 200,
      message: "Member updated successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deleteMember = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await MemberService.deleteMemberFromDB(req.params.memberId);
    res.send({
      success: true,
      statusCode: 200,
      message: "Member deleted successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const MemberController = {
  createMember,
  getAllMembers,
  getSingleMember,
  updateMember,
  deleteMember,
};
