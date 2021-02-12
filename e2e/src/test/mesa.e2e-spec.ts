import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { MesaPage } from '../page/mesa/mesa.po';
import { browser, logging } from 'protractor';

describe('workspace-project Mesa', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let mesa: MesaPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        mesa = new MesaPage();
    });

    it('Deberia crear mesa', async () => {
        const NOMBRE_MESA = 'Mesa Prueba';
        const CANTIDAD_MAXIMA_COMENSALES = 16;

        await page.navigateTo();
        await navBar.clickLinkMesas();
        await mesa.clickLinkCrearMesa();
        await mesa.ingresarNombreMesa(NOMBRE_MESA);
        await mesa.ingresarCantidadMaximaComensales(CANTIDAD_MAXIMA_COMENSALES);
        await mesa.clickBotonCrearMesa();
        // Adicionamos las validaciones despues de la creación
        expect(mesa.contarMesas()).toBeGreaterThanOrEqual(1);
    });

    it('Deberia listar mesas', async () => {
        await page.navigateTo();
        await navBar.clickLinkMesas();
        await mesa.clickLinkListarMesas();

        expect(mesa.contarMesas()).toBeGreaterThanOrEqual(1);
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
          level: logging.Level.SEVERE,
        } as logging.Entry));
      });
});
