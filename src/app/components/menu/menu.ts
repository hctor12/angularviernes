import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  template: `
    <nav>
      <ul class="flex gap-x-10 list-none">
        <li><a routerLink="">Home</a></li>
        <li><a routerLink="personas">Personas</a></li>
      </ul>
    </nav>
  `,
  styles: ``,
})
export class Menu {}
