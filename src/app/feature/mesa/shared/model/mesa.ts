export class Mesa {
    id: string;
    nombre: string;
    cantidadMaximaComensales: number;

    constructor(id: string, nombre: string, cantidadMaximaComensales: number) {
        this.id = id;
        this.nombre = nombre;
        this.cantidadMaximaComensales = cantidadMaximaComensales;
    }
}
