/// <reference types="cypress" />

describe("<NuevaCuenta/>", () => {
  it("<NuevaCuenta/> Validacion, Alertas y Crear Nueva cuenta", () => {
    cy.visit("/nueva-cuenta");
    cy.get("[data-cy=submit_nueva_cuenta]").click();
    cy.get("[data-cy=alerta]")
      .should("exist")
      .invoke("text")
      .should("eq", "Todos los campos son obligatorios");

    cy.get("[data-cy=alerta]").should("have.class", "alerta-error");

    //leno formulario
    cy.get("[data-cy=nombre]").type("Nestor");
    cy.get("[data-cy=email]").type("loro@nestor.com");
    cy.get("[data-cy=password]").type("123");
    cy.get("[data-cy=confirmar_password]").type("123");
    //nuevo click con el formulario lleno
    cy.get("[data-cy=submit_nueva_cuenta]").click();

    cy.get("[data-cy=alerta]")
      .should("exist")
      .invoke("text")
      .should("eq", "El password debe ser de al menos 6 caracteres");

    cy.get("[data-cy=alerta]").should("have.class", "alerta-error");

    cy.get("[data-cy=password]").clear().type("1234567");
    cy.get("[data-cy=confirmar_password]").clear().type("1234567");

    cy.get("[data-cy=submit_nueva_cuenta]").click();

    cy.get("[data-cy=selecciona_un_proyecto]")
      .should("exist")
      .invoke("text")
      .should("equal", "Selecciona un proyecto");

    cy.get("[data-cy=cerrar_sesion]").click();
  });
  it("<NuevaCuenta/> Revisar usuarios duplicados", () => {
    cy.visit("/nueva-cuenta");
    cy.get("[data-cy=nombre]").type("Nestor");
    cy.get("[data-cy=email]").type("loro@nestor.com");
    cy.get("[data-cy=password]").type("1234567");
    cy.get("[data-cy=confirmar_password]").type("1234567");

    cy.get("[data-cy=submit_nueva_cuenta]").click();
  });
});
