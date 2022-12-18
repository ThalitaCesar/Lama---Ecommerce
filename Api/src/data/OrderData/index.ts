import { Order } from "../../models/OrderModel";
import { AllOrderByUser } from "../../types/types";
import { DataBase } from "../DataBase";

export class OrderData extends DataBase {
  
    async createOrder(product: Order) {
      try {
          await this.getConnection().from("Lama_OrderUser").insert({
          id: product.getId(),
          name: product.getName(),
          folder: product.getFolder(),
          size: product.getSize(),
          price: product.getPrice(),
          user_id: product.getUserId(),
        });
        return "Pedido criado com sucesso";
      } catch (error:any) {
        return error.sqlMessage || error.message;
      }
    }

  async getAllOrderByUser(userId: string) {
    try {
      const orders: AllOrderByUser[] = [];
      const result = await this.getConnection()
      .select("*")
      .from("Lama_OrderUser")
      .where("user_id", "like", `${userId}`);
      for(let order of result){
        orders.push(order);
}
      return orders;
    } catch (error:any) {
      return error.sqlMessage;
    }
  }


  async deleteOrder( id: string) {
    try {
      const result = await this.getConnection()
        .from("Lama_OrderUser")
        .select()
        .where("id", id);

      if (result.length === 0) {
        throw new Error("Pedido não encontrado");
      }
      await this.getConnection()
        .from("Lama_OrderUser")
        .delete()
        .where("id", "LIKE", `${id}`);

      return "Pedido deletado com sucesso";
    } catch (error:any) {
      return error.sqlMessage || error.message;
    }
  }
};
