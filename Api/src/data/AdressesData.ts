import { Recipe } from "../models/Adresses";
import { DataBase } from "./DataBase";

export class RecipeData extends DataBase {
  async createRecipe(recipe: Recipe) {
    try {
      await this.getConnection().from("Recipes").insert({
        id: recipe.getId(),
        title: recipe.getTitle(),
        description: recipe.getDescription(),
        created: recipe.getCreated(),
        user_id: recipe.getUserId(),
      });
      return "Receita criado com sucesso";
    } catch (error:any) {
      return error.sqlMessage || error.message;
    }
  }

  async getRecipe(id: string) {
    try {
      const result = await this.getConnection()
        .select("id", "title", "description", "created")
        .from("Recipes")
        .where("id", "LIKE", `%${id}%`);
      return result;
    } catch (error:any) {
      return error.sqlMessage;
    }
  }

  async getUserRecipeFeed(id: string) {
    try {
      const result = await this.getConnection()
        .from("Follow")
        .select(
          "Recipes.id",
          "title",
          "description",
          "created",
          "Recipes.user_id",
          "User.name"
        )
        .innerJoin("Recipes", "Follow.user_to_follow_id", "Recipes.user_id")
        .innerJoin("User", "User.id", "Follow.user_to_follow_id")
        .where("Follow.user_id", "LIKE", `%${id}%`);

      if (result.length < 1) {
        throw new Error("Você ainda não segue essa pessoa");
      }

      return result;
    } catch (error:any) {
      return error.sqlMesage;
    }
  }

  async updateRecipe(
    idUser: string,
    id: string,
    title?: string,
    description?: string
  ) {
    try {
      const result = await this.getConnection()
        .from("Recipes")
        .select()
        .where("id", "LIKE", `${id}`);

      if (result.length === 0) {
        throw new Error("Receita não encontrada");
      }
      await this.getConnection()
        .from("Recipes")
        .update({
          title,
          description,
        })
        .where("user_id", "LIKE", `${idUser}`)
        .andWhere("id", "LIKE", `${id}`);

      return "Receita alterada com sucesso";
    } catch (error:any) {
      return error.sqlMessage || error.message;
    }
  }

  async deletRecipe(token: string, id: string) {
    try {
      const result = await this.getConnection()
        .from("Recipes")
        .select()
        .where("id", id);

      if (result.length === 0) {
        throw new Error("Receita não encontrada");
      }
      await this.getConnection()
        .from("Recipes")
        .delete()
        .where("user_id", "LIKE", `${token}`)
        .andWhere("id", "LIKE", `${id}`);

      return "Receita deletada com sucesso";
    } catch (error:any) {
      return error.sqlMessage || error.message;
    }
  }
}