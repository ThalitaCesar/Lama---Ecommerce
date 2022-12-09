import { adressesRouter } from "./controller/AdressesController";
import {app} from "./controller/app";
import { productRouter } from "./controller/ProductController";
import { userRouter } from "./controller/UserController";

app.use('/user/', userRouter);
app.use('/product/', productRouter)
app.use('/adresses/', adressesRouter)