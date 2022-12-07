export class Adresses {
    constructor(
      private id: string,
      private cep: string,
      private street: string,
      private district: string,
      private city: string,
      private complement:string,
      private number: number,
      private userId: string
    ) {}
  
    getId() {
      return this.id;
    }
    getCep() {
      return this.cep;
    }
    getStreet() {
      return this.street;
    }
    getCity() {
      return this.city;
    }
    getDistrict() {
      return this.district;
    }
    getComplement() {
      return this.complement;
    }
    getNumber() {
      return this.number;
    }
    getUserId() {
      return this.userId;
    }
  }