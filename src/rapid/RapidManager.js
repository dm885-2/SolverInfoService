import rapid from '@ovcina/rapidriver';
import {RiverSubscription} from './RiverSubscription';

export class RapidManager {

  #host;
  #subscriptions;

  constructor(host) {
    this.#host = host;
    this.#subscriptions = {};
  }

  publishAndWait(river, session, data, callback) {
    let subscription;
    if (river in this.#subscriptions) {
      subscription = this.#subscriptions[river];
    } else {
      subscription = new RiverSubscription(this.#host, river);
    }
    subscription.addCallback(session, callback);

    rapid.publish(this.#host, river, data);
  }
}
