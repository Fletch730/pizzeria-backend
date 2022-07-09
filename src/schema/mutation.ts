import { PrismaClient } from "@prisma/client";
import { extendType } from "nexus";
import { signupResolver } from "../lib/resolvers/mutations/customer/signup";
import { userSignupPayloadSuccessType, userSignupPayloadType } from "./types/user";
const prisma = new PrismaClient()

export const mutation = extendType({
    type: "Mutation",
    definition(t) {
        t.field('signup', {
            args:{
                data:userSignupPayloadType
            },
            resolve: signupResolver,
            type:userSignupPayloadSuccessType
        })
    }
})

