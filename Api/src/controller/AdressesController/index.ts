import express from "express";
import { Request, Response} from "express";
import { AdressesData } from "../../data/AdressesData";
import { Adresses } from "../../models/AdressesModel";
import { GenerateId } from "../../services/GenerateId";

export class AdressesController {

// Criar endereço do usuário
  async postAdresses(req: Request, res: Response) {
    let errorstatus = 500;
    try {
      const id = new GenerateId().generateId();
      const user_id = req.params.id;
      const {  
        cep,
        street,
        district,
        city,
        complement,
        state,
        number } = req.body;
      if ( !cep|| !street || !district || !city || !number  || !user_id  || !number) {
        errorstatus = 422;
        throw new Error("Digite os parametros necessarios ");
      }
      const newAdresses = new Adresses(
        id,
        cep,
        street,
        district,
        city,
        complement,
        state,
        number,
        user_id
      );
      const adressesData = new AdressesData();
      const result = await adressesData.createAdresses(newAdresses);
      console.log(result);
      res.status(202).send({ result: result });
    } catch (error:any) {
      res.status(errorstatus).send(error.message || error.sqlMessage);
    }
  }

// Pegar todos os endereços do usuário

  async getAllAdressesByUser(req: Request, res: Response) {
    let errorstatus = 500;
    const user_id = req.params.id;
    try {
      const [adresses] = await new AdressesData().getAllAdressesByUser(user_id);
      const result = {
        cep: adresses.cep,
        street: adresses.street,
        district: adresses.district,
        city: adresses.city,
        complement: adresses.complement,
        number: adresses.number,
        state: adresses.number,
      };
      res.status(200).send({ Result: result });
    } catch (error:any) {
      res.status(errorstatus).send(error.message || error.sqlMessage);
    }
  }

//  Editar Endereço

  async updateAdresses(req: Request, res: Response) {
    let errorstatus = 500;
    try {
      const { 
        id,
        cep,
        street,
        district,
        city,
        complement,
        number,
        userId,
        state, } = req.body;
      if (!id) {
        errorstatus = 422;
        throw new Error("Parâmetro id é obrigatório");
      }
      const result = await new AdressesData().updateAdresses(
        id,
        cep,
        street,
        district,
        city,
        complement,
        number,
        userId,
        state,
      );

      res.status(201).send(result);
    } catch (error:any) {
      res.status(errorstatus).send(error.message || error.sqlMessage);
    }
  }

// Deletar Endereço

  async deleteAdresses(req: Request, res: Response) {
    let errorstatus = 500;
    try {
      const id = req.params.id;
      const result = await new AdressesData().deleteAdresses(id);
      res.status(200).send({ result: result });
    } catch (error:any) {
      res.status(errorstatus).send(error.message || error.sqlMessage);
    }
  }

}

// Rotas 

export const adressesRouter = express.Router()

const adressesController = new AdressesController()

adressesRouter.get('/adresses', adressesController.getAllAdressesByUser)
adressesRouter.post('/postadresses/:id', adressesController.postAdresses)
adressesRouter.put('/updateadresses', adressesController.updateAdresses)
adressesRouter.delete('/deleteadresses/:id', adressesController.deleteAdresses)