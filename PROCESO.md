# Investigacion

## React Native

¿Qué es y qué problema resuelve? ¿Cómo logra que código JavaScript termine mostrando componentes
nativos en el teléfono?

¿En qué se diferencia del desarrollo nativo puro (Kotlin/Swift) y de las apps híbridas basadas en web
(Ionic, PWA)? Ventajas y desventajas de cada enfoque.

Nombren 3 apps conocidas construidas con React Native.

## Expo

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
