import { Adresses } from "../models/Adresses";
import { DataBase } from "./DataBase";


export class AdressesData extends DataBase {
  async createAdresses(adresses: Adresses) {
    try {
      await this.getConnection().from("Adresses").insert({
        id: adresses.getId(),
        cep: adresses.getCep(),
        streat: adresses.getStreet(),
        district: adresses.getDistrict(),
        state: adresses.getState(),
        number: adresses.getNumber(),
        city: adresses.getCity(),
        complement: adresses.getComplement(),
        user_id: adresses.getUserId(),
      });
      return "Endereço criado com sucesso";
    } catch (error:any) {
      return error.sqlMessage || error.message;
    }
  }

  async getAllAdressesByUser(user_id: string) {
    try {
      const result = await this.getConnection()
        .select("id", "cep", "street", "district", "number", "complement", "city", "state")
        .from("Lama_Adresses")
        .where("user_id", "LIKE", `%${user_id}%`);
      return result;
    } catch (error:any) {
      return error.sqlMessage;
    }
  }

  async updateAdresses(
    userId: string,
    id: string,
    cep: string,
    street: string,
    district: string,
    city: string,
    number: number,
    state: string,
    complement?:string
  ) {
    try {
      const result = await this.getConnection()
        .from("Lama_Adresses")
        .select()
        .where("id", "LIKE", `${id}`);

      if (result.length === 0) {
        throw new Error("Receita não encontrada");
      }
      await this.getConnection()
        .from("Lama_Adresses")
        .update({
          cep,
          street,
          district,
          city,
          number,
          state,
          complement,
        })
        .where("user_id", "LIKE", `${userId}`)
        .andWhere("id", "LIKE", `${id}`);

      return "Endereço alterado com sucesso";
    } catch (error:any) {
      return error.sqlMessage || error.message;
    }
  }

  async deleteAdresses(token: string, id: string) {
    try {
      const result = await this.getConnection()
        .from("Lama_Adresses")
        .select()
        .where("id", id);

      if (result.length === 0) {
        throw new Error("Endereço não encontrada");
      }
      await this.getConnection()
        .from("Lama_Adresses")
        .delete()
        .where("user_id", "LIKE", `${token}`)
        .andWhere("id", "LIKE", `${id}`);

      return "Endereço deletada com sucesso";
    } catch (error:any) {
      return error.sqlMessage || error.message;
    }
  }
}