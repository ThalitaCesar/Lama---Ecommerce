import { Images, Product, Size } from "../models/Products";
import { DataBase } from "./DataBase";

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
        });
        return "Produto criado com sucesso";
      } catch (error:any) {
        return error.sqlMessage || error.message;
      }
    }

  async getAllProducts() {
    try {
      const result = await this.getConnection()
        .select("id", "name", "description", "price", "description", "created", "category")
        .from("Lama_Product")
      return result;
    } catch (error:any) {
      return error.sqlMessage;
    }
  }

  async getAllProductById(id: string) {
    try {
      const result = await this.getConnection()
        .select("id", "name", "description", "price", "description", "created", "category")
        .from("Lama_Product")
        .where("id", "LIKE", `%${id}%`);
      return result;
    } catch (error:any) {
      return error.sqlMessage;
    }
  }

  async updateProduct(
    id: string,
    price: string,
    name: string,
    category: string,
    description?: string,
  ) {
    try {
      const result = await this.getConnection()
        .from("Lama_Product")
        .select()
        .where("id", "LIKE", `${id}`);

      if (result.length === 0) {
        throw new Error("Receita não encontrada");
      }
      await this.getConnection()
        .from("Lama_Product")
        .update({
            id,
            price,
            name,
            description,
            category,
        })
        .where("id", "LIKE", `${id}`);

      return "Produto alterado com sucesso";
    } catch (error:any) {
      return error.sqlMessage || error.message;
    }
  }

  async deletProduct( id: string) {
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
      const result = await this.getConnection()
        .select("id", "photos")
        .from("Lama_Images")
        .where("product_id", "LIKE", `${product_id}`)
      return result;
    } catch (error:any) {
      return error.sqlMessage;
    }
  }


  async deletImage( id: string) {
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
    async createImage(size: Size) {
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
      const result = await this.getConnection()
        .select("id", "sizes")
        .from("Lama_Size")
        .where("product_id", "LIKE", `${product_id}`)
      return result;
    } catch (error:any) {
      return error.sqlMessage;
    }
  }


  async deletSize( id: string) {
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