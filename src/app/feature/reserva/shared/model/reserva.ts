export class Reserva {
    id: string;
    idCliente: string;
    nombreCliete: string;
    numeroComensales: number;
    fecha: string;
    idMesa: string;

    constructor(id: string, idCliente: string, nombreCliete: string, numeroComensales: number, fecha: string, idMesa: string) {
        this.id = id;
        this.idCliente = idCliente;
        this.nombreCliete = nombreCliete;
        this.numeroComensales =  numeroComensales;
        this.fecha = fecha;
        this.idMesa = idMesa;
    }
}