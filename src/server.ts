import { app } from "./app";
import "dotenv/config";
import { env } from "./config/env";

const { PORT } = env;

app.listen(PORT, () => {
  console.log(`Server is running in PORT ${PORT}`);
});
