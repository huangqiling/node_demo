import Koa from "koa";
import bodyParser from "koa-bodyparser";
import controller from "./controller";
import staticFiles from "./static-files";

const app = new Koa();
app.use(staticFiles("/views/", __dirname + "/views"));
app.use(bodyParser());
app.use(controller());

app.listen(3000);
console.log("app started at port 3000...");
