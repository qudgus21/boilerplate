import { createConnection, useContainer } from "typeorm";
import { Container } from "typeorm-typedi-extensions";
import * as typedi from "typedi";

const connect = async () => {
  useContainer(Container);
  const connection = await createConnection();

  typedi.Container.set("connection", connection);

  return {
    connection,
  };
};

export default connect;
