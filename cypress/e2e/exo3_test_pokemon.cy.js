// Test pour s'assurer que l'élément #pokeListe est présent
describe("Test de l'api pokemon", () => {
    it('Devrait vérifier que l\'élément #pokeListe est présent', () => {
          cy.visit("http://localhost:5173/"); 
      cy.get('#pokeListe').should('exist');
    });
  });
  
  // Test pour vérifier le résultat de l'appel à l'API
  describe('Vérification du résultat de l\'appel à l\'API', () => {
    it('Devrait vérifier le résultat de l\'appel à l\'API', () => {
      cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon').as('getPokemon');
          cy.visit("http://localhost:5173/"); 
      cy.wait('@getPokemon').its('response.statusCode').should('eq', 200);
    });
  });
  
  // Test pour vérifier l'affichage des noms de Pokémon
  describe('Vérification du status de l api à 200', () => {
    it('test API pokemon status 200', ()=>{
      cy.visit("http://localhost:5173/"); 
      const url = "https://pokeapi.co/api/v2/pokemon"
      cy.request('GET',url).as('requete')
      cy.get('@requete').should((response) => {
        expect(response.status).to.eq(200)
      })
    })
    it("Devrait vérifier l'affichage des noms de Pokémon dans des paragraphes", () => {
      cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon').as('getPokemon');
          cy.visit("http://localhost:5173/"); 
      cy.wait('@getPokemon');//pour l'API on fait exprès d'attendre la requete
      cy.get('#pokeListe p').should('have.length.greaterThan', 0);
    });
    it("Devrait vérifier BULBASAUR en premier", () => {
      cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon').as('getPokemon');
          cy.visit("http://localhost:5173/"); 
      cy.wait('@getPokemon');//pour l'API on fait exprès d'attendre la requete
      // cy.get('#pokeListe p').should('have.length.greaterThan', 0);
      cy.get('#pokeListe p').eq(0).should('have.text', 'bulbasaur');
    });
  });
  