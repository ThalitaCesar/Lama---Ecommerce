export class ProductRequest {
    constructor(
      private id: string,
      private productId: string,
      private userId: string,
    ) {}
  
    getId() {
      return this.id;
    }
    getProductId() {
      return this.productId;
    }
    getUserId() {
      return this.userId;
    }
  }



