import { by, element } from 'protractor';

export class ListaNegraPage {
    private linkCrearVetado = element(by.id('linkCrearVetado'));
    private linkListarVetados = element(by.id('linkListarVetados'));
    private inputNombreVetado = element(by.id('nombreVetado'));
    private inputIdVetado = element(by.id('idVetado'));
    private botonCrearVetado = element(by.id('botonGuardarVetado'));
    private listaVetados = element.all(by.css('tbody.bodyVetados tr'));

    async clickLinkCrearVetado() {
        await this.linkCrearVetado.click();
    }

    async clickLinkListarVetados() {
        await this.linkListarVetados.click();
    }

    async ingresarNombreVetado(nombreVetado: string) {
        await this.inputNombreVetado.sendKeys(nombreVetado);
    }

    async ingresarIdVetado(idVetado: string) {
        await this.inputIdVetado.sendKeys(idVetado);
    }

    async clickBotonCrearVetado() {
        await this.botonCrearVetado.click();
    }

    async contarVetados() {
        return this.listaVetados.count();
    }
}
