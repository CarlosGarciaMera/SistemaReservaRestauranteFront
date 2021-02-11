import { by, element } from 'protractor';

export class ReservaPage {
    private linkCrearReserva = element(by.id('linkReservar'));
    private linkListarReservas = element(by.id('linkGestionarResrvas'));
    private inputNombreCliente = element(by.id('idCliente'));
    private inputIdCliente = element(by.id('nombreCliente'));
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

    async ingresarNombreCliente(nombreVetado: string) {
        await this.inputNombreCliente.sendKeys(nombreVetado);
    }

    async ingresarIdCliente(idVetado: string) {
        await this.inputIdCliente.sendKeys(idVetado);
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
