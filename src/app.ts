import express from "express";
import cors from "cors";
import "dotenv/config";

import messagesRouter from "./infrastructure/routes/messages";

const app = express();
const PORT = process.env.PORT || 4040;

app.use(express.json());
app.use(cors());

app.use("/", messagesRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
