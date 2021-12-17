// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
import 'cypress-wait-until';

Cypress.Commands.add('register', (userName, password, rank) => {
  cy.request({
      method:'POST', 
      url:'/auth/register',
      body: {
          "username": userName,
          "password": password,
          "passwordRepeat": password,
          "rank" : rank ?? 0
      }
      })
      .as('registerResponse')
      .then((response) => {
          return response;
      })
      .its('status')
      .should('eq', 200);
})

Cypress.Commands.add('login', (userName, password) => {
  cy.request({
      method:'POST', 
      url:'/auth/login',
      body: {
        username: userName,
        password: password
      }
    })
    .as('loginResponse')
    .then((response) => {
      Cypress.env('rtoken', response.body.refreshToken); 
      return response;
    })
    .its('status')
    .should('eq', 200);
})

Cypress.Commands.add('getAT', () => {
  const token = Cypress.env('rtoken');
  cy.request({
      method:'POST', 
      url:'/auth/accessToken',
      body: {
        refreshToken : token
      }
    })
    .as('atResponse')
    .then((response) => {
      Cypress.env('token', response.body.accessToken);
      return response;
    })
    .its('status')
    .should('eq', 200);
})

Cypress.Commands.add('deleteAll', ()=> {
    const token = Cypress.env('token');
    cy.request({
      method: 'GET',
      url: '/solvers',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
    })
    .as('deleteResponse')
    .then(response => {
      if(response) {
        response.body.forEach(solver => {
          cy.request({
            method: 'DELETE',
            url: `/solvers/${solver.id}`,
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            }
          })
        });
      }
    })
    .its('status')
    .should('eq', 200);
})