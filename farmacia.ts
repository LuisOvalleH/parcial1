import { Producto } from "./producto";


class HashTable1 {
    private size: number;
    private data: Producto[];

    constructor(){
        this.size = 10
        this.data = new Array(this.size)
    }

    private hash(key: number): number{
        return key % this.size
    }

    public insert(estudiante: Producto): void {
        let key = estudiante.getCodigo()
        let index: number = this.hash(key); 
        this.data[index] = estudiante;
    }


    public to_string(): string{
        let all_data: string = "";
        for (const estudiante of this.data){
            if (estudiante){
                all_data += " | " + estudiante.getNombre() + " " + estudiante.getCodigoStr() + " " + estudiante.getPrecioCosto() + " | "
            }
            else {
                all_data += " " + "UNDEFINED" + " "
            }
        }
        return(all_data)
    }

    public print():void{
        console.log(this.to_string())
    }



    public buscar(key: string): Producto{
        let cadena : string = key[1]+key[2]+key[3]
        let number : number = parseInt(cadena)
        let index: number = this.hash (number)
        return this.data[index]
    }
}
let tableHash1: HashTable1 = new HashTable1();

let estudiante1: Producto = new Producto("Tijeras", "P001",6,5);
let estudiante2: Producto = new Producto("Crayones", "P002",6,5);
let estudiante3: Producto = new Producto("Libros", "P003",6,5);
let estudiante4: Producto = new Producto("Cuadernos", "P004",6,5);
let estudiante5: Producto = new Producto("Lapiceros", "P005",6,5);
let estudiante6: Producto = new Producto("Marcadores", "P006",6,5);
let estudiante7: Producto = new Producto("Libretas", "P007",6,5);
let estudiante8: Producto = new Producto("Tijeras", "P008",6,5);






tableHash1.insert(estudiante1)
tableHash1.insert(estudiante2)
tableHash1.insert(estudiante3)
tableHash1.insert(estudiante4)
tableHash1.insert(estudiante5)
tableHash1.insert(estudiante6)
tableHash1.insert(estudiante7)
tableHash1.insert(estudiante8)


tableHash1.print()

console.log(tableHash1.buscar("P001"))
console.log(tableHash1.buscar("P002"))
console.log(tableHash1.buscar("P003"))