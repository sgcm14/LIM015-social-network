# ✨ < CodeGirls > ✨ (Laboratoria)

![RedSocial](https://raw.githubusercontent.com/sgcm14/LIM015-social-network/main/src/assets/img/testing.jpg)

- Este proyecto se realizó siguiendo estas consideraciones [El Proyecto](https://github.com/Laboratoria/LIM015-social-network) , lo desarrollé dentro del segundo mes en [Laboratoria - Sede Lima](https://www.laboratoria.la/)

- **Periodo :** 14 Julio - 12 Agosto, 2021
> En este proyecto se usó HTML, CSS y JS (Firebase para los datos)


## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Criterios que cumple el proyecto](#4-criterios-que-cumple-el-proyecto)
* [5. Consideraciones técnicas](#5-consideraciones-técnicas)

***

## 1. Preámbulo

Instagram, Snapchat, Twitter, Facebook, Twitch, Linkedin, etc. Las redes sociales han invadido nuestras vidas. Las amamos u odiamos, y muchos no podemos vivir sin ellas.

Hay redes sociales de todo tipo y para todo tipo de intereses. Por ejemplo, en una ronda de financiamiento con inversionistas, se presentó una red social para químicos en la que los usuarios podían publicar artículos sobre sus investigaciones, comentar en los artículos de sus colegas, y filtrar artículos de acuerdo a determinadas etiquetas o su popularidad, lo más reciente, o lo más comentado.

## 2. Resumen del proyecto

En este proyecto hemos construido una red social enfocada a toda persona que se identifique como mujer y que tenga preferencia por la tecnología, programación y ciencias.
Nuestro proyecto tiene por nombre **< CodeGirls >**, esta plataforma es  creada para la interacción entre todas las mujeres en el mundo de la programación. En esta plataforma se podrá postear, acceder o crear una cuenta y loguearse con ella; crear, editar, borrar y _"likear"_ post.

## 3. Objetivos de aprendizaje

### HTML

* [x] Uso de HTML semántico.


### CSS

* [x] Uso de selectores de CSS
* [x] Modelo de caja (box model): borde, margen, padding
* [x] Uso de flexbox en CSS
* [x] Uso de CSS Grid Layout


### Web APIs

* [x] Uso de selectores del DOM
* [x] Manejo de eventos del DOM (listeners, propagación, delegación)
* [x] Manipulación dinámica del DOM
* [x] Ruteado (History API, evento hashchange, window.location)


### JavaScript

* [x] Arrays (arreglos)
* [x] Objetos (key, value)
* [x] Diferenciar entre tipos de datos primitivos y no primitivos
* [x] Variables (declaración, asignación, ámbito)
* [x] Uso de condicionales (if-else, switch, operador ternario, lógica booleana)
* [x] Uso de bucles/ciclos (while, for, for..of)
* [x] Funciones (params, args, return)
* [x] Pruebas unitarias (unit tests)
* [x] Pruebas asíncronas
* [x] Uso de mocks y espías
* [x] Módulos de ECMAScript (ES Modules)
* [x] Uso de linter (ESLINT)
* [x] Uso de identificadores descriptivos (Nomenclatura y Semántica)
* [x] Diferenciar entre expresiones (expressions) y sentencias (statements)
* [x] Callbacks
* [x] Promesas


### Control de Versiones (Git y GitHub)

* [x] Git: Instalación y configuración
* [x] Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)
* [x] Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)
* [ ] GitHub: Creación de cuenta y repos, configuración de llaves SSH
* [x] GitHub: Despliegue con GitHub Pages
* [x] GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)
* [x] GitHub: Organización en Github (projects | issues | labels | milestones | releases)


### UX (User eXperience)

* [x] Diseñar la aplicación pensando en y entendiendo al usuario
* [x] Crear prototipos para obtener feedback e iterar
* [x] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
* [x] Planear y ejecutar tests de usabilidad


### Firebase

* [x] Firebase Auth
* [x] Firestore

## 4. Criterios que cumple el proyecto

