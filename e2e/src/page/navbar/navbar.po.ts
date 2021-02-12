import { by, element } from 'protractor';

export class NavbarPage {

    linkLintaNegra = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
    linkMesas = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));
    linkReserva = element(by.xpath('/html/body/app-root/app-navbar/nav/a[4]'));

    async clickLinkListaNegra() {
        await this.linkLintaNegra.click();
    }
    async clickLinkMesas() {
        await this.linkMesas.click();
    }
    async clickLinkReservas() {
        await this.linkReserva.click();
    }
}
