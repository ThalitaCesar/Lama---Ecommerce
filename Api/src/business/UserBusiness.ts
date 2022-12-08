import { UserData } from "../data/UserData";
import { CustomError, InvalidEmail, InvalidName, InvalidPassword, Unauthorized, UserNotFound } from "../error/customError";
import {
  UserInputDTO,
  user,
  EditUserInputDTO,
  LoginInputDTO,
  EditPasswordInputDTO,
} from "../types/user";
import { HashManager } from "../services/HashManager";
import { GenerateId } from "../services/GenerateId";
import { Autheticator } from "../services/Authenticator";


const idGenerator = new GenerateId()
const tokenGenerator = new Autheticator()
const userDatabase = new UserData();
const hashManager = new HashManager()

export class UserBusiness {
  public createUser = async (input: UserInputDTO): Promise<string> => {
    try {
      const { name, cpf, data, email, password, role } = input;

      if (!name || !cpf  || !data || !email ||  !password ||  !role) {
        throw new CustomError(
          400,
          'Preencha os campos'
        );
      }

      if (name.length < 4) {
        throw new InvalidName();
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const id: string = idGenerator.generateId()

      const hashPassword = await hashManager.generateHash(password)
      // hashPassword: $2a$12$dUVoq2Zb7BbHNhS.awWxUu2K39F71jmPh27eUt.hsAWGGcJpqbcmC

      const user: user = {
        id,
        name,
        cpf,
        data,
        email,
        role,
        password: hashPassword,
      };
   
      await userDatabase.signUpUser(user);
      const token = tokenGenerator.generateToken(id)

      return token
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public login = async (input: LoginInputDTO): Promise<string> => {
    try {
      const { email, password } = input;
    
      if (!email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "email" e "password"'
        );
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const user = await userDatabase.getProfileByByEmail(email);

      if (!user) {
        throw new UserNotFound()
      }

      const hashCompare = await hashManager.compareHash(password, user.password)

      if(!hashCompare){ 
        throw new InvalidPassword()
      }

      const token = tokenGenerator.generateToken(user.id)
     
      return token
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public editUser = async (input: EditUserInputDTO) => {
    try {
      const { name, cpf, data, id, token } = input;

      if (!name || !cpf  || !data || !id || !token) {
        throw new CustomError(
          400,
          'Preencha os campos'
        );
      }

      const dataUser = tokenGenerator.tokenData(token)

      if(!dataUser.id) {
        throw new Unauthorized()
      }

      if (name.length < 4) {
        throw new InvalidName();
      }

      const userData = new UserData();
      await userData.updateUser( 
        id,
        name,
        cpf,
        data
        );
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public editPassword = async (input: EditPasswordInputDTO) => {
    try {
      const { password, id, token } = input;

      if ( !password|| !id || !token) {
        throw new CustomError(
          400,
          'Preencha os campos'
        );
      }

      const dataUser = tokenGenerator.tokenData(token)

      if(!dataUser.id) {
        throw new Unauthorized()
      }

      const userData = new UserData();
      await userData.updatePassword( 
        password,
        id,
        );
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}



