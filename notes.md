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

## Runtimes

Node

- 2009
- Ryan Dahl
- I/O context.SaveChanges();
- kan nu een beetje soort van TypeScript uitvoeren:
  ```sh
  node bla.ts --experimental-strip-types
  ```
  Doet enkel uitvoeren, geen type checking.

Deno

- 2020
- ook Ryan Dahl
- modernere API
- veiliger
  ```sh
  deno run --allow-net --allow-read C:\temp bla.ts
  ```
- TypeScript out of the box
- node_modules
- import { ... } from 'https://...../stdin@4.1.7/bla.ts';
  - distributed package management system
- was niet compatible met npm packages, pas vanaf de grote v2

Bun

- 2021
- Oven
- nadeel: Venture Capitalist $$$, wat wordt hun grote commercialisatieslag?
- performance++
- TypeScript
- compatible met npm packages
