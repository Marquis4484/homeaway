// External Dependencies
import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

// Global Variables
export const collections: { Cluster0?: mongoDB.Collection } = {};

// Initialize Connection
export async function connectToDatabase() {
  dotenv.config();

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    process.env.DATABASE_URL as string
  );

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  const Cluster0Collection: mongoDB.Collection = db.collection(
    process.env.COLLECTION_NAME as string
  );

  collections.Cluster0 = Cluster0Collection;

  console.log(
    `Successfully connected to database: ${db.databaseName} and collection: ${Cluster0Collection.collectionName}`
  );
}
