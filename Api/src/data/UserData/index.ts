import { User } from "../../models/UserModel";
import { Autheticator } from "../../services/Authenticator";
import { Users } from "../../types/types";
import { DataBase } from "../DataBase";

export class UserData extends DataBase {

  async signUpUser(user: User) {
    try {
      await this.getConnection().from("Lama_User").insert({
        id: user.getId(),
        cpf: user.getCpf(),
        data:user.getData(),
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
        role: user.getRole(),
      });
      const newtoken = new Autheticator();
      const token = newtoken.generateToken(user.getId());
      return token;
    } catch (error:any) {
      return error.sqlMesage || error.message;
    }
  }

  async loginUser(email: string) {
    try {
      const result = await this.getConnection()
        .select()
        .from("Lama_User")
        .where("email", "LIKE", `%${email}%`);
      return result;
    } catch (error:any) {
      return error.sqlMesage || error.message;
    }
  }

  async getAllUsers() {
    try {
      const users: Users[] = [];
      const result = await this.getConnection()
        .select("*")
        .from("Lama_User")
        for(let user of result){
          users.push(user);
        }

      return users;
    } catch (error:any) {
      return error.sqlMessage;
    }
  }

  async getProfile(id: string) {
    
    try {
      const users: Users[] = [];
      const result = await this.getConnection()
        .from("Lama_User")
        .select("*")
        .where("id", "LIKE", `%${id}%`);
        for(let user of result){
          users.push(user);
        }
      return users;
    } catch (error:any) {
      return error.sqlMesage || error.message;
    }
  }

  async getProfileById(id: string) {
    try {
      const result = await this.getConnection()
        .from("Lama_User")
        .select("id", "name", "cpf", "data", "email", "role")
        .where("id", "LIKE", `%${id}%`);
      return result;
    } catch (error:any) {
      return error.sqlMesage || error.message;
    }
  }

  async getIdUserByEmail(email: string) {
    try {
      const result = await this.getConnection()
        .from("Lama_User")
        .select("id")
        .where("email", "LIKE", `%${email}%`);
      return result;
    } catch (error:any) {
      return error.sqlMesage || error.message;
    }
  }

  public getProfileByEmail = async (email: string) => {
    try {
      const result = await this.getConnection()
        .from("Lama_User")
        .select()
        .where({email});
      return result[0];
    } catch (error:any) {
      return error.sqlMesage || error.message;
    }
  };


  async updateUser(
    id: string,
    name: string,
    cpf: string,
    data: string,
    email:string
  ) {
    try {
      const result = await this.getConnection()
        .from("Lama_User")
        .select()
        .where("id", "LIKE", `${id}`);

      if (result.length === 0) {
        throw new Error("Usuário não encontrada");
      }
      await this.getConnection()
        .from("Lama_User")
        .update({
          name,
          cpf,
          data,
          email
        })
        .where("id", "LIKE", `${id}`)
      return "Alterações realizadas com sucesso";
    } catch (error:any) {
      return error.sqlMessage || error.message;
    }
  }

  async updatePassword(
    id: string,
    password: string,
  ) {
    try {
      const result = await this.getConnection()
        .from("Lama_User")
        .select()
        .where("id", "LIKE", `${id}`);

      if (result.length === 0) {
        throw new Error("Usuário não encontrada");
      }
      await this.getConnection()
        .from("Lama_User")
        .update({
         password
        })
        .where("id", "LIKE", `${id}`)
      return "Senha alterada com sucesso";
    } catch (error:any) {
      return error.sqlMessage || error.message;
    }
  }

  async deleteUser(token: string) {
    try {
      await this.getConnection()
        .from("Lama_User")
        .where("id", token)
        .delete();

      return "Conta deletada com sucesso";
    } catch (error:any) {
      return error.sqlMesage || error.message;
    }
  }
}