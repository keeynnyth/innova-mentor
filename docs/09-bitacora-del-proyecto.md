# 📕 Bitácora del Proyecto

> *"Todo gran proyecto comienza con una idea, pero son las personas quienes le dan vida."*

---

# Innova Mentor

**Inicio de la bitácora:** Junio de 2026

## ¿Qué es este documento?

Esta bitácora no pretende documentar el código ni las funcionalidades del proyecto.

Para eso existen el Historial de Versiones, el Backlog y el Diario de Desarrollo.

Aquí queremos conservar algo diferente.

Queremos registrar la historia de **Innova Mentor**.

Las ideas que dieron origen al proyecto.

Las conversaciones importantes.

Los desafíos encontrados.

Las pequeñas victorias.

Los cambios de rumbo.

Y todo aquello que, con el paso del tiempo, explique cómo una idea terminó convirtiéndose en una aplicación real.

---

# Entrada 1

## El comienzo

Todo empezó como un proyecto académico dentro del programa **Innova Lab**.

Desde el principio surgió una idea clara:

No queríamos construir únicamente una aplicación para consumir contenido educativo.

Queríamos crear una herramienta capaz de acompañar a las personas durante su proceso de aprendizaje.

Ese pequeño cambio de enfoque terminó definiendo toda la identidad del proyecto.

---

# Entrada 2

## Nace Innova Mentor

Durante los primeros días analizamos distintos nombres para el proyecto.

Buscábamos un nombre que transmitiera innovación, crecimiento y acompañamiento.

Finalmente surgió **Innova Mentor**.

No fue simplemente un nombre atractivo.

Representaba exactamente aquello que queríamos construir:

Una plataforma que ayudara a las personas a recuperar el hábito del estudio mediante el acompañamiento constante de un mentor virtual.

Ese momento marcó el nacimiento oficial de la identidad del proyecto.

---

# Entrada 3

## Conociendo a Nova

Después de definir el nombre apareció una nueva pregunta.

¿Quién acompañará al usuario?

La respuesta fue Nova.

Nova no nació como un simple avatar.

Desde el principio imaginamos un personaje amable, paciente y cercano.

No debía parecer un profesor que evalúa.

Tampoco un asistente automático.

Queríamos que transmitiera la sensación de que siempre existe alguien dispuesto a acompañar al usuario durante su aprendizaje.

Con el tiempo Nova comenzó a convertirse en uno de los elementos más representativos del proyecto.

---

# Entrada 4

## Mucho más que una PWA

En un principio el proyecto era únicamente una aplicación desarrollada con React.

Poco después surgió una nueva idea.

¿Por qué obligar al usuario a instalar una aplicación desde una tienda cuando podía utilizarla directamente desde el navegador?

Esa pregunta nos llevó a transformar Innova Mentor en una Progressive Web App.

Fue una decisión importante.

Permitía ofrecer una experiencia similar a una aplicación nativa manteniendo un desarrollo mucho más sencillo.

Durante ese proceso aprendimos sobre manifiestos, iconos, splash screens, caché y despliegue.

También descubrimos que los pequeños detalles, como el icono correcto de la aplicación, podían consumir mucho más tiempo del esperado.

---

# Entrada 5

## Aprender a construir

Con el paso de las sesiones apareció una idea que terminó cambiando la forma de trabajar.

En lugar de avanzar rápidamente escribiendo código, decidimos detenernos.

Comprender.

Documentar.

Ordenar.

Fue entonces cuando nació la carpeta **docs**.

Lejos de ser una simple colección de archivos, comenzó a convertirse en el manual del proyecto.

Cada documento respondía una pregunta distinta:

¿Por qué existe Innova Mentor?

¿Cómo debe verse?

¿Cómo está construido?

¿Por qué se tomaron determinadas decisiones?

Aquella decisión cambió completamente la forma en que evolucionó el proyecto.

---

# Entrada 6

## Una forma diferente de aprender

Durante el desarrollo surgió una metodología que terminaría acompañando todo el proyecto.

Avanzar un paso a la vez.

Entender antes de implementar.

Documentar antes de olvidar.

Registrar cada decisión importante.

Ese ritmo permitió que el proyecto creciera de forma organizada, reduciendo la confusión y facilitando el aprendizaje.

Más que desarrollar una aplicación, el proceso comenzó a convertirse en una oportunidad para aprender buenas prácticas de ingeniería de software.

---

Fecha: 25/06/2026

Se implementó la Pantalla Inicial v2.

Cambios:
- Se incorporó Nova como elemento central.
- Se agregaron los botones Registrarse e Iniciar sesión.
- Se alineó la pantalla con el flujo definido por el equipo de diseño.
- Se mantuvo la identidad visual de Innova Mentor.

 ## Diseño de Registro v2

