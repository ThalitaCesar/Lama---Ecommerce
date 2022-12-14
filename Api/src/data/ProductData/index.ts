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

  async getAllProducts() {
    try {
      const products: AllProducts[] = [];
      const result = await this.getConnection()
      .select("*")
      .from("Lama_Product")
      for(let product of result){
        products.push(product);
}
      return products;
    } catch (error:any) {
      return error.sqlMessage;
    }
  }

  async getAllProductById(id: string) {
    try {
      const products: AllProducts[] = [];
      const result = await this.getConnection()
      .select("*")
      .from("Lama_Product")
      .where("id","like", `%${id}%`)
        for(let product of result){
          products.push(product);
  }
        return products;
    } catch (error:any) {
      return error.sqlMessage;
    }
  }

  async getAllProductByCategory(category: string) {
    try {
      const products: AllProducts[] = [];
      const result = await this.getConnection()
        .select("*")
        .from("Lama_Product")
        .where("category","like",`%${category}%`);
        for(let product of result){
          products.push(product);
  }
        return products;
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
        throw new Error("Produto n??o encontrado");
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
        throw new Error("Produto n??o encontrado");
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
        throw new Error("Imagem n??o encontrada");
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
        throw new Error("Tamanho n??o encontrado");
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