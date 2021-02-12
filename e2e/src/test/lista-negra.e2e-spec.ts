import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { browser, logging } from 'protractor';
import { ListaNegraPage } from '../page/lista-negra/lista-negra.po';

describe('workspace-project Vetados', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let listaNegra: ListaNegraPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        listaNegra = new ListaNegraPage();
    });

    it('Deberia crear vetado', async () => {
        const NOMBRE_VETADO = 'Cliente Vetado';
        const ID_VETADO = '1';

        await page.navigateTo();
        await navBar.clickLinkListaNegra();
        await listaNegra.clickLinkCrearVetado();
        await listaNegra.ingresarNombreVetado(NOMBRE_VETADO);
        await listaNegra.ingresarIdVetado(ID_VETADO);
        await listaNegra.clickBotonCrearVetado();
        // Adicionamos las validaciones despues de la creación
        expect(1).toEqual(listaNegra.contarVetados());
    });

    it('Deberia listar vetados', async () => {
        await page.navigateTo();
        await navBar.clickLinkListaNegra();
        await listaNegra.clickLinkListarVetados();

        expect(1).toBe(listaNegra.contarVetados());
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
          level: logging.Level.SEVERE,
        } as logging.Entry));
      });
});
