/// <reference types="cypress" />

describe("<Administrador/>", () => {
  it("<Login/> Autenticacion", () => {
    cy.visit("/");
    cy.get("[data-cy=email-input]").clear().type("nestor@nestor.com");
    cy.get("[data-cy=password-input]").clear().type("nestor123");
    cy.get("[data-cy=submit-login").click();

    cy.get("[data-cy=boton_nuevo_proyecto").click();
    cy.get("[data-cy=submit_nuevo_proyecto").click();

    cy.get("[data-cy=alerta]")
      .should("exist")
      .invoke("text")
      .should("equal", "El nombre del Proyecto es obligatorio");
    cy.get("[data-cy=alerta]").should("have.class", "mensaje error");

    cy.get("[data-cy=input_nuevo_proyecto]").type("Tienda Virtual");
    cy.get("[data-cy=submit_nuevo_proyecto]").click();

    cy.get("[data-cy=listado_proyectos] li:nth-child(1) button").click();

    cy.get("[data-cy=submit_tarea]").click();
    cy.get("[data-cy=alerta]")
      .should("exist")
      .invoke("text")
      .should("equal", "El nombre de la tarea es obligatorio");
    cy.get("[data-cy=alerta]").should("have.class", "mensaje error");

    //creacion de una tarea
    cy.get("[data-cy=input_tarea]").type("definir Diseño");
    cy.get("[data-cy=submit_tarea]").click();

    //selecciona primer tarea y la marca como completa
    cy.get("[data-cy=tarea]:nth-child(1) [data-cy=tarea_incompleta]").click();
    cy.get("[data-cy=tarea]:nth-child(1) [data-cy=tarea_completa]").should(
      "have.class",
      "completo"
    );

    //selecciona primer tarea y la desmarca como completa
    cy.get("[data-cy=tarea]:nth-child(1) [data-cy=tarea_completa]").click();
    cy.get("[data-cy=tarea]:nth-child(1) [data-cy=tarea_incompleta]").should(
      "have.class",
      "incompleto"
    );
    //Editar tarea
    cy.get("[data-cy=tarea]:nth-child(2) [data-cy=btn_editar]").click();
    cy.get("[data-cy=input_tarea]").clear().type("Tarea actualizada");
    cy.get("[data-cy=submit_tarea]").click();
    //Eliminar tarea
    cy.get("[data-cy=tarea]:nth-child(2) [data-cy=btn_eliminar]").click();
    cy.get("[data-cy=tarea]:nth-child(2)").invoke("text").should("not.equal", "Tarea actualizada");
  });
});
