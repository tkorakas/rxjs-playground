// import { fromEvent, Observable, of } from "rxjs";
// import { takeUntil, switchMap, map, pluck } from "rxjs/operators";

// const mouseDown$ = fromEvent(document, "mousedown");
// const mouseMove$ = fromEvent(document, "mousemove");
// const mouseUp$ = fromEvent(document, "mouseup");

// mouseDown$
//   .pipe(switchMap(() => mouseMove$.pipe(takeUntil(mouseUp$), pluck("clientX"))))
//   .subscribe((x: number) => {
//     console.log(x);
//   });

// // const o = new Observable((subscribe) => {
// //     subscribe.next(1);
// //     subscribe.next(1);
// //     subscribe.next(1);
// //     subscribe.complete();
// //     subscribe.next(2);
// // });

// // o.pipe(
// //     // map((v: number) => v + Math.random() * 10),
// //     // filter((v: number) => v > 5)
// // ).subscribe(console.log);

// map((x: number) => x * x)(of(1, 2, 3)).subscribe((v) =>
//   console.log(`value: ${v}`)
// );

interface Observer {
  next: Function;
  error?: Function;
  complete?: Function;
}
interface Subscription {
  unsubscribe: Function;
}
interface Observable {
  subscribe: (observer: Observer) => Subscription;
}

function createObservable(subscribe: Observable) {}
