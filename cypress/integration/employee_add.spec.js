describe('Add empoloyee', () => {  
   before(function () {
      cy.fixture('employee.json').then(function (datas) {
        this.datas = datas;
      })
    })

   it('Add new employee', () => {
      cy.visit('/employee_list')
      cy.get('[data-cy="create-new-employee"]').click();
   })

   it('Cancel add new employee', () =>{
      cy.visit('/create_employee');
      cy.get('[data-cy="cancel-new-employee"]').click();
   })  

   it('Save new employee', () => {      
      cy.visit('/create_employee')
      cy.get('[name="firstName"]').type(this.datas.firstName);
      cy.get('[name="lastName"]').type('Faiza');
      cy.get('button[type="submit"]').click();
   })
 });