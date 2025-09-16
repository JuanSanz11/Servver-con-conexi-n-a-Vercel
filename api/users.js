const users = [
  { id: '1', name: 'Juan Pérez' },
  { id: '2', name: 'María García' }
];

module.exports = (req, res) => {
  const { method, url } = req;

  if (method === 'GET' && url === '/api/users') {
    return res.status(200).json(users);
  }

  if (method === 'GET' && url.startsWith('/api/users/')) {
    const id = url.split('/').pop();
    const user = users.find(u => u.id === id);
    return user
      ? res.status(200).json(user)
      : res.status(404).json({ message: 'Usuario no encontrado' });
  }

  if (method === 'POST' && url === '/api/users') {
    let body = '';
    req.on('data', chunk => (body += chunk));
    req.on('end', () => {
      const newUser = JSON.parse(body);
      if (!newUser.id || !newUser.name) {
        return res.status(400).json({ message: 'ID y nombre son requeridos' });
      }
      users.push(newUser);
      console.log('Usuario creado:', newUser);
      return res.status(201).json(newUser);
    });
    return;
  }

  res.status(405).json({ message: 'Método no permitido' });
};
