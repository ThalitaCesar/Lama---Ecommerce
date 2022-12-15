import express from "express";
import { Request, Response} from "express";
import { ImageData, ProductData, SizeData } from "../../data/ProductData";
import { Images, Product, Size } from "../../models/ProductModel";
import { GenerateId } from "../../services/GenerateId";

export class ProductController {

// Criar produto
  async postProduct(req: Request, res: Response) {
    let errorstatus = 500;
    try {
      const id = new GenerateId().generateId();

      const { name, description, price, created,  category } = req.body;
      if ( !name|| !description || !price || !created || !category ) {
        errorstatus = 422;
        throw new Error("Digite os parametros necessarios ");
      }
      const newProduct = new Product(
        id,
        name,
        description,
        price,
        created,
        category
      );
      const productdata = new ProductData();
      const result = await productdata.createProduct(newProduct);
      console.log(result);
      res.status(202).send({ result: result });
    } catch (error:any) {
      res.status(errorstatus).send(error.message || error.sqlMessage);
    }
  }

// Pegar todos os produtos

  async getAllProducts(req: Request, res: Response): Promise<void> {
    let errorstatus = 500;
    try {
      const product = await new ProductData().getAllProducts();
      res.status(200).send({ Result: product });
    } catch (error:any) {
      res.status(errorstatus).send(error.message || error.sqlMessage);
    }
  }
//  Pegar produtos por id

  async getProductById(req: Request, res: Response) {
    let errorStatus = 500;
    const id = req.params.id as string;
    try {
      
      if ( !id) {
        errorStatus = 401;
        throw new Error("O parâmetro id é necessário");
      }
      const product = await new ProductData().getAllProductById(id);
      res.status(200).send({ Result: product });
    } catch (error:any) {
      res.status(errorStatus).send(error.message || error.sqlMessage);
    }
  }
// Pegar produto por categoria 

async getProductByCategory(req: Request, res: Response) {
  let errorStatus = 500;
  const category = req.params.id as string;
  try {
    if ( !category) {
      errorStatus = 401;
      throw new Error("A categoria é necessária");
    }
    const product = await new ProductData().getAllProductByCategory(category);
    res.status(200).send({ Result: product });
  } catch (error:any) {
    res.status(errorStatus).send(error.message || error.sqlMessage);
  }
}

//  Editar produto

  async updateProduct(req: Request, res: Response) {
    let errorstatus = 500;
    try {
      const { 
        id,
        name,
        price,
        description,
        category, } = req.body;
      if (!id) {
        errorstatus = 422;
        throw new Error("Parâmetro id é obrigatório");
      }
   
      const result = await new ProductData().updateProduct(
            id,
            name,
            price,
            description,
            category,
      );

      res.status(201).send(result);
    } catch (error:any) {
      res.status(errorstatus).send(error.message || error.sqlMessage);
    }
  }

// Deletar produto

  async deleteProduct(req: Request, res: Response) {
    let errorstatus = 500;
    try {
      const id = req.params.id;
      const result = await new ProductData().deleteProduct(id);
      res.status(200).send({ result: result });
    } catch (error:any) {
      res.status(errorstatus).send(error.message || error.sqlMessage);
    }
  }

  //  Postar imagens do produto

  async postImage(req: Request, res: Response) {
    let errorstatus = 500;
    try {
      const id = new GenerateId().generateId();
      const product_id = req.params.id;
      const { photos } = req.body;
      if ( !photos|| !id || !product_id) {
        errorstatus = 422;
        throw new Error("Digite os parametros necessarios ");
      }
      const newImage = new Images(
        id,
        photos,
        product_id,
      );
      const imagemdata = new ImageData();
      const result = await imagemdata.createImage(newImage);
      console.log(result);
      res.status(202).send({ result: result });
    } catch (error:any) {
      res.status(errorstatus).send(error.message || error.sqlMessage);
    }
  }

    //  Pegar imagens do produto

  async getImagesByProduct(req: Request, res: Response) {
    let errorstatus = 500;
    const product_id = req.params.id;
    try {
      const [images] = await new ImageData().getAllImagesForProduct(product_id);
      const result = {
        id: images.id,
        photos: images.photos,
      };
      res.status(200).send({ Result: result });
    } catch (error:any) {
      res.status(errorstatus).send(error.message || error.sqlMessage);
    }
  }

   //  Deletar imagens do produto

  async deleteImages(req: Request, res: Response) {
    let errorstatus = 500;
    try {
      const id = req.params.id;
      const result = await new ImageData().deleteImage(id);
      res.status(200).send({ result: result });
    } catch (error:any) {
      res.status(errorstatus).send(error.message || error.sqlMessage);
    }
  }

   //  Postar tamanhos do produto

  async postSize(req: Request, res: Response) {
    let errorstatus = 500;
    try {
      const id = new GenerateId().generateId();
      const product_id = req.params.id;
      const { sizes } = req.body;
      if ( !sizes|| !id || !product_id) {
        errorstatus = 422;
        throw new Error("Digite os parametros necessarios ");
      }
      const newSize = new Size(
        id,
        sizes,
        product_id,
      );
      const sizeData = new SizeData();
      const result = await sizeData.createSize(newSize);
      console.log(result);
      res.status(202).send({ result: result });
    } catch (error:any) {
      res.status(errorstatus).send(error.message || error.sqlMessage);
    }
  }

  //  Pegar tamanhos do produto

  async getSizesByProduct(req: Request, res: Response) {
    let errorstatus = 500;
    const product_id = req.params.id;
    try {
      const [sizes] = await new SizeData().getAllSizesForProduct(product_id);
      const result = {
        id: sizes.id,
        sizes: sizes.sizes,
      };
      res.status(200).send({ Result: result });
    } catch (error:any) {
      res.status(errorstatus).send(error.message || error.sqlMessage);
    }
  }

  //  Deletar tamanhos do produto

  async deleteSize(req: Request, res: Response) {
    let errorstatus = 500;
    try {
      const id = req.params.id;
      const result = await new SizeData().deleteSize(id);
      res.status(200).send({ result: result });
    } catch (error:any) {
      res.status(errorstatus).send(error.message || error.sqlMessage);
    }
  }
}

// Rotas 

export const productRouter = express.Router()

const productController = new ProductController()

productRouter.get('/getproducts', productController.getAllProducts)
productRouter.get('/product/:id', productController.getProductById)
productRouter.get('/product/category', productController.getProductByCategory)
productRouter.get('/getAllImagesByProduct/:id', productController.getImagesByProduct)
productRouter.get('/getAllSizesByProduct/:id', productController.getSizesByProduct)
productRouter.post('/postproduct', productController.postProduct)
productRouter.post('/postimage/:id', productController.postImage)
productRouter.post('/postsize/:id', productController.postSize)
productRouter.put('/updateproduct', productController.updateProduct)
productRouter.delete('/deleteproduct/:id', productController.deleteProduct)
productRouter.delete('/deleteimage/:id', productController.deleteImages)
productRouter.delete('/deletesize/:id', productController.deleteSize)