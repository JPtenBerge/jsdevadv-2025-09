# Notes

## `this` bij callbacks in bijv. Angular

```ts
export class HomeComponent {
  http = inject(HttpClient);
  products;

  ngOnInit() {
    let func = function (products) {
      this.products = products;
    };
    this.http.get("api/products").subscribe(func.call(this));

    let self = this;
    this.http.get("api/products").subscribe(function (products) {
      self.products = products;
    });

    this.http.get("api/products").subscribe((products) => {
      this.products = products;
    });
  }
}
```

## Wie onderhoudt JavaScript?

- Brendan Eich
  - Netscape Navigator
  - Netscape Communicator

W3C - nee.
ECMA International ECMAScript

## JS runtimes/engines

- V8 Chromium Node.js Deno
- SpiderMonkey Firefox
- JavaScriptCore Safari Bun
- specialistische - AWS LLRT

## Symbols

Zou in Angular goed kunnen:

```ts
import { OnInitSymbol } from "@angular/lifecycle";

export class HomeComponent {
  [OnInitSymbol]() {}

  // ipv

  onInit() {}
}
```

## Polyfills

Polyfill: als de browser het niet heeft, vul dat gat op

```ts
if (!window.Temporal) {
	window.Temporal = { ... }:
}
```
