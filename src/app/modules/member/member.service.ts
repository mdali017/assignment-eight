import { prisma } from "../../../shared/prisma";

const createMemberIntoDB = async (payload: any) => {
  const member = await prisma.member.create({ data: payload });
  return member;
};

const getAllMembersFromDB = async () => {
  const members = await prisma.member.findMany({});
  return members;
};

const getSingleMemberFromDB = async (memberId: string) => {
//   console.log({memberId});
  if (!memberId) {
    throw new Error("memberId is required");
  }

  const member = await prisma.member.findUnique({
    where: { memberId },
  });

//   console.log(member);

  return member;
};

export const MemberService = {
  createMemberIntoDB,
  getAllMembersFromDB,
  getSingleMemberFromDB,
};
