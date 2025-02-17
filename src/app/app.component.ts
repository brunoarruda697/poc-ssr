import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'poc-ssr';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(platformId)) {
      console.log("Resultado é gerado apenas no navegador, não no servidor.", platformId);
    }
    if (isPlatformServer(platformId)) {
      console.log("Resultado é gerado apenas no servidor, não no navegador.", platformId);
    }
  }
}
