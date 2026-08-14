# Investigacion

## -- React Native --

## ¿Qué es y qué problema resuelve? ¿Cómo logra que código JavaScript termine mostrando componentes nativos en el teléfono?

Creado en Facebook y publicado en Febrero de 2015 React Native es un framework para la creación de aplicaciones nativas para iOS y Android. Para programar aplicaciones usando React Native usamos como lenguaje de programación JavaScript, en lugar de Swift, JAVA u otros lenguajes y por el resto usamos React para la creación de la interfaz del usuario. 

  React Native soluciona el problema de tener que crear y mantener dos aplicaciones móviles separadas (una para iOS y otra para Android). Permite a los programadores usar un solo lenguaje de programación, JavaScript, para construir aplicaciones que funcionen en ambos sistemas operativos al mismo tiempo.

React Native convierte tu código JavaScript en componentes móviles reales a través de un proceso llamado puente (o bridge) y un motor de JavaScript. En lugar de mostrar una página web (como hace una aplicación web móvil), la aplicación crea elementos reales del sistema operativo de tu teléfono (como iOS o Android).

## Fuentes:
https://codigofacilito.com/articulos/que-es-react-native

https://www.doonamis.com/react-native-que-es-ventajas-desventajas/


## ¿En qué se diferencia del desarrollo nativo puro (Kotlin/Swift) y de las apps híbridas basadas en web (Ionic, PWA)? Ventajas y desventajas de cada enfoque.

*Una app nativa es la que se desarrolla específicamente para cada sistema operativo usando sus herramientas oficiales: Xcode con Swift para iOS, y Android Studio con Kotlin para Android. Es la opción más cara y la más lenta, pero también la que da el mejor rendimiento y la mejor experiencia de usuario.

Ventajas:

Rendimiento máximo: la app aprovecha al 100 % los recursos del dispositivo.

Acceso completo a hardware: cámara avanzada, sensores, biometría, NFC, ARKit, ARCore.
Experiencia de usuario perfectamente integrada con cada sistema operativo.

Mejor rendimiento en gráficos, animaciones complejas y procesos en tiempo real.

Desventajas: 

Coste orientativo: alto. 

Hay que desarrollar dos apps (una para iOS y otra para Android) y mantener dos bases de código en paralelo, lo que en una app de complejidad media puede suponer entre un 60 % y un 100 % más de coste frente a las otras opciones. 

*Una app híbrida es esencialmente una web empaquetada dentro de un contenedor nativo. El contenido se renderiza en un WebView (un mini-navegador escondido) y se publica en las stores como si fuera una app cualquiera. Tecnologías clásicas: Cordova, PhoneGap, Ionic (en su modo WebView).

Ventajas:

Coste de desarrollo muy bajo.

Tiempo de desarrollo rápido (cualquier equipo web puede hacerlo).

Una sola base de código para iOS y Android.

Desventajas:

Las apps híbridas suelen ofrecer una experiencia notablemente peor que las nativas o multiplataforma modernas. Notarás lags en las transiciones, problemas de rendimiento en listados largos y limitaciones serias para acceder a funcionalidades nativas del dispositivo. En 2026, con Flutter y React Native ya tan maduros, muy pocas empresas eligen híbrida clásica para producto profesional. 


*Una PWA (Progressive Web App) es una web moderna con superpoderes. Funciona en cualquier navegador, pero el usuario puede «instalarla» en la pantalla de inicio del móvil sin pasar por App Store ni Google Play. Una vez instalada, se comporta como una app: funciona offline, recibe notificaciones push, se abre en pantalla completa y carga muy rápido.

Ventajas:

Sin coste de stores: no hay que pagar el 99 € anual de Apple ni el 25 € de Google.

Actualización instantánea: los cambios se publican como en una web, sin esperar la revisión de Apple ni de Google.

Sin proceso de aprobación: evitas que Apple o Google rechacen tu app por motivos arbitrarios.

