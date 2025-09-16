const users = [
  { id: '1', name: 'Juan Pérez' },
  { id: '2', name: 'María García' }
];

module.exports = (req, res) => {
  if (req.method === 'GET') {
    res.status(200).json(users);
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
};
