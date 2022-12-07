export enum CATEGORIES {
    ADMIN = "ADMIN",
    NOMAL = "NORMAL",
    FEM = "FEM",
    MASC = "MASC", 
    SPORT = "SPORT", 
    BA = "BA", 
    FOOTWEAR = "FOOTWEAR"
  }
  
  export class Product {
      constructor(
        private id: string,
        private name: string,
        private description: string,
        private created: string,
        private category: CATEGORIES
      ) {}
    
      getId() {
        return this.id;
      }
      getTitle() {
        return this.name;
      }
      getDescription() {
        return this.description;
      }
      getCreated() {
        return this.created;
      }
      getCategory() {
        return this.category;
      }
    }

    export class Images {
      constructor(
        private id: string,
        private photos: string,
        private product_id: string,
      ) {}
    
      getId() {
        return this.id;
      }
      getPhotos() {
        return this.photos;
      }
      getProductId() {
        return this.product_id;
      }
    }

    export class Size {
      constructor(
        private id: string,
        private sizes: string,
        private product_id: string,
      ) {}
    
      getId() {
        return this.id;
      }
      getSizes() {
        return this.sizes;
      }
      getProductId() {
        return this.product_id;
      }
    }


    
