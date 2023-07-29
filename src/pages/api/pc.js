const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://SNservice:XnX1uE8Nemj9UJ5G@cluster0.rh6ekch.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const productsCollection = client.db("pc_assembler").collection("accessories");
    const categoriesCollection = client.db("pc_assembler").collection("categories");

    if (req.method === "GET") {
      const query = req.query;
      let products;
      if(query){
        if(query.categories){
          products = await categoriesCollection.find({}).toArray();
        }else{
          if (query._id) {
            query._id = new ObjectId(query._id);
          }
           products = await productsCollection.find(query).toArray();
        }
      }else{

         products = await productsCollection.find({}).toArray();
      }
      res.send({ message: "success", status: 200, data: products });
    }

    if (req.method === "POST") {
      const products = req.body;
      const result = await productsCollection.insertOne(products);
      res.json(result);
    }
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

export default run;
