import express from 'express'
import "dotenv"
import { schema } from './schema';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';


const startServer=async()=>{

    const server = new ApolloServer({ schema });
    await server.start()
    const app = express();
    app.use(cors())
    server.applyMiddleware({ app });
    
    app.listen({ port: process.env.PORT }, () =>
      console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    );
}
startServer()




