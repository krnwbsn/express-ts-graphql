import express from "express";
import { ApolloServer } from "apollo-server-express";
import { initializeApp } from "firebase/app";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";
import { apiKey, baseURL, authDomain, projectId, port } from "../constant";

if (!port) {
  process.exit(1);
}

const PORT: number = parseInt(port as string, 10);

const firebaseClient = initializeApp({
  apiKey,
  authDomain,
  databaseURL: baseURL,
  projectId,
});

const startApolloServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      const { headers } = req;
      return {
        headers,
        firebaseClient,
      };
    },
  });

  const app = express();

  await server.start();

  server.applyMiddleware({
    app,
    path: "/",
  });

  await new Promise((resolve: any) => app.listen({ port: PORT }, resolve));
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
}

export default startApolloServer;
