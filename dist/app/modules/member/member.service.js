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
exports.MemberService = void 0;
const prisma_1 = require("../../../shared/prisma");
const createMemberIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const member = yield prisma_1.prisma.member.create({ data: payload });
    return member;
});
const getAllMembersFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const members = yield prisma_1.prisma.member.findMany({});
    return members;
});
const getSingleMemberFromDB = (memberId) => __awaiter(void 0, void 0, void 0, function* () {
    //   console.log({memberId});
    if (!memberId) {
        throw new Error("memberId is required");
    }
    const member = yield prisma_1.prisma.member.findUnique({
        where: { memberId },
    });
    //   console.log(member);
    return member;
});
const updateMemberIntoDB = (memberId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const member = yield prisma_1.prisma.member.update({
        where: { memberId },
        data: payload,
    });
    return member;
});
const deleteMemberFromDB = (memberId) => __awaiter(void 0, void 0, void 0, function* () {
    const member = yield prisma_1.prisma.member.delete({
        where: { memberId },
    });
    return member;
});
exports.MemberService = {
    createMemberIntoDB,
    getAllMembersFromDB,
    getSingleMemberFromDB,
    updateMemberIntoDB,
    deleteMemberFromDB,
};
