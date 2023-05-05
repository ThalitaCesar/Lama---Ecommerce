import { Adresses } from "../../models/AdressesModel";
import { GetAllAdresses } from "../../types/types";
import { DataBase } from "../DataBase";


export class AdressesData extends DataBase {


  async createAdresses(adresses: Adresses) {
      try {
        await this.getConnection().from("Lama_Adresse").insert({
          id: adresses.getId(),
          cep: adresses.getCep(),
          street: adresses.getStreet(),
          district: adresses.getDistrict(),
          number: adresses.getNumber(),
          city: adresses.getCity(),
          state: adresses.getState(),
          complement: adresses.getComplement(),
          user_id: adresses.getUserId(),
        });
        return "Endereço adicionado com sucesso";
      } catch (error:any) {
        return error.sqlMessage || error.message;
      }
  }

  async getAllAdressesByUser(user_id: string) {
    try {
      const adresses: GetAllAdresses[] = [];
      const result = await this.getConnection()
        .select("*")
        .from("Lama_Adresse")
        .where("user_id", "LIKE", `%${user_id}%`);
        for(let adresse of result){
          adresses.push(adresse);
  }
        return adresses;
    } catch (error:any) {
      return error.sqlMessage;
    }
  }

  async updateAdresses(
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
        .where("id", "LIKE", `${id}`)

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