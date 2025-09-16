const express = require('express');
const router = express.Router();

// Datos de ejemplo (en un proyecto real usarías una base de datos)
let users = [
  { id: '1', name: 'Juan Pérez' },
  { id: '2', name: 'María García' }
];

// Obtener todos los usuarios
router.get('/', (req, res) => {
  res.json(users);
});

// Obtener un usuario por ID
router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'Usuario no encontrado' });
  }
});

// Crear un nuevo usuario
router.post('/', (req, res) => {
  const newUser = req.body;
  
  if (!newUser.id || !newUser.name) {
    return res.status(400).json({ message: 'ID y nombre son requeridos' });
  }
  
  users.push(newUser);
  
console.log('Usuario creado:', newUser); // Loguear la creación del usuario
  
res.status(201).json(newUser);
});

// Actualizar un usuario existente
router.put('/:id', (req, res) => {
console.log('Actualizando usuario con ID:', req.params.id); // Loguear la actualización
  
const userIndex = users.findIndex(u => u.id === req.params.id);
  
if (userIndex !== -1) { 
    users[userIndex] = { ...users[userIndex], ...req.body };
    
console.log('Usuario actualizado:', users[userIndex]); // Loguear el resultado
    
res.json(users[userIndex]);
} else { 
    res.status(404).json({ message: 'Usuario no encontrado' }); 
} 
});

module.exports = router;