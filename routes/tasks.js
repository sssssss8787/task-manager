const tasks = [
  { id: 1, title: 'Настроить репозиторий', done: true },
  { id: 2, title: 'Настроить CI', done: false },
];

module.exports = {
  '/tasks': () => tasks,
};
