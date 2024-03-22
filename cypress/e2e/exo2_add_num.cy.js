describe("Ajout de numéro", () => {
    it("Taper des nombres dans les inputs", () => {
    cy.visit('http://127.0.0.1:5173/');
   
      cy.get("#firstNumber").type("15");
  
   
      cy.get("#secondNumber").type("20");
  
      // Vérifier si les valeur sont correctes
      cy.get("#firstNumber").should("have.value", "15");
      cy.get("#secondNumber").should("have.value", "20");
    });
  
    it("Le calcul est t'il bon ?", () => {
    cy.visit('http://127.0.0.1:5173/');
     
      cy.get("#firstNumber").type("15");
  
      
      cy.get("#secondNumber").type("20");
  
     
      cy.get("#calculBtn").click();
  
    
      cy.get("#result").should("have.text", "35");
    });
    
    //Nombre négatif décim
    it("Taper des nombres négatif dans les inputs", () => {
        cy.visit('http://127.0.0.1:5173/');
       
          cy.get("#firstNumber").type("-1.5");
      
       
          cy.get("#secondNumber").type("-2.5");
      
          // Vérifier si les valeur sont correctes
          cy.get("#firstNumber").should("have.value", "-1.5");
          cy.get("#secondNumber").should("have.value", "-2.5");
          cy.get("#calculBtn").click();
        });
         //Nombre décim
    it("Taper des nombres décimaux dans les inputs", () => {
        cy.visit('http://127.0.0.1:5173/');
       
          cy.get("#firstNumber").type("1.5");
      
       
          cy.get("#secondNumber").type("2.5");
      
          // Vérifier si les valeur sont correctes
          cy.get("#firstNumber").should("have.value", "1.5");
          cy.get("#secondNumber").should("have.value", "2.5");
          cy.get("#calculBtn").click();
        });
  });
  