* [x] Debe ser una SPA.
* [x] Debe ser _responsive_.
* [x] Deben haber recibido _code review_ de al menos una compañera de otro equipo.
* [x] Hicieron los _test_ unitarios
* [x] Testearon manualmente buscando errores e imperfecciones simples.
* [x] Hicieron _pruebas_ de usabilidad e incorporaron el _feedback_ de los usuarios como mejoras.
* [x] Desplegaron su aplicación y etiquetaron la versión (git tag).

#### Creación de cuenta de usuario e inicio de sesión

* _Login_ con Firebase:
  - [x] Para el _login_ y las publicaciones en el muro puedes utilizar [Firebase](https://firebase.google.com/products/database/)
  - [x] Creación de cuenta de acceso y autenticación con cuenta de correo y contraseña, y también con una cuenta de Google.
* Validaciones:
  - [x] Solamente se permite el acceso a usuarios con cuentas válidas.
  - [x] No pueden haber usuarios repetidos.
  - [x] La cuenta de usuario debe ser un correo electrónico válido.
  - [x] Lo que se escriba en el campo (_input_) de contraseña debe ser secreto.
* Comportamiento:
  - [x] Al enviarse el formulario de registro o inicio de sesión, debe validarse.
  - [x] Si hay errores, se deben mostrar mensajes descriptivos para ayudar al usuario a corregirlos.

#### Muro/timeline

* Validaciones:
  - [x] Al publicar, se debe validar que exista contenido en el _input_.
* Comportamiento:
  - [x] Al recargar la aplicación, se debe verificar si el usuario está _logueado_ antes de mostrar contenido.
  - [x] Poder publicar un _post_.
  - [x] Poder dar y quitar _like_ a una publicación. Máximo uno por usuario.
  - [x] Llevar un conteo de los _likes_.
  - [x] Poder eliminar un post específico.
  - [x] Al dar _click_ para editar un _post_, debe cambiar el texto por un _input_que permita editar el texto y luego guardar los cambios.
  - [x] Al guardar los cambios debe cambiar de vuelta a un texto normal pero con la información editada.
  - [x] Al recargar la página debo de poder ver los textos editados.
  - [x] Permite comentar o responder una publicación.
  - [ ] Pedir confirmación antes de eliminar un _post_.
  - [ ] Permite crear posts con imágenes.
  - [ ] Permite buscar usuarios, agregar y eliminar "amigos".
  - [ ] Permite definir la privacidad de los _posts_ (público o solamente para amigos).
  - [ ] Permite ver su muro de cualquier usuario "no-amigo" (solamente los posts _públicos_).
  - [ ] Permite editar perfil.


### 4.1 Definición del producto

#### ¿Quiénes son los principales usuarios del producto?
Toda persona que se identifique como mujer,que les guste la tecnología, programación, ciencias y/o con nociones en lógica, programación.

#### ¿Qué problema resuelve el producto / para qué le servirá a estos usuarios?
Hoy en día vemos páginas, blogs,redes infestadas de información de programación. pero en su mayoría todos son hombres, lo cual hace sentir a las mujeres incómodas al momento de querer hacer comunidad, es por esto que nace esta idea, de crear una red social que sirva para juntar a toda persona que se identifique como mujer, y así acortar la valla y darle a conocer al mundo, que las mujeres tambien podemos estar metidas en la tecnología y aportar igual o más que un hombre.

### 4.2 Historias de usuario
Estas son las historias de usuario:
![](https://raw.githubusercontent.com/sgcm14/LIM015-social-network/main/src/assets/img/historiasUsuarios.jpg)

### 4.3 Diseño de la Interfaz de Usuario (Prototipo de baja fidelidad)

El prototipo de baja fidelidad se realizó en **Figma**, se presenta a continuación:

#### DESKTOP

![](https://raw.githubusercontent.com/sgcm14/LIM015-social-network/main/src/assets/img/PB_desktop_pantallaInicio.png)
>Prototipo de LogIn - Baja fidelidad


![](https://raw.githubusercontent.com/sgcm14/LIM015-social-network/main/src/assets/img/PB_desktop_pantallaPrincipal.png)
>Prototipo de pantalla principal - Baja fidelidad


![](https://raw.githubusercontent.com/sgcm14/LIM015-social-network/main/src/assets/img/PB_desktop_pantallaPerfil.png)
>Prototipo de pantalla de perfil - Baja fidelidad


![](https://raw.githubusercontent.com/sgcm14/LIM015-social-network/main/src/assets/img/PB_dektop_pantallaNotificaciones.png)
>Prototipo de pantalla de notificaciones - Baja fidelidad


#### MOBILE

![](https://raw.githubusercontent.com/sgcm14/LIM015-social-network/main/src/assets/img/PB_mobile_parte0.png)
>Prototipo de pantalla de LogIn (mobile) - Baja fidelidad


![](https://raw.githubusercontent.com/sgcm14/LIM015-social-network/main/src/assets/img/PB_mobile_parte1.png)
>Prototipo de pantalla principal (mobile) - Baja fidelidad


![](https://raw.githubusercontent.com/sgcm14/LIM015-social-network/main/src/assets/img/PB_mobile_parte2.png)
>Prototipo de pantalla de perfil  (mobile) - Baja fidelidad


### 4.4 Diseño de la Interfaz de Usuario (Prototipo de alta fidelidad)

El prototipo de alta fidelidad se realizó en **Figma**, se presenta a continuación:

#### DESKTOP


![](https://raw.githubusercontent.com/sgcm14/LIM015-social-network/main/src/assets/img/PA_desktop_pantallaInicio.png)
>Prototipo de LogIn - Alta fidelidad


![](https://raw.githubusercontent.com/sgcm14/LIM015-social-network/main/src/assets/img/PA_desktop_pantallaPrincipal.png)
>Prototipo de pantalla principal - Alta fidelidad


![](https://raw.githubusercontent.com/sgcm14/LIM015-social-network/main/src/assets/img/PA_desktop_pantallaPerfil.png)
>Prototipo de pantalla perfil - Alta fidelidad


![](https://raw.githubusercontent.com/sgcm14/LIM015-social-network/main/src/assets/img/PA_desktop_pantallaNotificaciones.png)
>Prototipo de pantalla notificaciones - Alta fidelidad

#### MOBILE


![](https://raw.githubusercontent.com/sgcm14/LIM015-social-network/main/src/assets/img/PA_mobile_parte1.png)
>Prototipo de pantalla LogIn (mobile) - Alta fidelidad


![](https://raw.githubusercontent.com/sgcm14/LIM015-social-network/main/src/assets/img/PA_mobile_parte2.png)
>Prototipo de pantalla principal (mobile) - Alta fidelidad


![](https://raw.githubusercontent.com/sgcm14/LIM015-social-network/main/src/assets/img/PA_mobile_parte3.png)
>Prototipo de pantalla acceso a canales y búsqueda de aliadas (mobile) - Alta fidelidad


![](https://raw.githubusercontent.com/sgcm14/LIM015-social-network/main/src/assets/img/PA_mobile_parte4.png)
>Prototipo  de pantalla perfil (mobile) - Alta fidelidad


![](https://raw.githubusercontent.com/sgcm14/LIM015-social-network/main/src/assets/img/PA_mobile_parte5.png)
>Prototipo  de pantalla notificaciones (mobile) - Alta fidelidad
    

### 4.5 Entrevistas con usuarios

Cuando terminamos de hacer los prototipos en figma, les pasabamos el link a nuestros usuarios. De los cuáles comentaron:
  - El color de los botones de iniciar sesión con google confunden y parece inicio con facebook.
  - Los colores de la página no me llaman tanto, porque me gustan más los colores oscuros.
  - Me encanta y me inspira poder agregar mi frase favorita en mi perfil, ya quiero que este este terminada y poder usar su pagina.
  - Tu prototipo me encanta.
  - Los botones en login confunden y no son asimétricos.
  - Los botones y los inputs en el home tienen el mismo estilo  y a primera vista me pareció que todos eran inputs.
  - Los botones de eliminar y modificar  de los comentarios podrian ser más amigables.

### 4.6 Implementación de la Interfaz de Usuario (HTML/CSS/JS)
A continuacion de muestra el funcionamiento de la pagina:

Ingreso a la web: Cuando el usuario no escribe correctamente el correo al dar click en **Iniciar Sesión**

![](https://raw.githubusercontent.com/sgcm14/LIM015-social-network/main/src/assets/img/pantalla1.jpg)
>Pantalla de **Login**


La página le alertará que no es un correo válido.

![](https://raw.githubusercontent.com/sgcm14/LIM015-social-network/main/src/assets/img/pantalla2.jpg)
>Pantalla de **Login**


Ingreso a la web: Si el usuario no escribe coorectamente su clave o se equivoca de cuenta, al dar click en **Iniciar Sesión** la página también le alertará.

![](https://raw.githubusercontent.com/sgcm14/LIM015-social-network/main/src/assets/img/pantalla3.jpg)
>Pantalla de **Login**


Ingreso a la web: El usuario puede ingresar con Google al darle click en **Acceder con Google**

![](https://raw.githubusercontent.com/sgcm14/LIM015-social-network/main/src/assets/img/pantalla4.jpg)
>Pantalla de **Login**


Ingreso a la web: El usuario al dar click en **Crear cuenta**

![](https://raw.githubusercontent.com/sgcm14/LIM015-social-network/main/src/assets/img/pantalla5.jpg)
>Pantalla de **Login**


Al dar click en **Crear cuenta** se abre una ventana con datos que debes llenar correctamente y dar click en **Registrarme**

![](https://raw.githubusercontent.com/sgcm14/LIM015-social-network/main/src/assets/img/pantalla6.jpg)
>Pantalla de **Login**


Al loguearse correctamente se redirecciona a **Muro Principal** 

![](https://raw.githubusercontent.com/sgcm14/LIM015-social-network/main/src/assets/img/pantalla7.jpg)
>Pantalla de **Muro Principal**


Al dar click en **Crear nueva publicación** 

![](https://raw.githubusercontent.com/sgcm14/LIM015-social-network/main/src/assets/img/pantalla8.jpg)
>Pantalla de **Muro Principal**


El usuario puede publicar algo e insertar emoticones para hacerlo debe hacer click en **Publicar**

![](https://raw.githubusercontent.com/sgcm14/LIM015-social-network/main/src/assets/img/pantalla9.jpg)
>Pantalla de **Muro Principal**


El usuario puede dar likes o quitarlos al dar click en **❤**

![](https://raw.githubusercontent.com/sgcm14/LIM015-social-network/main/src/assets/img/pantalla10.jpg)
>Pantalla de **Muro Principal**


El usuario puede Editar alguna publicación al dar click en **Editar**

![](https://raw.githubusercontent.com/sgcm14/LIM015-social-network/main/src/assets/img/pantalla11.jpg)
>Pantalla de **Muro Principal**


El usuario puede Eliminar alguna publicación al dar click en **Eliminar**

![](https://raw.githubusercontent.com/sgcm14/LIM015-social-network/main/src/assets/img/pantalla12.jpg)
>Pantalla de **Muro Principal**


### 4.7 Testeos de usabilidad

Mientras se agregaba maquetado, estilos y usabilidad, se desplegó en github pages, y se pasó el link a nuestros usuarios y nos dieron el siguiente feedback:
  - Cuando me logueo la página no me avisa cuando cometo un error o si no escribo bien mis datos.
  - Cuando me registro nose si el sistema está procesando mis datos, porque demora en cargar la página.
  - No se adapta a mi dispositivo.

## 5. Consideraciones técnicas

La lógica del proyecto esta implementada completamente en JavaScript (ES6+), HTML y CSS. No se utiliza_frameworks_ o librerías de CSS y JS.

### Pruebas unitarias (unit tests)

Los tests unitarios cubren un mínimo del 70% de _statements_ _functions_,  _lines_, y _branches_.


**Realizado por :** 

Sammy Gigi Cantoral Montejo (sgcm14)

![](https://edteam-media.s3.amazonaws.com/users/avatar/16f3b00c-18cf-43f5-af5f-f9692fa3e5f1.jpg)