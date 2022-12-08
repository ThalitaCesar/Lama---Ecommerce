export enum ROLES {
    ADMIN = "ADMIN",
    NOMAL = "NORMAL",
  }

export type user = {
    id: string
    email: string
    password: string
    name: string
    cpf: string,
    data: string,
    role: ROLES
 }
 
 export interface UserInputDTO {
    name: string,
    cpf: string,
    data: string,
    email: string,
    password: string,
    role: ROLES
 }
 
 export interface LoginInputDTO {
    email: string,
    password: string
 }
 
 export interface EditUserInputDTO {
    name: string,
    cpf: string,
    data: string,
    id: string,
    token: string
 }

 export interface EditPasswordInputDTO{
    id: string,
    password:string,
    token: string
 }
 
 export interface EditUserInput {
    name: string,
    cpf: string,
    data: string,
    id: string
 }
 
