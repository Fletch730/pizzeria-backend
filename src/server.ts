import express from 'express'
import "dotenv"
import { PrismaClient, userRoles, userTypes } from '@prisma/client';

const app = express();
const prisma = new PrismaClient()

app.listen(process.env.PORT, async() => { 
    await prisma.$connect()
    const allUsers = await prisma.user.findMany()
  console.log(allUsers)
    await prisma.user.create({
        data:{
            name:"fletch",
            email:"fletche@mail.com",
            password:"1234",
            userRole:userRoles.user,
            userType:userTypes.customer
        }
    })
    await prisma.$disconnect()
    console.log("server listenikng on port 4000") })