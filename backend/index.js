// import express from 'express'
// import cors from 'cors'
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(cors());

const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-shard-00-00.cf70q.mongodb.net:27017,cluster0-shard-00-01.cf70q.mongodb.net:27017,cluster0-shard-00-02.cf70q.mongodb.net:27017/?ssl=true&replicaSet=atlas-8gdyal-shard-0&authSource=admin&appName=Cluster0`;

// console.log("uri: ", uri);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const db = client.db("fullStack_Rider_App");
    const parcelCollection = db.collection("parcels");

    //parcel api
    app.get("/parcels", async (req, res) => {
      const query = {};
      const { email } = req.query;
      if (email) {
        query.senderEmail = email;
      }
      const options = {
        sort: { createdAt: -1 },
      };
      const cursor = parcelCollection.find(query, options);
      const result = await cursor.toArray();
      res.send(result);
    });

    // parcel post api
    app.post("/parcels", async (req, res) => {
      const parcel = req.body;
      parcel.createdAt = new Date();
      const result = await parcelCollection.insertOne(parcel);
      res.send(result);
    });

    // parcel delete api
    app.delete("/parcels/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };

      const result = await parcelCollection.deleteOne(query);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Rider server is running!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
