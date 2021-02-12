import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { browser, logging } from 'protractor';
import { ReservaPage } from '../page/reserva/reserva.po';

describe('workspace-project Reserva', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let reserva: ReservaPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        reserva = new ReservaPage();
    });

    it('Deberia crear mesa', async () => {
        const NOMBRE_CLIENTE = 'Cliente reserva';
        const ID_CLIENTE = '2';
        const CANTIDAD_COMENSALES = 8;
        const FECHA = '2021-03-02 10:00:00';

        await page.navigateTo();
        await navBar.clickLinkMesas();
        await reserva.clickLinkCrearReserva();
        await reserva.ingresarNombreCliente(NOMBRE_CLIENTE);
        await reserva.ingresarIdCliente(ID_CLIENTE);
        await reserva.ingresarNumeroComensales(CANTIDAD_COMENSALES);
        await reserva.ingresarFecha(FECHA);
        await reserva.clickBotonCrearReserva();
        // Adicionamos las validaciones despues de la creación
        expect(1).toEqual(reserva.contarReservas());
    });

    it('Deberia listar mesas', async () => {
        await page.navigateTo();
        await navBar.clickLinkMesas();
        await reserva.clickLinkListarReservas();

        expect(1).toBe(reserva.contarReservas());
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
          level: logging.Level.SEVERE,
        } as logging.Entry));
      });
});
