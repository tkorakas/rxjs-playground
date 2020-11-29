import { fromEvent, of, interval } from './observable';
import { map, filter } from './operators';

const eventObservable$ = fromEvent(document, 'click');

const subscription = eventObservable$.subscribe({ next: x => console.log(x), complete: () => console.log('operation completed') })

setTimeout(() => {
    console.log('unsubscribed');
    subscription.unsubscribe();
}, 5000);

const arrayObservable$ = of(1, 2, 3, 4, 5)
    .pipe(
        map(value => value + 10),
        filter(value => value > 13)
    );

arrayObservable$.subscribe({ next: console.log, complete: () => { } })

const interval$ = interval(1000).pipe(map(x => `The number is ${x}`));
interval$.subscribe({ next: console.log });