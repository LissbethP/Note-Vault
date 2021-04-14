   ![NoteVault](https://user-images.githubusercontent.com/55729897/114631309-933a9d00-9c79-11eb-8574-f8f90d81aa1b.jpeg)
# Note-Vault
Aplicación de proyecto Movil II 

La aplicación Vaul de Notas, cumple la función de almacenar fotos y videos en la nube
pero esta los ocultará mostrando una app de notas en donde se puede ecribir, editar y agregar notas. 


# Imágenes del proyecto
Note-Vault 

# Tecnologías utilizadas

# Instrucciones para la instalación
Clona este repositorio. Necesitas tener instalado node, npm y expo-cli de manera global en tu computadora.

Debes crear el archivo enviroment.js en la raíz del directorio y configurarlo de la siguiente manera:

import Constant from 'expo-constants';

const ENV = {
    dev:{
        apiKey: "AIzaSyCUcgFN8JLn4PO-qRuI5KoVGWpkHK_LFiA",
        authDomain: "notevault-a2667.firebaseapp.com",
        projectId: "notevault-a2667",
        storageBucket: "notevault-a2667.appspot.com",
        messagingSenderId: "875420519170",
        appId: "1:875420519170:web:3d61dba62c3b6b2a05d01b"
    },
    production: {
        apiKey: "AIzaSyCUcgFN8JLn4PO-qRuI5KoVGWpkHK_LFiA",
        authDomain: "notevault-a2667.firebaseapp.com",
        projectId: "notevault-a2667",
        storageBucket: "notevault-a2667.appspot.com",
        messagingSenderId: "875420519170",
        appId: "1:875420519170:web:3d61dba62c3b6b2a05d01b" 
    }
};

const getEnvVars = (env = Constant.manifest.releaseChannel) => {
    if(__DEV__) return ENV.dev;
    else if(env === "production" || env === "default") return ENV.production;
};

export default getEnvVars;




Instalación:
npm install

Iniciar Expo Metro:
expo start

# --
Presentado por: Lissbeth Peralta & Lener Quiroz

Proyecto expo: https://expo.io/@lenerq/NoteVault
