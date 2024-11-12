# Automation Exercise Tests

## Descripción

Este repositorio contiene pruebas automatizadas de UI y APIs utilizando Cypress. El primer test está diseñado para realizar un registro de usuario en el sitio web de automation exercise, y el segundo test valida dos APIs del sitio de Echo Server.

---

## Contenido

- [Instalación](#instalación)
- [Ejecución de los Tests](#ejecución-de-los-tests)
- [Descripción de los Tests Implementados](#descripción-de-los-tests-implementados)

---

## Instalación

1. **Clonar el repositorio**  
   git clone https://github.com/fabipzp/automationExercise

2. **Instalar dependencias**  
   yarn install
3. **Abrir Cypress**  
   yarn cypress open

---

## Ejecución de los Tests

### Ejecución en modo Interactivo (Cypress UI)

yarn cypress open

### Ejecución en modo Headless (línea de comandos)

En el Test Runner de Cypress, seleccione los archivos automationUI.spec.cy.js y automationApis.spec.cy.js

---

## Descripción de los Tests Implementados

### Pruebas de UI

Se implementó el caso de prueba de registro de usuario, en el cual se navega en el sitio web de Automation exercise hacia la seccion de login/signup, se ingresan los datos para registrar un nuevo usuario, se crea la cuenta exitosamente, para finalmente eliminar la cuenta.

Validaciones:

1. Se ingresa en la url y se valida la interaccion con la home page por medio del componente del slider carousel.
2. Al dar click en el header al boton de signup, después de la redirección se valida que sea visible el titulo de 'New User Signup!'.
3. Se valida que el tiempo máximo de renderizado entre cada pantalla sea menor de 2000ms.
4. Al dar click en el botón de 'Signup' para enviar los datos, después de la redirección se valida que sea visible el titulo de 'ENTER ACCOUNT INFORMATION'.
5. Se genera un Title aleatorio para validar el correcto funcionamiento de ambas opciones.
6. Se valida que en enter account information el email este disable.
7. Al dar click en el botón de 'Create Account' para crear el registro de usuario, después de la redirección se valida que sea visible el titulo de 'ACCOUNT CREATED!'.
8. Se valida que al crearse la cuenta aparezca el texto 'Logged in as username' con el username enviado.
9. Se valida que después de dar click al botón 'Delete Account' la redirección muestre el titulo 'ACCOUNT DELETED!'.

### Pruebas de APIs

Se implementó un caso de prueba para dos APIs de la API Echo Server, ambas fueron seleccionadas de la sección 'Test', una con método Get y otra con método Post.

Validaciones:

1. Se valida que el status code sea un 200.
2. Se valida que el tiempo de respuesta sea menor a 2000ms.
3. Se valida que la respuesta sea un objeto.
4. Se valida que la respuesta contenga las propiedades esperadas.
5. Se valida que las propiedades de los headers sean las mapeadas.
6. Se valida que el payload o body del post sea igual a la respuesta de la API. (No es un escenario usual, pero para esa API se vió como un comportamiento testable).
7. Se valida que el formato de la fecha en la respuesta del post sea válido.

---

## Notas adicionales

Se adjuntaron las recomendaciones en un archivo dentro de la carpeta results.
