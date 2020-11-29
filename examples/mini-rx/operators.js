import { Observable, Subscription } from './observable';

export const map = transformer => (stream$) => new Observable((observer) => {
  stream$.subscribe(
    {
      next: value => observer.next(transformer(value)),
      error: error => observer.error(),
      complete: complete => observer.complete()
    }
  )
  return new Subscription(() => { });
});

export const filter = predicate => (observable$) => new Observable((observer) => {
  observable$.subscribe({
    next: value => predicate(value) && observer.next(value),
    error: error => observer.error(),
    complete: complete => observer.complete()
  });
  return new Subscription(() => { });
});