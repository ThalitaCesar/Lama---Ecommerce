import {app} from "./controller/app";
import { userRouter } from "./controller/UserController";

app.use('/user/', userRouter)
