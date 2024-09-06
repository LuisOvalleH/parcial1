export class Producto{
    private nombre : string;
    private codigo : string;
    private precio_venta : number;
    private precio_costo : number;

    constructor(nombre: string, codigo:string, precio_venta : number, precio_costo : number){
        this.nombre = nombre;
        this.codigo = codigo;
        this.precio_venta = precio_venta;
        this.precio_costo = precio_costo;
    }
    

    public getNombre(): string{
        return this.nombre;
    }
 

    public getCodigo(): number{
        let n : string = this.codigo[1] + this.codigo[2] + this.codigo[3]
        let num : number = parseInt(n)
        return  num
    }
 

    public getPrecioVenta(): number{
        return this.precio_venta;
    }

    public getPrecioCosto(): number{
        return this.precio_costo;
    }

    public getCodigoStr(): string{
        return this.codigo;
    }


}