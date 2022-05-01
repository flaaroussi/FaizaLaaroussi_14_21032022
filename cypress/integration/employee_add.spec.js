import { wait } from "@testing-library/user-event/dist/utils";

describe('Add empoloyee', () => {    

   it('Add new employee', () => {
      cy.wait(1000)
      cy.visit('/employee_list')
      cy.wait(1000)
      cy.get('[data-cy="create-new-employee"]').click()
      cy.wait(1000)
   })

   it('Cancel add new employee', () =>{
      cy.wait(1000)
      cy.visit('/create_employee');
      cy.wait(1000)
      cy.get('[data-cy="cancel-new-employee"]').click();
      cy.wait(1000)
   })  

   
   it('Save new employee', () => {  
      cy.wait(1000) 
      cy.visit('/create_employee')
      cy.get('[name="firstName"]').type("TestCypressToto");
      cy.get('[name="lastName"]').type('Faiza');
      cy.get('[name="dateOfBirth"]').type('04/12/1990')
      cy.wait(60);
      cy.get('.react-datepicker__day--selected').trigger('click');

      cy.get('[name="startDate"]').type('04/12/2020')
      cy.wait(60);
      cy.get('.react-datepicker__day--selected').trigger('click');     
      
      cy.get('[name="departement"]').select('Support');
      cy.get('[name="street"]').type('Bilal');
      cy.get('[name="city"]').type('Chicago');
      cy.get('[name="state"]').select('Alaska');
      cy.get('[name="zipCode"]').type('2600');
      cy.get('button[type="submit"]').click();
      cy.wait(1000);
      cy.get('[data-testid=modal_confirme_btn_employee_list]').click();
      cy.wait(1000);
      cy.get('.fa-angle-double-right').click();
      cy.wait(1000);
      cy.get('table tbody tr').last().contains('Faiza');    
      
      
   })
 });