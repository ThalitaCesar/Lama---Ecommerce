
export type AuthenticationData = {
   id: string;
   roles: string;
 };


 export type AllProducts = {
  id: string;
  name: string;
  description: string;
  price:string;
  created: string;
  category: string;
  folder: string;
}

export type AllImages = {
  id: string;
  photos: string;
}

export type AllSizes = {
  id: string;
  sizes: string;
}


export type Users ={
  id: string;
  name: string;
  email: string;
  data:string;
  cpf: string;
  password: string;
  role: string;
}

export type Adresses ={
  id: string;
  cep: string;
  street: string;
  city:string;
  complement: string;
  number: string;
  user_id: string;
  state: string;
}
