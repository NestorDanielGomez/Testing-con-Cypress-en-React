## Testing con [CYPRESS](https://www.cypress.io/).

Chequeo de:

- Existencia de determinados elementos en el DOM.
- Etiquetas que tengan determinadas propiedades css.
- Etiquetas que tengan determinado valor.
- Validacion de formularios.
- Pruebas E2E de: Creación, Edición y eliminación de tareas.

###### En la carpeta "cliente":

### `npm start`

Dependencias utilizadas para el servidor:

- axios
- react
- react-router-dom

###### En la carpeta "servidor":

### `npm run dev`

Dependencias utilizadas para el servidor:

- mongoose
- jsonwebtoken
- express-validator
- express
- dotenv
- cors
- bcryptjs

###### Para correr los test, dentro de la carpeta cliente:

### `npx cypress open`

En la carpeta `servidor` hay que crear el archivo `variables.env`, (ejemplo variablesEjemplo.env)<br />
Se necesita una conexion a mongodb y uns contraseña para el token (jsonwebtoken)<br />
