
import { ProductRequest } from "../models/Request";
import { DataBase } from "./DataBase";

export class CartData extends DataBase {
  async createCart(cart: ProductRequest) {
    try {
      await this.getConnection().from("Lama_ProductRequestt").insert({
        id: cart.getId(),
        product_id: cart.getProductId(),
        user_id: cart.getUserId(),
      });
      return "Pedido criado com sucesso";
    } catch (error:any) {
      return error.sqlMessage || error.message;
    }
  }

  async getRequestsByUser(user_id: string) {
    try {
      const result = await this.getConnection()
        .from("Lama_ProductRequest")
        .select("id", "product_id", "user_id")
        .innerJoin("Product", "Product.name", "Product.price")
        .where("user_id", "LIKE", `${user_id}`);
      return result;
    } catch (error:any) {
      return error.sqlMessage;
    }
  }


  async deleteRequest(token: string, id: string) {
    try {
      const result = await this.getConnection()
        .from("Lama_ProductRequest")
        .select()
        .where("id", id);

      if (result.length === 0) {
        throw new Error("Pedido não encontrada");
      }
      await this.getConnection()
        .from("Lama_ProductRequest")
        .delete()
        .where("user_id", "LIKE", `${token}`)
        .andWhere("id", "LIKE", `${id}`);

      return "Pedido deletado com sucesso";
    } catch (error:any) {
      return error.sqlMessage || error.message;
    }
  }
}