class CheckoutPage{

    elements = {

        campoCep: () => cy.get('#cart-shipping-vue'),

        botaoAlterarCEP: () => cy.get('[data-test="change-zipcode-link"]'),

        botaoContinuar: () => cy.get('a[data-checkout-event-tracker="avancar_topo"]'),

        erroCep: () => cy.get('[data-test="cart-shipping-alert"]')
    };

    clicarAlterarCEP(){

        this.elements.botaoAlterarCEP().click();
    }

    preencherCEP(usuario){

        this.elements.campoCep().type(usuario.cep);
    }

    clicarContinuar(){

        this.elements.botaoContinuar().click();
    }
}

export default new CheckoutPage();