import express from "express";
import { Request, Response } from "express";
import { UserData } from "../../data/UserData";
import { ROLES, User } from "../../models/UserModel";
import { Autheticator } from "../../services/Authenticator";
import { GenerateId } from "../../services/GenerateId";
import { HashManager } from "../../services/HashManager";

export class UserController {

  // Criar usuário 
   async signUpUser(req: Request, res: Response) {
      let erroStatus = 500;
      try {
        const { name, cpf, data, email, password, role } = req.body;
        const id = new GenerateId().generateId();
  
        if (!name) {
          erroStatus = 422;
          throw new Error("Digite um nome");
        }
        if (!role || (role !== ROLES.NORMAL && role !== ROLES.ADMIN)) {
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
        const newUser = new User(id, name, cpf, data, email, newPassword, role);
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
        const authenticator = new Autheticator().generateToken(result);
        res.status(200).send({ result: authenticator });
      } catch (error:any) {
        res.status(erroStatus).send(error.sqlMessage || error.message);
      }
    }
  
// Pegar todos os usuários

async getAllUsers(req: Request, res: Response) {
  let errorstatus = 500;
  try {
    const [user] = await new UserData().getAllUsers();
    const result = {
      id: user.id,
      name: user.name,
      cpf: user.cpf,
      data: user.data,
      email: user.email,
      role: user.role
    };
    res.status(200).send({ Result: result });
  } catch (error:any) {
    res.status(errorstatus).send(error.message || error.sqlMessage);
  }
}
    // Pega os dados do usuário logado

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
  
    // Pega usuário especifico por id 

    async getProfileById(req: Request, res: Response) {
      let erroStatus = 500;
      try {
        const id = req.params.id as string;
        if ( !id) {
          erroStatus = 401;
          throw new Error("Digite parametros necessarios");
        }
        const [result] = await new UserData().getProfileById(id);
        res.status(200).send({ result: result });
      } catch (error:any) {
        res.status(erroStatus).send(error.sqlMessage || error.message);
      }
    }
     // Pega id do usuário por email 

     async getIdUserByEmail(req: Request, res: Response) {
      let erroStatus = 500;
      try {
        const email = req.params.email as string;
        const [result] = await new UserData().getIdUserByEmail(email);
        res.status(200).send({ result: result });
      } catch (error:any) {
        res.status(erroStatus).send(error.sqlMessage || error.message);
      }
    }

    // Alterar dados do usuário logado

    async updateProfile(req: Request, res: Response) {
      let errorstatus = 500;
      try {
        const {id, name, cpf, data, email} = req.body;
        if (!id) {
          errorstatus = 422;
          throw new Error("Parametro id e obrigatório");
        }
        const result = await new UserData().updateUser(
          id,
          name,
          cpf,
          data,
          email
        );
        res.status(201).send(result);
      } catch (error:any) {
        res.status(errorstatus).send(error.message || error.sqlMessage);
      }
    }
  
    // Excluir conta
    async deleteAccount(req: Request, res: Response) {
      let erroStatus = 500;
      try {
        const token:any = req.headers.authorization;
        const id = req.params.id;
        if (!token) {
          erroStatus = 422;
          throw new Error("Digite um token");
        }
        const result = await new UserData().deleteUser(id);
        res.status(200).send({ Result: result });
      } catch (error:any) {
        res.status(erroStatus).send(error.sqlMessage || error.message);
      }
    }

    async updatePassword(req: Request, res: Response) {
      let errorstatus = 500;
      try {
        const {id, password} = req.body;
        if (!id || !password) {
          errorstatus = 422;
          throw new Error("Parametro id e password são obrigatórios");
        }
  
        if (!id) {
          errorstatus = 422;
          throw new Error("Parametro id e obrigatório");}
        const result = await new UserData().updatePassword(
          id,
          password,
        );
        res.status(201).send(result);
      } catch (error:any) {
        res.status(errorstatus).send(error.message || error.sqlMessage);
      }
    }
}


// Rotas 

export const userRouter = express.Router()

const userController = new UserController()


userRouter.get('/profiles', userController.getAllUsers)
userRouter.get('/profile/:id', userController.getProfileById)
userRouter.get('/userid/:email', userController.getIdUserByEmail)
userRouter.get('/profile', userController.getProfile)
userRouter.post('/signup', userController.signUpUser)
userRouter.post('/login', userController.loginUser)
userRouter.put('/updateuser',userController.updateProfile)
userRouter.put('/updatepassword/:id',userController.updatePassword)
userRouter.delete('/deleteuser/:id', userController.deleteAccount)
