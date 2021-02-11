import { by, element } from 'protractor';

export class MesaPage {
    private linkCrearMesa = element(by.id('linkCrearMesa'));
    private linkListarMesas = element(by.id('linkListarMesa'));
    private inputNombreMesa = element(by.id('nombreMesa'));
    private inputCantidadMaximaComensales = element(by.id('cantidadMaximaComensales'));
    private botonCrearMesa = element(by.id('botonCrearMesa'));
    private listaMesas = element.all(by.css('tbody.bodyMesas tr'));

    async clickLinkCrearMesa() {
        await this.linkCrearMesa.click();
    }

    async clickLinkListarMesas() {
        await this.linkListarMesas.click();
    }

    async ingresarNombreMesa(nombreMesa: string) {
        await this.inputNombreMesa.sendKeys(nombreMesa);
    }

    async ingresarCantidadMaximaComensales(cantidadMaximaComensales: number) {
        await this.inputCantidadMaximaComensales.sendKeys(cantidadMaximaComensales);
    }

    async clickBotonCrearMesa() {
        await this.botonCrearMesa.click();
    }

    async contarMesas() {
        return this.listaMesas.count();
    }
}
