import { fromEvent } from "rxjs";
import { takeUntil, switchMap, map, pluck } from "rxjs/operators";

const mouseDown$ = fromEvent(document, "mousedown");
const mouseMove$ = fromEvent(document, "mousemove");
const mouseUp$ = fromEvent(document, "mouseup");

mouseDown$
    .pipe(switchMap(() => mouseMove$.pipe(takeUntil(mouseUp$), pluck("clientX"))))
    .subscribe((x) => {
        console.log(x);
    });
