import { objectType,inputObjectType } from "nexus"

export const userList = objectType({
    name: 'userList',
    definition(t) {
        t.string('id')
        t.string('name')
        t.string('email')
    }
})

export const userSignupPayloadType = inputObjectType({
    name: 'userSignupPayloadType',
    definition(t) {
        t.string('name')
        t.string('email')
        t.string('password')
    }
})

export const userSignupPayloadSuccessType = objectType({
    name: 'userSignupPayloadSuccessType',
    definition(t) {
        t.string('message')
        t.string('email')
        t.string('id')
    }
})


