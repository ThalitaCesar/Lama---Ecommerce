import { Images, Product, Size } from "../../models/ProductModel";
import { AllImages, AllProducts, AllSizes } from "../../types/types";
import { DataBase } from "../DataBase";

export class ProductData extends DataBase {
  
    async createProduct(product: Product) {
      try {
          await this.getConnection().from("Lama_Product").insert({
          id: product.getId(),
          name: product.getName(),
          price: product.getPrice(),
          description: product.getDescription(),
          created: product.getCreated(),
          category: product.getCategory(),
          folder: product.getFolder(),
        });
        return "Produto criado com sucesso";
      } catch (error:any) {
        return error.sqlMessage || error.message;
      }
    }

    async getAllProducts(page: number, perPage: number, query?: string) {
      try {
        const products: AllProducts[] = [];
        let queryBuilder = this.getConnection()
          .select("*")
          .from("Lama_Product")
          .limit(perPage)
          .offset((page - 1) * perPage);
    
        if (query) {
          queryBuilder = queryBuilder.where("name", "LIKE", `%${query}%`);
        }
    
        const result = await queryBuilder;
    
        for (let product of result) {
          products.push(product);
        }
    
        const totalCount = await this.getTotalCountAllProducts(query);
    
        return { products, totalCount };
      } catch (error: any) {
        return error.sqlMessage;
      }
    }
    
    async getTotalCountAllProducts(query?: string) {
      try {
        const queryBuilder = this.getConnection().count("* as TotalCount").from("Lama_Product");
    
        if (query) {
          queryBuilder.where("name", "LIKE", `%${query}%`);
        }
    
        const result = await queryBuilder;
        return result[0].TotalCount;
      } catch (error: any) {
        return error.sqlMessage;
      }
    }

    async getProductByCategory(page: number, perPage: number, category: string) {
      try {
        const products: AllProducts[] = [];
        const queryBuilder = this.getConnection()
          .select("*")
          .from("Lama_Product")
          .where("category", "=", category)
          .limit(perPage)
          .offset((page - 1) * perPage);
        const result = await queryBuilder;
        for (let product of result) {
          products.push(product);
        }
        return products;
      } catch (error: any) {
        return error.sqlMessage;
      }
    }
    
    async getTotalCountByCategory(category: string) {
      try {
        const queryBuilder = this.getConnection().count("* as TotalCount").from("Lama_Product").where("category", "=", category);
        const result = await queryBuilder;
        return result[0].TotalCount;
      } catch (error: any) {
        return error.sqlMessage;
      }
    }
    
    

  async getAllProductById(id: string) {
    try {
      const result = await this.getConnection()
      .select("*")
      .from("Lama_Product")
      .where("id","like", `%${id}%`)
        return result;
    } catch (error:any) {
      return error.sqlMessage;
    }
  }

  async updateProduct(
    id: string,
    name: string,
    price: string,
    description: string,
    category: string,
    folder: string,
  ) {
    try {
      const result = await this.getConnection()
        .from("Lama_Product")
        .select()
        .where("id", "LIKE", `${id}`);

      if (result.length === 0) {
        throw new Error("Produto não encontrado");
      }
      await this.getConnection()
        .from("Lama_Product")
        .update({
            id,
            name,
            price,
            description,
            category,
            folder,
        })
        .where("id", "LIKE", `${id}`);

      return "Produto alterado com sucesso";
    } catch (error:any) {
      return error.sqlMessage || error.message;
    }
  }

  async deleteProduct( id: string) {
    try {
      const result = await this.getConnection()
        .from("Lama_Product")
        .select()
        .where("id", id);

      if (result.length === 0) {
        throw new Error("Produto não encontrado");
      }
      await this.getConnection()
        .from("Lama_Product")
        .delete()
        .where("id", "LIKE", `${id}`);

      return "Produto deletado com sucesso";
    } catch (error:any) {
      return error.sqlMessage || error.message;
    }
  }
};

export class ImageData extends DataBase {
    async createImage(images: Images) {
      try {
         await this.getConnection().from("Lama_Images").insert({
          id: images.getId(),
          photos: images.getPhotos(),
          product_id: images.getProductId(),
        });
        return "Imagem adicionada com sucesso";

      } catch (error:any) {
        return error.sqlMessage || error.message;
      }
    }

  async getAllImagesForProduct(product_id: string) {
    try {
      const images: AllImages[] = [];
      const result = await this.getConnection()
        .select("id", "photos")
        .from("Lama_Images")
        .where("product_id", "LIKE", `${product_id}`)
        for(let image of result){
          images.push(image);
  }
      return result;
    } catch (error:any) {
      return error.sqlMessage;
    }
  }


  async deleteImage( id: string) {
    try {
      const result = await this.getConnection()
        .from("Lama_Images")
        .select()
        .where("id", id);

      if (result.length === 0) {
        throw new Error("Imagem não encontrada");
      }
      await this.getConnection()
        .from("Lama_Images")
        .delete()
        .where("id", "LIKE", `${id}`);

      return "Imagem deletada com sucesso";
    } catch (error:any) {
      return error.sqlMessage || error.message;
    }
  }
}

export class SizeData extends DataBase {

    async createSize(size: Size) {
      try {
          await this.getConnection().from("Lama_Size").insert({
          id: size.getId(),
          sizes: size.getSizes(),
          product_id: size.getProductId(),
        });
        return "Tamanho adicionado com sucesso";
      } catch (error:any) {
        return error.sqlMessage || error.message;
      }
    }

  async getAllSizesForProduct(product_id: string) {
    try {
      const sizes: AllSizes[] = [];
      const result = await this.getConnection()
        .select("id", "sizes")
        .from("Lama_Size")
        .where("product_id", "LIKE", `${product_id}`) 
        for(let size of result){
          sizes.push(size);
  }
      return result;
    } catch (error:any) {
      return error.sqlMessage;
    }
  }


  async deleteSize( id: string) {
    try {
      const result = await this.getConnection()
        .from("Lama_Size")
        .select()
        .where("id", id);

      if (result.length === 0) {
        throw new Error("Tamanho não encontrado");
      }
      await this.getConnection()
        .from("Lama_Size")
        .delete()
        .where("id", "LIKE", `${id}`);

      return "Tamanho deletado com sucesso";
    } catch (error:any) {
      return error.sqlMessage || error.message;
    }
  }
}