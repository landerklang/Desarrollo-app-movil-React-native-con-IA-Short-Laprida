## La herramienta SDD elegida para este proyecto es la de Cline con el modelo Gemini Pro.

## Las reglas del proyecto son estas, al igual que esta definidas en el archivo .clinerules dentro del proyecto Expo:

# Reglas del Proyecto (Constitution) - App Catálogo SCP

## Stack Tecnológico Obligatorio
- Framework: React Native con Expo (Expo Go).
- Navegación: expo-router.
- Lenguaje: TypeScript.
- Estilos: StyleSheet de React Native (o la librería de estilos que prefieran, ej: NativeWind).

## Restricciones Críticas (Prohibiciones)
- NO crear ni sugerir código de Backend (Node.js, Express, Python, etc.).
- NO configurar bases de datos reales (SQL, Firebase, MongoDB).
- Todo el manejo de datos debe hacerse mediante MOCKS (archivos .json locales o estados en memoria usando Zustand/Context API).
- NO instalar librerías nativas que requieran pre-build, la app debe funcionar puramente en Expo Go.

## Convenciones de Código
- Nombres de variables, funciones y componentes: en Inglés (ej: ScpList, containmentProcedure).
- Textos de la Interfaz de Usuario (UI) y comentarios: en Español.
- Mantener los componentes pequeños y modulares.


## La spec se encuentra en el archivo SPEC.md

# Pasas realizados con la ia y promps

## 1. Estrucutura base y primer historia de usario (primer prompt)

"Vamos a iniciar el desarrollo de la app siguiendo la metodología SDD.

Primero, lee detenidamente los archivos .clinerules y SPEC.md. Confírmame que entendiste las reglas (especialmente la prohibición de usar backend real).

Una vez que lo leas, empezá a crear la estructura base del proyecto para expo-router (carpeta app, _layout.tsx, etc.).

Creá un archivo de "mocks" con datos falsos de 3 o 4 anomalías SCP para poder probar la app.

Desarrollá la primera historia de usuario (HU1): la pantalla del catálogo (index.tsx) que muestre la lista de SCPs usando los mocks.

Paso a paso. Mostrar que archivos vas a crear o modificar."