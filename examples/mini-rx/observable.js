export class Subscription {
  constructor(unsubscribe) {
    this.unsubscribe = unsubscribe;
  }
}

export class Observable {
  constructor(subscribe) {
    this.subscribe = subscribe;
  }

  pipe(...operators) {
    return operators.reduce((stream$, operator) => operator(stream$), this)
  }
}

export function fromEvent(eventTarget, eventType) {
  return new Observable((observer) => {
    eventTarget.addEventListener(eventType, observer.next);
    const subscription = new Subscription(() => eventTarget.removeEventListener(eventType, observer.next));
    return subscription;
  });
}

export function of(...values) {
  return new Observable((observer) => {
    values.forEach((value) => observer.next(value));
    observer.complete();

    return new Subscription(() => { });
  });
}

export function interval(period) {
  return new Observable((observer) => {
    let count = 0;
    const interval = setInterval(() => {
      observer.next(++count);
    }, period)

    return new Subscription(() => clearInterval(interval));
  });
}