Un solo desarrollo que funciona en iOS, Android, escritorio y cualquier dispositivo con navegador.
SEO real: la PWA es indexable por Google, lo que la app nativa no consigue.

Desventajas: 

No aparece en las stores, lo que limita el descubrimiento orgánico.
Acceso restringido a algunas funcionalidades nativas (biometría avanzada, Bluetooth LE complejo, NFC en iOS).
La experiencia, aunque muy buena, no llega al 100 % de fluidez de una app nativa.


## Nombren 3 apps conocidas construidas con React Native.

Apps creadas con React Native

Facebook: La red social utiliza este framework, el cual fue creado por ellos mismos, para optimizar el rendimiento de sus funciones principales y mantener un desarrollo ágil en iOS y Android. 

Instagram: Implementó la tecnología para integrar código compartido entre plataformas de forma sencilla, permitiendo que funciones como las notificaciones push o la edición de perfiles se carguen de manera mucho más rápida. 

Discord: La famosa plataforma de comunicación construyó su aplicación móvil utilizando casi en su totalidad el mismo código tanto para iOS como para Android, logrando un rendimiento fluido y libre de errores de forma masiva.


## -- Expo --

¿Qué agrega Expo sobre React Native "pelado"? ¿Qué es Expo Go y por qué facilita probar en el
teléfono?

_Expo agrega herramientas y servicios que permiten eliminar la complejidad de gestionar código nativo, Expogo es un entorno de aprendizaje y también es un entorno de prueba para ejecutar código de reactNative o JavaScript sin que tenga que antes compilar el código_

_-cita La respuesta generada por el buscador de google, la propia pagina web de expoGo_

¿Qué es expo-router y cómo maneja la navegación?

_Expo-router es una biblioteca creada con expo y se la utiliza para el enrutamiento de archivo en aplicación universales de react native y web, expo-router utiliza una navegación por defecto llamada navegación por pilas que consiste en administa pantallas en una pila de ultima en entrar, primera en salir donde cada pantalla agregada a la pila representa una vista distinta de la aplicación y al navegar en una nueva pantalla la empuja hacia la pila pero si se navega hacia atrás elimina la pantalla superior de la pila_

_-Respuesta automática generada por el buscador de google, https://medium.com/@tahnyybelguith/exploring-stack-navigation-and-screens-in-react-native-32e38db3b213_

¿Cuándo conviene usar Expo y qué limitaciones tiene?

_Conviene usar Expo cuando se quiere desarrolla una aplicación móvil sin saber mucho de esta ya que este minimiza la complejidad inicial y también es recomendad si necesitas hacer una aplicación móvil en poco tiempo, pero si se quiere realizar aplicación que sea mucho mas grande además no puede utilizar librerías de terceros que contengan código nativo personalizado_

_-Vision genera por el buscador de google, https://www.reddit.com/r/reactnative/comments/1q9253d/is_expo_really_worth_it_coming_from_bare_react/?tl=es-419_

## SDD — Spec-Driven Development

¿Qué es el desarrollo guiado por especificaciones y por qué apareció junto con los agentes de IA? ¿Qué
es el "vibe coding" y qué problemas trae?

¿Cuál es el flujo típico de SDD? (reglas del proyecto → especificación → plan técnico → tareas →
implementación)

¿Qué herramientas existen? Investiguen al menos GitHub Spec Kit y una alternativa (por ejemplo Kiro).
¿Con qué agentes de IA funcionan

## Agentes de código y skills

¿Qué es un agente de código (Claude Code, GitHub Copilot, Cursor, Gemini CLI) y en qué se diferencia
de un chat común?

¿Para qué sirven los archivos de contexto como AGENTS.md o CLAUDE.md ?

¿Qué son las skills de un agente? ¿Dónde se consiguen skills hechas por la comunidad y cómo se
instalan?

## Mocks

¿Qué es un mock y por qué permite desarrollar un frontend completo sin tener backend?

¿Qué estrategias hay en React Native? (JSON estático, servicio simulado con Promise + setTimeout ,
AsyncStorage )
