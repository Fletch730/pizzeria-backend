import { makeSchema } from "nexus";
import path from "path";
import { mutation } from "./mutation";
import { query } from "./queries";
import * as type from './types'

export const schema = makeSchema({
    shouldGenerateArtifacts: process.env.NODE_ENV === 'development',
  outputs: {
    // I tend to use `.gen` to denote "auto-generated" files, but this is not a requirement.
    schema: path.join(__dirname, '../lib/generated/schema.gen.graphql'),
    typegen: path.join(__dirname, '../lib/generated/nexusTypes.gen.ts'),
  },
    types: [query,mutation,type]
})