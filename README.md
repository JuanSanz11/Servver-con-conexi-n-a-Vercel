# 🚀 API de Usuarios con Express

Este proyecto es una API sencilla construida con **Express.js** que permite crear, obtener y actualizar usuarios mediante su `id` y `name`. Ideal para aprender sobre rutas REST, middleware y despliegue en Vercel.

<img width="667" height="833" alt="Captura de Tela 2025-09-16 às 19 00 32" src="https://github.com/user-attachments/assets/5645a331-07e9-4e17-8287-3c0fef44937e" />
<img width="674" height="827" alt="Captura de Tela 2025-09-16 às 19 00 43" src="https://github.com/user-attachments/assets/d1c2f85a-3a76-4914-89af-387c3a0b1176" />

---

## 📦 Estructura del Proyecto

📁 api/ 

── index.js # Archivo principal del servidor 

── users.js # Módulo de rutas para usuarios 

📄 vercel.json # Configuración para despliegue en Vercel 

📄 package.json # Dependencias y scripts

---

## 🧪 Endpoints disponibles

### ✅ Obtener todos los usuarios
```http

🔍 Obtener usuarios general
GET /api/users

🔍 Obtener usuario por ID
GET /api/users/:id


➕ Crear nuevo usuario

POST /api/users
Content-Type: application/json

{
  "id": "3",
  "name": "John Doe"
}

✏️ Actualizar usuario existente

PUT /api/users/1
Content-Type: application/json

{
  "name": "Andre"
}
```

🛠️ Instalación y ejecución local

```
cd api-usuarios-express
npm install
npm start
```

El servidor se ejecutará en http://localhost:3000

🌐 Despliegue en Vercel

https://servver-con-conexi-n-a-vercel.vercel.app/

🧠 Autor
Creado por Juan — São Paulo, Brasil 🇧🇷

📄 Licencia
Este proyecto está bajo la licencia ISC.
