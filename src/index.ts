import { createServer } from "./server";
import EnvironmentConfig from "./environment-config/environment-config";
const server = createServer();

server.listen(EnvironmentConfig.port, () => {
  console.log(`Server is running on port ${EnvironmentConfig.port}`);
});
