import { Request, Response } from "express";
import { FollowerData } from "../data/FollowData";
import { Autheticator } from "../services/Authenticator";


export class FollowerController {
  async followUser(req: Request, res: Response) {
    let errorStatus = 500;
    try {
      const { userToFollowId } = req.body;
      const token = req.headers.authorization as string;
      const authenticator = new Autheticator().getTokenData(token);

      if (!userToFollowId || !token) {
        errorStatus = 422;
        throw new Error("Digite os parametros necessarios");
      }

      const result = await new FollowerData().followUser(
        authenticator.id,
        userToFollowId
      );

      res.status(200).send({ Result: result });
    } catch (error:any) {
      res.status(errorStatus).send(error.message || error.sqlMessage);
    }
  }

  async unfollowUser(req: Request, res: Response) {
    let errorStatus = 500;
    try {
      const { userToFollowId } = req.body;
      const token = req.headers.authorization as string;
      const authenticator = new Autheticator().getTokenData(token);

      if (!userToFollowId || !token) {
        errorStatus = 422;
        throw new Error("Digite os parametros necessarios");
      }

      const result = await new FollowerData().unfollowUser(
        authenticator.id,
        userToFollowId
      );

      res.status(200).send({ Result: result });
    } catch (error:any) {
      res.status(errorStatus).send(error.message || error.sqlMessage);
    }
  }
}