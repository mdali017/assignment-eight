"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberController = void 0;
const member_service_1 = require("./member.service");
const createMember = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield member_service_1.MemberService.createMemberIntoDB(req.body);
        res.send({
            success: true,
            statusCode: 201,
            message: "Member created successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const getAllMembers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield member_service_1.MemberService.getAllMembersFromDB();
        res.send({
            success: true,
            statusCode: 200,
            message: "Get All Members fetched successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const getSingleMember = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const memberId = req.params.memberId;
        const member = yield member_service_1.MemberService.getSingleMemberFromDB(memberId);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Get Single Member fetched successfully",
            data: member,
        });
    }
    catch (error) {
        next(error);
    }
});
const updateMember = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield member_service_1.MemberService.updateMemberIntoDB(req.params.memberId, req.body);
        res.send({
            success: true,
            statusCode: 200,
            message: "Member updated successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const deleteMember = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield member_service_1.MemberService.deleteMemberFromDB(req.params.memberId);
        res.send({
            success: true,
            statusCode: 200,
            message: "Member deleted successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.MemberController = {
    createMember,
    getAllMembers,
    getSingleMember,
    updateMember,
    deleteMember,
};
