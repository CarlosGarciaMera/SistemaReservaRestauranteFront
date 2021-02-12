import { by, element } from 'protractor';

export class ReservaPage {
    private linkCrearReserva = element(by.id('linkReservar'));
    private linkListarReservas = element(by.id('linkGestionarReservas'));
    private inputNombreCliente = element(by.id('nombreCliente'));
    private inputIdCliente = element(by.id('idCliente'));
    private inputFecha = element(by.id('fecha'));
    private inputCantidadComensales = element(by.id('numeroComensales'));
    private botonCrearReserva = element(by.id('botonReservar'));
    private listaReservas = element.all(by.css('tbody.bodyReservas tr'));

    async clickLinkCrearReserva() {
        await this.linkCrearReserva.click();
    }

    async clickLinkListarReservas() {
        await this.linkListarReservas.click();
    }

    async ingresarNombreCliente(nombreCliente: string) {
        await this.inputNombreCliente.sendKeys(nombreCliente);
    }

    async ingresarIdCliente(idCliente: string) {
        await this.inputIdCliente.sendKeys(idCliente);
    }

    async ingresarFecha(fecha: string) {
        await this.inputFecha.sendKeys(fecha);
    }

    async ingresarNumeroComensales(numeroComensales: number) {
        await this.inputCantidadComensales.sendKeys(numeroComensales);
    }

    async clickBotonCrearReserva() {
        await this.botonCrearReserva.click();
    }

    async contarReservas() {
        return this.listaReservas.count();
    }
}
