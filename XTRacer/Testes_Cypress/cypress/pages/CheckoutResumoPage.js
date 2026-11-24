class CheckoutResumoPage{

    elements = {

        tituloResumo: () => cy.get('.hidden-xs.hidden-sm .ch-order-summary-summary-title'),

        linkVoltar: () => cy.contains('a', 'Voltar')
    }

    clicarVoltar(){

        this.elements.linkVoltar().click();
    }
}

export default new CheckoutResumoPage();