import {host, query, subscriber} from './helpers.js';

export async function listSolvers(msg, publish) {
  const solvers = await query('SELECT * FROM `solvers`;');

  publish('list-solvers-response', {
    solvers: solvers,
    sessionId: msg.sessionId,
    requestId: msg.requestId
  })
}

if (process.env.RAPID) {
  subscriber(host, [{river: 'solvers', event: 'list-solvers', work: listSolvers}]);
}
