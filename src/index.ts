import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import { Container } from 'inversify';
import * as bodyParser from 'body-parser';
import './infrastructure/controllers/index';
import './infrastructure/controllers/car-controller';
import { dummyLogger, Logger } from "ts-log";


// load everything needed to the Container
let container = new Container();
let log: Logger = dummyLogger;

// start the server
let server = new InversifyExpressServer(container);

server.setConfig((app) => {
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
});

let serverInstance = server.build();
serverInstance.listen(3000);

log.info("Server started on port 3000 :)");
