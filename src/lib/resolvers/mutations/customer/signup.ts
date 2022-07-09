import { PrismaClient } from "@prisma/client";
import { UserInputError } from "apollo-server-express";
import { hash } from "bcrypt"
import { Context } from "../../../../types";
import { NexusGenArgTypes, NexusGenRootTypes, NexusGenTypes } from "../../../generated/nexusTypes.gen";
const prisma = new PrismaClient()

export const signupResolver = async (parent: any, args: NexusGenArgTypes["Mutation"]['signup'], ctx: any): Promise<NexusGenRootTypes['userSignupPayloadSuccessType']> => {


    const { name, email, password } = { ...args.data }

    if (!name || !email || !password) {
        throw new UserInputError("fields cannot be empty.")
    }
    const userExist = await prisma.user.count({
        where: {
            email: email
        }
    })
    if (userExist) {
        throw new UserInputError("email already exists.")
    }
    const hashedPassword = await hash(password, 10)


    const createNewUser = await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: hashedPassword,
            userRole: "user",
            userType: "customer"
        }
    })


    return {
        id: createNewUser.id,
        message: "success",
        email: createNewUser.email
    }
}