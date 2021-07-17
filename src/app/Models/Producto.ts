export class Producto{
    private _id:Number=0;
    private _nombre:String="";
    private _descripcion:String="";
    private _precio:number=0.0;
  
  
      constructor() {
      }
      
      /**
       * Getter id
       * @return {Number}
       */
      public get id(): Number {
          return this._id;
      }
  
      /**
       * Getter nombre
       * @return {String}
       */
      public get nombre(): String {
          return this._nombre;
      }
  
      /**
       * Getter descripcion
       * @return {String}
       */
      public get descripcion(): String {
          return this._descripcion;
      }
  
      /**
       * Getter precio
       * @return {number}
       */
      public get precio(): number {
          return this._precio;
      }
  
      /**
       * Setter id
       * @param {Number} value
       */
      public set id(value: Number) {
          this._id = value;
      }
  
      /**
       * Setter nombre
       * @param {String} value
       */
      public set nombre(value: String) {
          this._nombre = value;
      }
  
      /**
       * Setter descripcion
       * @param {String} value
       */
      public set descripcion(value: String) {
          this._descripcion = value;
      }
  
      /**
       * Setter precio
       * @param {number} value
       */
      public set precio(value: number) {
          this._precio = value;
      }
  
  }
  