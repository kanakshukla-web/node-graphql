import express, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app: Application = express();
// const PORT = process.env.PORT || 8000;

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { expressMiddleware } from '@apollo/server/express4';
import typeDefs from './schemas'
import resolvers from './controllers';
import connectToDb from './config/dbconfig';

const PORT = process.env.SERVER_PORT || 3000;

const connectServer = async () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers
    })

    const { url } = await startStandaloneServer(server, {
        listen: { port: Number(PORT) },
    });
    console.log(`🚀  Server ready at: ${url}`);

    app.use(
        expressMiddleware(server),
    );
}

connectToDb().then(() => {
    connectServer();
}).catch((error) => {
    console.error('Error connecting to database:', error);
    process.exit(1);
})

// app.get("/", (req: Request, res: Response): void => {
//     res.send("Hello Typescript with Node.js!")
// });

// app.listen(PORT, (): void => {
//     console.log(`Server Running here 👉 http://localhost:${PORT}`);
// });
