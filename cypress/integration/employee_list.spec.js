describe('Empoloyee list', () => { 
   it('Display list employee', () => {
      cy.visit('/employee_list')
      cy.wait(2000)
      cy.get('table').should('have.class', 'employee-table')
   });
   it('Display list employee with navigation', () => {
      cy.visit('/employee_list')
      cy.get('table').should('have.class', 'employee-table')
   }); 
    
   it('Search an employee', () => {
      cy.visit('/employee_list')
      cy.get('#quick_search').type('Saad').should('have.value', 'Saad')
   });  
 });