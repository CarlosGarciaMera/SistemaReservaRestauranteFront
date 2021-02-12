export class Reserva {
    id: string;
    idCliente: string;
    nombreCliete: string;
    cantidadMaximaComensales: number;
    fecha: string;
    idMesa: string;

    constructor(id: string, idCliente: string, nombreCliete: string, cantidadMaximaComensales: number, fecha: string, idMesa: string) {
        this.id = id;
        this.idCliente = idCliente;
        this.nombreCliete = nombreCliete;
        this.cantidadMaximaComensales =  cantidadMaximaComensales;
        this.fecha = fecha;
        this.idMesa = idMesa;
    }
}
