import { PrismaClient } from "@prisma/client";
import { extendType, queryType } from "nexus";
import { userList } from "./types/user";
const prisma = new PrismaClient()

export const query = extendType({
    type:"Query",
    definition(t) {
        t.list.field('userList', {
            type: userList,
            resolve: async (parent, args, _) => {
                const user =  await prisma.user.findMany()
                console.log(user);
                
                return user
            }
        })
    }
})

