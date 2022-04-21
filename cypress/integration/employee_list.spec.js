describe('Empoloyee list', () => { 
   it('Display list employee', () => {
      cy.visit('/')
      cy.get('table').should('have.class', 'employee-table')
   });
   it('Display list employee with navigation', () => {
      cy.visit('/employee_list')
      cy.get('table').should('have.class', 'employee-table')
   });   
 });