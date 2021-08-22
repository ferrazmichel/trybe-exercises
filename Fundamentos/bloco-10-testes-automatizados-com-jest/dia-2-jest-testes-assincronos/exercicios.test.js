// const uppercase = (str, callback) => {
//   setTimeout(() => {
//     callback(str.toUpperCase());
//   }, 500);
// };

// test('verify if the returned string is uppercase', (done) => {
//   uppercase('teste', (str) => {
//     try {
//       expect(str).toBe("TESTE");
//       done();
//     } catch (error) {
//       done(error);
//     }
//   });
// });

const users = [
  { id: 1, name: 'Mark' },
  { id: 2, name: 'Paul' },
];

const findUserById = (id) => new Promise((resolve, reject) => {
  const result = users.find((user) => user.id === id);

  if (result) {
    return resolve(result);
  }

  return reject(new Error(`User with ${id} not found.`));
});

const getUserName = (userId) => findUserById(userId).then((user) => user.name);

test('verifica se retorna o usuário correto', () => (
  getUserName(1).then((id) => {
    expect(id).toEqual('Mark');
  })
));

test('verifica se retorna erro ao passar usuário inválido', () => {
  expect.assertions(1);
  return getUserName(3).catch((error) => 
    expect(error.message).toBe('User with 3 not found.'));
});
