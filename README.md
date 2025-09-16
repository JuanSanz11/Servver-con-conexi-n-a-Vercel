# 🚀 API de Usuarios con Express

Este proyecto es una API sencilla construida con **Express.js** que permite crear, obtener y actualizar usuarios mediante su `id` y `name`. Ideal para aprender sobre rutas REST, middleware y despliegue en Vercel.

---

## 📦 Estructura del Proyecto

📁 api/ ├── index.js # Archivo principal del servidor ├── users.js # Módulo de rutas para usuarios 📄 vercel.json # Configuración para despliegue en Vercel 📄 package.json # Dependencias y scripts


---

## 🧪 Endpoints disponibles

### ✅ Obtener todos los usuarios
```http
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

git clone https://github.com/tu-usuario/api-usuarios-express.git
cd api-usuarios-express
npm install
npm start

El servidor se ejecutará en http://localhost:3000

🌐 Despliegue en Vercel

🧠 Autor
Creado por Juan — São Paulo, Brasil 🇧🇷

📄 Licencia
Este proyecto está bajo la licencia ISC.
