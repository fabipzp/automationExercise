# Recomendaciones de Mejora

1. **Alineación de Inputs en la UI**

   - Los inputs de entrada en la interfaz de usuario deberían estar alineados para mejorar la coherencia visual y usabilidad.

2. **Tamaño de Botones de Login y Signup**

   - Los botones de **Login** y **Signup** deberían tener el mismo tamaño para mantener una uniformidad en los componentes UI.

3. **Alineación y Espacio en la Sección de Login Page**

   - Los componentes en la sección de login están alineados a la izquierda y no ocupan el espacio correspondiente en la pantalla, tanto en la versión **desktop** como en **mobile**.

4. **Campo de Email y Nombre en "Enter Account Information"**

   - En la sección **Enter Account Information**, el campo de **email** esta en disable y muestra el email ingresado en el login, pero el campo de **nombre** aunque se autocompleta, si es editable.

5. **Validación de Número de Teléfono**

   - El campo de **número de teléfono** no debería permitir el ingreso de letras; deberia ser de tipo numérico, ya que se presta a errores de autocompletado y demás, que podrian complicar la contactabilidad del usuario.

6. **Restricción de Fechas de Nacimiento**

   - Actualmente, se permite el registro de usuarios con fechas de nacimiento recientes, incluyendo el año 2021. Se debería aplicar una restricción para evitar el registro de menores de edad o fechas inverosímiles.

7. **Seguridad en las APIs**

   - Las APIs deberían requerir una **API Key** o alguna autenticación, para mejorar la seguridad y el control de acceso a los servicios, para así además al cargar las automatizaciones en GitHub. estas puedan ser subidas como variables de entorno. También el accept es usual que vaya en los headers y no en la respuesta.

8. **Mejoras en PageSpeed Insight**

   - Es recomendable implementar las mejoras sugeridas en PageSpeed Insights para optimizar la accesibilidad, SEO y rendimiento de la página, por ejemplo, en mobile hay oportunidad de mejora en el rendimiento, que actualmente es bastante bajo. Estas optimizaciones son cruciales, ya que tambien castigan el posicionamiento de la pagina en los motores de búsqueda.

9. **Errores en consola**
   - Es recomendable revisar y corregir los errores marcados en la consola para mejorar la seguridad y funcionalidad del sitio.
