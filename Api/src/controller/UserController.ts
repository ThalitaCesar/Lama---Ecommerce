import express from "express";
import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserData } from "../data/UserData";
import { ROLES, User } from "../models/User";
import { Autheticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";
import { HashManager } from "../services/HashManager";

export class UserController {
   async signUpUser(req: Request, res: Response) {
      let erroStatus = 500;
      try {
        const { name, email, cpf, data, password, role } = req.body;
        const id = new GenerateId().generateId();
  
        if (!name) {
          erroStatus = 422;
          throw new Error("Digite um nome");
        }
        if (!role || (role !== ROLES.NOMAL && role !== ROLES.ADMIN)) {
          erroStatus = 422;
          throw new Error("Parametro ROLE invalido");
        }
        if (!email || !email.includes("@") || !email.includes(".com")) {
          erroStatus = 422;
          throw new Error("Email invalido, formato => teste@teste.com");
        }
        if (!password || password.length < 6) {
          erroStatus = 422;
          throw new Error("Digite password valido, nominimo 6 digitos");
        }
        const newPassword = await new HashManager().generateHash(password);
        const newUser = new User(id, name, cpf,data, email, newPassword, role);
        const userdata = new UserData();
        const result = await userdata.signUpUser(newUser);
        console.log(result);
        res.status(202).send({ result: result });
      } catch (error:any) {
        res.status(erroStatus).send(error.sqlMessage || error.message);
      }
    }
  
    async loginUser(req: Request, res: Response) {
      let erroStatus = 500;
      try {
        const { email, password } = req.body;
        if (!email || !email.includes("@") || !email.includes(".com")) {
          erroStatus = 422;
          throw new Error("Email invalido, formato => teste@teste.com");
        }
        if (!password || password.length < 6) {
          erroStatus = 422;
          throw new Error("digite password valido com no minimo 6 digitos");
        }
        const userData = new UserData();
        const [result] = await userData.loginUser(email);
  
      //   const validHash = new HashManager();
      //   const newPassword = validHash.compareHash(password, result.password);
      //   console.log(newPassword);
  
      //   if (!newPassword) {
      //     erroStatus = 401;
      //     throw new Error("Senha inválida");
      //   }
  
        const authenticator = new Autheticator().generateToken(result);
        res.status(200).send({ result: authenticator });
      } catch (error:any) {
        res.status(erroStatus).send(error.sqlMessage || error.message);
      }
    }
  
    async getProfile(req: Request, res: Response) {
      let erroStatus = 500;
      try {
        const token = req.headers.authorization as string;
        if (!token) {
          erroStatus = 401;
          throw new Error("Digite token no headers");
        }
        const newtoken = new Autheticator().tokenData(token);
        const [result] = await new UserData().getProfile(newtoken.id);
        res.status(200).send({ result: result });
      } catch (error:any) {
        res.status(erroStatus).send(error.sqlMessage || error.message);
      }
    }
  
    async getProfileById(req: Request, res: Response) {
      let erroStatus = 500;
      try {
        const token = req.headers.authorization as string;
        const id = req.params.id as string;
        if (!token || !id) {
          erroStatus = 401;
          throw new Error("Digite parametros necessarios");
        }
        const [result] = await new UserData().getProfile(id);
        res.status(200).send({ result: result });
      } catch (error:any) {
        res.status(erroStatus).send(error.sqlMessage || error.message);
      }
    }
  
    async deleteAccount(req: Request, res: Response) {
      let erroStatus = 500;
      try {
        const token:any = req.headers.authorization;
        const newtoken = new Autheticator().tokenData(token);
        if (!token) {
          erroStatus = 422;
          throw new Error("Digite um token");
        }
        if (newtoken.roles !== ROLES.ADMIN) {
          erroStatus = 401;
          throw new Error("Usuario não autorizado");
        }
        const result = await new UserData().deleteUser(newtoken.id);
        res.status(200).send({ Result: result });
      } catch (error:any) {
        res.status(erroStatus).send(error.sqlMessage || error.message);
      }
    }
}

export const userRouter = express.Router()

const userController = new UserController()

userRouter.get('/profileid', userController.getProfileById)
userRouter.get('/users', userController.getProfile)
userRouter.post('/signup', userController.signUpUser)
userRouter.post('/login', userController.loginUser)
// userRouter.put('/edit/:id',userController.)
// userRouter.put('/edit/password/:id',userController.editPassword)
userRouter.delete('/deleteuser', userController.deleteAccount)


// {
//    "result": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhMDFhMDRkLTQzYzItNGI1Yy05ZGI5LTMwY2E3MzAwYThkMCIsImlhdCI6MTY3MDUxMzcxNSwiZXhwIjoxNjcwNTE3MzE1fQ.QhF1NtsTa5AzRH9MSMQp-jvQY9UehQvd0kM0fT_BylE"
// }

// TOKEN CLIENT:
// {
//    "result": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkxYjlhMWFkLTljM2YtNGE4ZC1iYmVjLTJlNDg3MDIzYTZlZCIsImlhdCI6MTY3MDUxMzg1NywiZXhwIjoxNjcwNTE3NDU3fQ.j5HoCwjmXFN-6y2Tv7m50ZK8zV4OA24batDzmvvK6qk"
// }