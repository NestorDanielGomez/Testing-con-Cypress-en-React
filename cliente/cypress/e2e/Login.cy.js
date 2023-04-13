/// <reference types="cypress" />

describe("<Login/>", () => {
  it("<Login/> Validacion, Alertas y Autenticar Usuario", () => {
    cy.visit("/");
    cy.get("[data-cy=submit-login").click();

    cy.get("[data-cy=alerta]")
      .should("exist")
      .invoke("text")
      .should("equal", "Todos los campos son obligatorios");
    //pruebo con un usuario que no existe
    cy.get("[data-cy=email-input]").type("pepito@nestor.com");
    cy.get("[data-cy=password-input]").type("123");
    cy.get("[data-cy=submit-login").click();
    cy.get("[data-cy=alerta]").should("exist").invoke("text").should("eq", "El usuario no existe");

    cy.get("[data-cy=email-input]").clear().type("nestor@nestor.com");
    cy.get("[data-cy=password-input]").clear().type("nestor3");
    cy.get("[data-cy=submit-login").click();
    cy.get("[data-cy=alerta]").should("exist").invoke("text").should("eq", "Password Incorrecto");

    cy.get("[data-cy=email-input]").clear().type("nestor@nestor.com");
    cy.get("[data-cy=password-input]").clear().type("nestor123");
    cy.get("[data-cy=submit-login").click();

    cy.get("[data-cy=selecciona_un_proyecto]")
      .should("exist")
      .invoke("text")
      .should("equal", "Selecciona un proyecto");

    cy.get("[data-cy=cerrar_sesion]").click();
  });
});
