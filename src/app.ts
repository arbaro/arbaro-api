import * as dotenv from "dotenv";
import * as express from "express";
import * as mongoose from "mongoose";
import companyRoute from "./routes/company";
import companiesRoute from "./routes/companies";
import profileRoute from "./routes/profile";
import profilesRoute from "./routes/profiles";
import * as cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const mongoUri = process.env.MONGO_URI;

app.listen(port, () => console.log(`Listening on port ${port}`));

mongoose.connect(mongoUri, { useNewUrlParser: true }, error =>
  console.log(error || "Successfully connected to Mongoose.")
);

app.use(cors());
app.use("/company", companyRoute);
app.use("/companies", companiesRoute);
app.use("/profile", profileRoute);
app.use("/profiles", profilesRoute);
