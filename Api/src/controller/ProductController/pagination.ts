// import { Request, Response } from "express";
// import { DataBase } from "../../data/DataBase";
// import { product } from "../../types/types";


// export class Pagination extends DataBase {

// async getAllProductsByOrder (
//   req: Request,
//   res: Response
// ): Promise<void> {
//   let statusCode
//   try {
//     let name = req.query.name as string
//     let sort = req.query.sort as string
//     let order = req.query.order as string
//     let size = Number(req.query.size)
//     let page = Number(req.query.page) 

//     if(!name){
//       name = "%"
//     }

//     if(sort !== "name" && sort !== "created" ){
//       sort = "name"
//     } 

//     if(sort=== "created"){
//       sort = "created"
//     }
    
//     if(order?.toUpperCase() !== "ASC" || order?.toUpperCase() !== "DESC"){
//       order = "ASC"
//     }

//     if(isNaN(size) || size < 1){
//       size = 6
//     }

//     if(isNaN(page) || page <1){
//       page = 1
//     }

//     let offset = size*(page-1)
//     const result = await this.getConnection().from("Lama_Product")
//     .where("name", "like", `%${name}%`)
//     .orderBy(sort, order)
//     .limit(size)
//     .offset(offset)

//     console.log("tamanho da página:", result.length )
//     if(result.length < 1){
//       statusCode = 404
//       throw new Error("Nenhuma receita encontrada")
//     }

//     const toProduct = (input: any): product => {
//         return {
//           id: input.id,
//           name: input.name,
//           description: input.description,
//           price: input.price,
//           created: input.created,
//           category: input.category,
//         };
//       };
//     const products = result.map(toProduct);

//     res.status(200).send(products);
//   } catch (error: any) {
//     res.status(statusCode || 400).send(error.message);
//   }
// }
// }
