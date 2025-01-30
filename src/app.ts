import express from "express";
import cors from "cors";
import "dotenv/config";
import client from "prom-client"; 

import messagesRouter from "./infrastructure/routes/messages";

const app = express();
const PORT = process.env.PORT || 4040;


const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics(); 


app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});

app.use(express.json());
app.use(cors());
app.use("/telegram", messagesRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
