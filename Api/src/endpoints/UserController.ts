import { Request, Response } from "express";
import { ROLES, User } from "../models/User";
import { UserData } from "../data/UserData";
import { GenerateId } from "../services/GenerateId";
import { HashManager } from "../services/HashManeger";
import { Autheticator } from "../services/Authenticator";

export class UserController {
  async signUpUser(req: Request, res: Response) {
    let erroStatus = 500;
    try {
      const { name, email, password, role } = req.body;
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
      const newPassword = await new HashManager().hash(password);
      const newUser = new User(id, name, email, newPassword, role);
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

      const validHash = new HashManager();
      const newPassword = validHash.compareHash(password, result.password);
      console.log(newPassword);

      if (!newPassword) {
        erroStatus = 401;
        throw new Error("Senha inválida");
      }

      const authenticator = new Autheticator().generateToken({
        id: result.id,
        roles: result.role,
      });
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
      const newtoken = new Autheticator().getTokenData(token);
      if (newtoken.roles !== ROLES.NOMAL) {
        erroStatus = 401;
        throw new Error(
          "Usuário sem permissão, somente usuário com role = NORMAL, podem ter acesso a esse edpoint"
        );
      }
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
      const newtoken = new Autheticator().getTokenData(token);
      if (newtoken.roles !== ROLES.ADMIN) {
        erroStatus = 403;
        throw new Error(
          "Usuário sem permissão, somente usuário com role = ADMIN, podem ter acesso a esse edpoint"
        );
      }
      const [result] = await new UserData().getProfile(id);
      res.status(200).send({ result: result });
    } catch (error:any) {
      res.status(erroStatus).send(error.sqlMessage || error.message);
    }
  }

  async deletAccount(req: Request, res: Response) {
    let erroStatus = 500;
    try {
      const token:any = req.headers.authorization;
      const newtoken = new Autheticator().getTokenData(token);
      if (!token) {
        erroStatus = 422;
        throw new Error("Digite um token");
      }
      if (newtoken.roles !== ROLES.ADMIN) {
        erroStatus = 401;
        throw new Error("Usuario não autorizado");
      }
      const result = await new UserData().deletUser(newtoken.id);
      res.status(200).send({ Result: result });
    } catch (error:any) {
      res.status(erroStatus).send(error.sqlMessage || error.message);
    }
  }
}