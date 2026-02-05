# Catbreeds.

Es una aplicación móvil simple donde podemos encontrar información de diferente razas de gatos, realizada en react- native donde ponemos en practico las principales características que podemos tener en de una aplicación móvil

Algunas características técnicas de la app:

- Una navegación sencilla haciendo uso de react-navigation.
- Realizado en una arquitectura Atómica.
- Consumo de los endpoint con Axidos de una api publica de gatos ( https://thecatapi.com/ )
- Gestor de estado para tener la información de la api almacenada reduxjs
- Tiene icono y drawer

Algunos pantallazos de la aplicación:

<img src="README_Pictures/Screenshot_1770256103.png" width="30%">
<img src="README_Pictures/Screenshot_1770252976.png" width="30%">
<img src="README_Pictures/Screenshot_1770252971.png" width="30%">

Instalacion :

Nota: Tener previamente configurado un entorno de react-native funcional _(https://reactnative.dev/docs/set-up-your-environment)_

Paso 1: Instalar las depencias

```markdown
# Using npm

npm start

# OR using Yarn

yarn start
```

Paso 2: Ejecutar la app

Abra una nueva ventana/panel de terminal desde la raíz de su proyecto React Native y use uno de los siguientes comandos para compilar y ejecutar su aplicación Android o iOS:

Android

# Usando npm

npm run android

# O usando Yarn

yarn android

iOs

Para iOS, recuerda instalar las dependencias de CocoaPods (esto solo debe ejecutarse en el primer clon o después de actualizar las dependencias nativas).

La primera vez que crees un proyecto, ejecuta el empaquetador de Ruby para instalar CocoaPods:

```bash
bundle install

```

Luego, y cada vez que actualices tus dependencias nativas, ejecuta:

```bash
bundle exec pod install

```

Para más información, visita la [Guía de inicio de CocoaPods](https://guides.cocoapods.org/using/getting-started.html).

```bash
# Usando npm
npm run ios

# O usando Yarn
yarn ios

```

Si todo está configurado correctamente, deberías ver tu nueva aplicación ejecutándose en el emulador de Android, el simulador de iOS o en tu dispositivo conectado.

Esta es una forma de ejecutar tu aplicación; también puedes compilarla directamente desde Android Studio o Xcode.
