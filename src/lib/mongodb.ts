@@ .. @@
 import { MongoClient, Db } from "mongodb";

-if (!process.env.MONGODB_URI) {
-  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
-}
-
-const uri = process.env.MONGODB_URI;
+// Don't throw error if MONGODB_URI is missing in development
+const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/saasfast";
 const options = {};

 let client: MongoClient;
 let clientPromise: Promise<MongoClient>;

+// Only attempt MongoDB connection if URI is provided
+const shouldConnectToMongoDB = process.env.MONGODB_URI && process.env.MONGODB_URI !== "mongodb://localhost:27017/saasfast";

-if (process.env.NODE_ENV === "development") {
+if (shouldConnectToMongoDB && process.env.NODE_ENV === "development") {
   // In development mode, use a global variable so that the value
   // is preserved across module reloads caused by HMR (Hot Module Replacement).
   let globalWithMongo = global as typeof globalThis & {
@@ .. @@
   }
   clientPromise = globalWithMongo._mongoClientPromise;
-} else {
+} else if (shouldConnectToMongoDB) {
   // In production mode, it's best to not use a global variable.
   client = new MongoClient(uri, options);
   clientPromise = client.connect();
+} else {
+  // Create a mock client promise for development without MongoDB
+  clientPromise = Promise.reject(new Error("MongoDB URI not configured"));
 }

 // Export a module-scoped MongoClient promise. By doing this in a
@@ .. @@
 export default clientPromise;

 export async function getDb(): Promise<Db> {
+  if (!shouldConnectToMongoDB) {
+    throw new Error("MongoDB URI not configured");
+  }
   const client = await clientPromise;
   return client.db("saasfast");
 }

 export async function connectToDatabase() {
+  if (!shouldConnectToMongoDB) {
+    console.log("MongoDB URI not configured - skipping database connection");
+    return { client: null, db: null };
+  }
+  
   try {
     const client = await clientPromise;
     const db = client.db("saasfast");