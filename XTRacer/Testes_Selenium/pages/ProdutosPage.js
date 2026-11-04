import {By} from 'selenium-webdriver';

import BasePage from './BasePage.js';

class ProdutosPage extends BasePage {

    constructor(driver){

        super(driver);

        this.locators = {

            botaoFiltrar: By.css('.filter-button'),

            produto: By.css('.list-product.flex.f-wrap .item.flex'),

            linkUltimaPagina: By.css('a[rel="last"]'),

            produtoIndisponivel: By.css('.list-product.flex.f-wrap .notify-me')
        };
    }

    async selecionarFiltro(nomeFiltro){

        await this.clickJs(By.xpath(`//span[@class='filter-name' and text()='${nomeFiltro}']`));
    }

    async clicarFiltrar(){

        await this.click(this.locators.botaoFiltrar);
    }

    async selecionarUltimaPagina(){

        await this.click(this.locators.linkUltimaPagina);
    }

    async selecionarProduto(){

        await this.click(this.locators.produto);
    }

    async selecionarProdutoIndisponivel(){

        await this.click(this.locators.produtoIndisponivel);
    }
}

export default ProdutosPage;