Se definió una versión simplificada de la pantalla de registro basada en la propuesta del equipo de diseño y adaptada a la identidad visual de Innova Mentor.

Decisiones tomadas:

* Mantener a Nova como elemento central de la experiencia.
* Eliminar los campos "Nombre de usuario" y "Fecha de nacimiento".
* Incorporar los campos:

  * Nombre completo
  * Correo electrónico
  * Contraseña
  * Confirmar contraseña
* Mantener el estilo visual institucional de Innova Mentor.
* Reservar la funcionalidad "¿Olvidaste tu contraseña?" para la futura pantalla de inicio de sesión.
* Utilizar formularios limpios sin iconos dentro de los campos para favorecer una apariencia moderna y una implementación más sencilla.

## Implementación de la Pantalla de Registro v2

### Objetivo

Diseñar e implementar una versión mejorada de la pantalla de registro alineada con la identidad visual de Innova Mentor y adaptada a las necesidades del MVP.

### Cambios realizados

* Se creó la estructura de la pantalla de registro en:

  * `src/pages/Register/Register.jsx`
  * `src/pages/Register/Register.css`

* Se incorporó el avatar de Nova como elemento principal de bienvenida.

* Se definió el flujo de registro con los siguientes campos:

  * Nombre completo
  * Correo electrónico
  * Contraseña
  * Confirmar contraseña

* Se eliminó la propuesta inicial de incluir:

  * Nombre de usuario
  * Fecha de nacimiento

  por considerarse información no necesaria para la primera versión del producto.

* Se mantuvo la identidad visual de Innova Mentor:

  * Colores institucionales
  * Botón principal violeta
  * Estilo visual coherente con la Pantalla Inicial v2

* Se agregó el enlace:

  * "¿Ya tienes una cuenta? Iniciar sesión"

### Decisiones de diseño

* Se optó por formularios sin iconos para lograr una apariencia más moderna y facilitar el mantenimiento del código.

* Se decidió reservar la funcionalidad "¿Olvidaste tu contraseña?" para la futura pantalla de inicio de sesión.

* Se modificó el mensaje de bienvenida para reforzar el rol de Nova como acompañante del proceso de aprendizaje:

  "Comencemos juntos tu camino de aprendizaje."

### Resultado

La Pantalla de Registro v2 quedara a consideracion del grupo para formar parte del MVP y prepararse para futuras integraciones con el sistema de autenticación.

## Implementación de la Pantalla de Inicio de Sesión v2

### Objetivo

Diseñar e implementar una versión mejorada de la pantalla de inicio de sesión, manteniendo la identidad visual de Innova Mentor y la coherencia con la Pantalla Inicial v2 y Registro v2.

### Cambios realizados

* Se creó la estructura de la pantalla de inicio de sesión en:

  * `src/pages/Login/Login.jsx`
  * `src/pages/Login/Login.css`

* Se incorporó el avatar de Nova como elemento principal de bienvenida.

* Se definió el flujo de autenticación con los siguientes campos:

  * Correo electrónico
  * Contraseña

* Se agregó la acción principal:

  * Iniciar sesión

* Se incorporó el enlace:

  * ¿Olvidaste tu contraseña?

* Se agregó la navegación hacia el registro mediante:

  * ¿No tienes una cuenta? Crear cuenta

### Decisiones de diseño

* Se reutilizó la identidad visual desarrollada para Registro v2 con el fin de mantener consistencia en toda la experiencia de autenticación.

* Se utilizó el mensaje de bienvenida:

  "Me alegra verte de nuevo."

  para generar una experiencia más cercana y alineada con la personalidad de Nova.

* Se mantuvo un diseño limpio y moderno utilizando formularios sin iconos.

* Se conservó la paleta de colores institucional de Innova Mentor.

### Resultado

La Pantalla de Inicio de Sesión v2 quedó preparada para futuras integraciones con el sistema de autenticación y forma parte del flujo de acceso definido para el MVP.

---

# Próximas entradas

Esta bitácora continuará creciendo junto con el proyecto.

Aquí quedarán registrados los momentos más importantes del desarrollo:

* La incorporación de Firebase.
* El primer sistema de autenticación.
* Los primeros usuarios.
* La integración de inteligencia artificial.
* El Demo Day.
* Y cualquier otro momento que marque un antes y un después en la historia de Innova Mentor.

---

# Reflexión final

El código muestra cómo funciona una aplicación.

La documentación explica por qué fue construida.

Pero una bitácora conserva algo mucho más valioso:

La historia de las personas que la hicieron posible.

Esperamos que, cuando Innova Mentor esté terminado, este documento recuerde no solo el resultado alcanzado, sino también el camino recorrido para hacerlo realidad.
