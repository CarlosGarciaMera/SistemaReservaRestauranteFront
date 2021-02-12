import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { browser, logging } from 'protractor';
import { ReservaPage } from '../page/reserva/reserva.po';
import { MesaPage } from '../page/mesa/mesa.po';

describe('workspace-project Reserva', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let mesa: MesaPage;
    let reserva: ReservaPage;

    beforeEach(async () => {
        page = new AppPage();
        navBar = new NavbarPage();
        mesa  = new MesaPage();
        reserva = new ReservaPage();
    });

    it('Deberia crear reserva', async () => {

        const NOMBRE_MESA = 'Mesa Prueba Reserva';
        const CANTIDAD_MAXIMA_COMENSALES_MESA_RESERVA = 8;
        const NOMBRE_CLIENTE = 'Cliente Reserva';
        const ID_CLIENTE = '2';
        const CANTIDAD_COMENSALES = 8;
        const FECHA = '2021-03-02 10:00:00';

        await page.navigateTo();
        await navBar.clickLinkMesas();
        await mesa.clickLinkCrearMesa();
        await mesa.ingresarNombreMesa(NOMBRE_MESA);
        await mesa.ingresarCantidadMaximaComensales(CANTIDAD_MAXIMA_COMENSALES_MESA_RESERVA);
        await mesa.clickBotonCrearMesa();
        await navBar.clickLinkReservas();
        await reserva.clickLinkCrearReserva();
        await reserva.ingresarNombreCliente(NOMBRE_CLIENTE);
        await reserva.ingresarIdCliente(ID_CLIENTE);
        await reserva.ingresarNumeroComensales(CANTIDAD_COMENSALES);
        await reserva.ingresarFecha(FECHA);
        await reserva.clickBotonCrearReserva();
        // Adicionamos las validaciones despues de la creación
        expect(1).toEqual(reserva.contarReservas());
    });

    it('Deberia listar reservas', async () => {
        await page.navigateTo();
        await navBar.clickLinkReservas();
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
