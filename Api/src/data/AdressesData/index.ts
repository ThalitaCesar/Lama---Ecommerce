import { Adresses } from "../../models/AdressesModel";
import { DataBase } from "../DataBase";


export class AdressesData extends DataBase {


  async createAdresses(adresses: Adresses) {
      try {
        await this.getConnection().from("Lama_Adresse").insert({
          id: adresses.getId(),
          cep: adresses.getCep(),
          street: adresses.getStreet(),
          district: adresses.getDistrict(),
          state: adresses.getState(),
          number: adresses.getNumber(),
          city: adresses.getCity(),
          complement: adresses.getComplement(),
          user_id: adresses.getUserId(),
        });
        return "Imagem adicionada com sucesso";
      } catch (error:any) {
        return error.sqlMessage || error.message;
      }
  }

  async getAllAdressesByUser(user_id: string) {
    try {
      const result = await this.getConnection()
        .select("id", "cep", "street", "district", "number", "complement", "city", "state")
        .from("Lama_Adresse")
        .where("user_id", "LIKE", `%${user_id}%`);
      return result;
    } catch (error:any) {
      return error.sqlMessage;
    }
  }

  async updateAdresses(
    user_id: string,
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
        .from("Lama_Adresse")
        .select()
        .where("id", "LIKE", `${id}`);

      if (result.length === 0) {
        throw new Error("Endereço não encontrado");
      }
      await this.getConnection()
        .from("Lama_Adresse")
        .update({
          cep,
          street,
          district,
          city,
          number,
          state,
          complement,
        })
        .where("user_id", "LIKE", `${user_id}`)
        .andWhere("id", "LIKE", `${id}`);

      return "Endereço alterado com sucesso";
    } catch (error:any) {
      return error.sqlMessage || error.message;
    }
  }

  async deleteAdresses( id: string) {
    try {
      const result = await this.getConnection()
        .from("Lama_Adresse")
        .select()
        .where("id", id);

      if (result.length === 0) {
        throw new Error("Endereço não encontrada");
      }
      await this.getConnection()
        .from("Lama_Adresse")
        .delete()
        .where("id", "LIKE", `${id}`);

      return "Endereço deletado com sucesso";
    } catch (error:any) {
      return error.sqlMessage || error.message;
    }
  }
}