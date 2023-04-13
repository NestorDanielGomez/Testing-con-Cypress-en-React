/// <reference types="cypress" />

describe("<Formularios/>", () => {
  it("<Login/> Verificar pantalla de inicio", () => {
    cy.visit("/");
    cy.get("[data-cy=titulo]").invoke("text").should("equal", "Iniciar Sesión");

    //que el formulario exista
    cy.get("[data-cy=form-login]").should("exist");

    //chequeo imputs
    cy.get("[data-cy=email-input]").should("exist");
    cy.get("[data-cy=password-input]").should("exist");

    cy.get("[data-cy=submit-login]")
      .should("exist")
      .should("have.value", "Iniciar Sesión")
      .should("have.class", "btn-primario");

    cy.get("[data-cy=nueva-cuenta]")
      .should("exist")
      .should("have.prop", "tagName")
      .should("eq", "A");
    cy.get("[data-cy=nueva-cuenta]").should("have.attr", "href").should("eq", "/nueva-cuenta");

    cy.visit("/nueva-cuenta");
  });

  it("<NuevaCuenta /> Verificar componente de nueva cuenta", () => {
    cy.visit("/nueva-cuenta");
    cy.get("[data-cy=titulo]").should("exist").invoke("text").should("equal", "Obtener una cuenta");
    cy.get("[data-cy=nueva_cuenta]").should("exist");

    cy.get("[data-cy=nombre]").should("exist");
    cy.get("[data-cy=email]").should("exist");
    cy.get("[data-cy=password]")
      .should("exist")
      .should("have.prop", "type")
      .should("equal", "password");
    cy.get("[data-cy=confirmar_password]").should("exist");

    cy.get("[data-cy=submit_nueva_cuenta]")
      .should("exist")
      .should("have.class", "btn-primario")
      .should("have.value", "Registrarme");

    cy.get("[data-cy=enlace_login]")
      .should("exist")
      .should("have.attr", "href")
      .should("equal", "/");

    cy.visit("/");
  });
});
