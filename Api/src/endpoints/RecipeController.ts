import { Request, Response, Router } from "express";
import { RecipeData } from "../data/RecipeData";
import { Recipe } from "../models/Adresses";
import { ROLES } from "../models/User";
import { Autheticator } from "../services/Authenticator";
import { CorrectDate } from "../services/CorrectData";
import { GenerateId } from "../services/GenerateId";


export class RecipeController {
  async createRecipe(req: Request, res: Response) {
    let errorstatus = 500;
    try {
      const id = new GenerateId().generateId();
      const token = req.headers.authorization as string;
      const { title, description } = req.body;

      if (!token || !title || !description) {
        errorstatus = 422;
        throw new Error("Digite os parametros necessarios ");
      }

      const authenticator = await new Autheticator().getTokenData(token);
      if (authenticator.roles !== ROLES.NOMAL) {
        errorstatus = 401;
        throw new Error("usuario não autorizado");
      }

      const date = new Date().toLocaleDateString("pt-BR");
      const correctDate = new CorrectDate().sendDate(date);

      const newRecipe = new Recipe(
        id,
        title,
        description,
        correctDate,
        authenticator.id
      );
      const result = await new RecipeData().createRecipe(newRecipe);

      res.status(201).send({ result: result });
    } catch (error:any) {
      res.status(errorstatus).send(error.message || error.sqlMessage);
    }
  }

  async getRecipe(req: Request, res: Response) {
    let errorstatus = 500;

    try {
      const id = req.params.id as string;
      const token = req.headers.authorization as string;
      const authenticator = new Autheticator().getTokenData(token);
      if (!token || !id) {
        errorstatus = 422;
        throw new Error("Digite os parametros necessarios");
      }
      if (authenticator.roles !== ROLES.NOMAL) {
        errorstatus = 401;
        throw new Error("Usuario não autorizado");
      }
      const [recipe] = await new RecipeData().getRecipe(id);
      const date = new CorrectDate().currentDateFormatted(recipe.created);
      const result = {
        id: recipe.id,
        title: recipe.title,
        description: recipe.description,
        created: date,
      };

      res.status(200).send({ Result: result });
    } catch (error:any) {
      res.status(errorstatus).send(error.message || error.sqlMessage);
    }
  }

  async getUserRecipeFeed(req: Request, res: Response) {
    let erroStatus = 500;
    try {
      const token:any = req.headers.authorization;
      const authenticator = new Autheticator().getTokenData(token);
      if (
        !token ||
        (authenticator.roles !== ROLES.NOMAL &&
          authenticator.roles !== ROLES.ADMIN)
      ) {
        erroStatus = 401;
        throw new Error("Token invalido");
      }
      const [recipes] = await new RecipeData().getUserRecipeFeed(
        authenticator.id
      );

      res.status(200).send({ recipe: recipes });
    } catch (error:any) {
      res.status(erroStatus).send(error.sqlMessage || error.message);
    }
  }

  async updateRecipe(req: Request, res: Response) {
    let errorstatus = 500;

    try {
      const { id, title, description } = req.body;
      const token = req.headers.authorization;
      if (!token) {
        errorstatus = 401;
        throw new Error("Digite um token");
      }
      if (!id) {
        errorstatus = 422;
        throw new Error("Parametro id e obrigatori");
      }
      const authenticator = new Autheticator().getTokenData(token);
      if (
        authenticator.roles !== ROLES.NOMAL &&
        authenticator.roles !== ROLES.ADMIN
      ) {
        errorstatus = 401;
        throw new Error("Token invalido");
      }

      const result = await new RecipeData().updateRecipe(
        authenticator.id,
        id,
        title,
        description
      );

      res.status(201).send(result);
    } catch (error:any) {
      res.status(errorstatus).send(error.message || error.sqlMessage);
    }
  }

  async deletRecipe(req: Request, res: Response) {
    let errorstatus = 500;

    try {
      const token:any = req.headers.authorization;
      const id = req.params.id;
      const authenticator = new Autheticator().getTokenData(token);
      if (!token || authenticator.roles !== ROLES.NOMAL) {
        errorstatus = 401;
        throw new Error("Digite um token valido");
      }
      const result = await new RecipeData().deletRecipe(authenticator.id, id);
      res.status(200).send({ result: result });
    } catch (error:any) {
      res.status(errorstatus).send(error.message || error.sqlMessage);
    }
  }
}