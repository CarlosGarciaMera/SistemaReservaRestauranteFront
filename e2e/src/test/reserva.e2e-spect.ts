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

    it('Deberia crear mesa', () => {
        const NOMBRE_CLIENTE = 'Cliente reserva';
        const ID_CLIENTE = '2';
        const CANTIDAD_COMENSALES = 8;
        const FECHA = '2021-03-02 10:00:00';

        page.navigateTo();
        navBar.clickLinkMesas();
        reserva.clickLinkCrearReserva();
        reserva.ingresarNombreCliente(NOMBRE_CLIENTE);
        reserva.ingresarIdCliente(ID_CLIENTE);
        reserva.ingresarNumeroComensales(CANTIDAD_COMENSALES);
        reserva.ingresarFecha(FECHA);
        reserva.clickBotonCrearReserva();
        // Adicionamos las validaciones despues de la creación
        expect(1).toEqual(reserva.contarReservas());
    });

    it('Deberia listar mesas', () => {
        page.navigateTo();
        navBar.clickLinkMesas();
        reserva.clickLinkListarReservas();

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
