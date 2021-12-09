import {host, query, subscriber} from './helpers.js';

export async function listSolvers(msg, publish) {
  const solvers = await query('SELECT * FROM `solvers`;');

  publish('list-solvers-response', {
    solvers: solvers,
    sessionId: msg.sessionId,
    requestId: msg.requestId
  })
}

export async function addSolver(msg, publish) {
  const stmt = await query('INSERT INTO `solvers` (`name`, `docker_image`) VALUES (?, ?)', [
    msg.name,
    msg.docker_image
  ]);

  publish('add-solver-response', {
    error: !stmt,
    sessionId: msg.sessionId,
    requestId: msg.requestId
  });
}

if (process.env.RAPID) {
  subscriber(host, [
    {river: 'solvers', event: 'list-solvers', work: listSolvers},
    {river: 'solvers', event: 'add-solver', work: addSolver}
  ]);
}
