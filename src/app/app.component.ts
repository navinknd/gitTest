import { Component, ViewEncapsulation, inject } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Route, Router, RouterOutlet } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // encapsulation: ViewEncapsulation.Emulated, //default only css will apply the same component not for child components note unique attr will be applied
  // encapsulation: ViewEncapsulation.None, //css will apply same component and also for child components note unique attr will be not applied so its applies for all
  // encapsulation: ViewEncapsulation.ShadowDom, // when we use shadowDom its create its own dom and its seperate from the main dom so parent or global css wont work here
})
export class AppComponent {
  title = 'featureAngular';
  router: Router = inject(Router)
  sanitizer: DomSanitizer = inject(DomSanitizer)
  ngOnInit(): void {
    // const sanitizer = this.sanitizer.bypassSecurityTrustUrl(this.title)
    // this.router.events.subscribe((routerEvent: any) => {
    //   if (routerEvent instanceof NavigationStart) {
    //     console.log('show loader NavigationStart');

    //     // show loader
    //   }
    //   if (routerEvent instanceof NavigationEnd) {
    //     console.log('hide loader NavigationEnd');

    //     // hide loader
    //   }
    //   if (routerEvent instanceof NavigationCancel) {
    //     console.log('hide loader NavigationCancel');

    //     // hide loader
    //   }
    //   if (routerEvent instanceof NavigationError) {
    //     console.log('hide loader NavigationError');

    //     // hide loader
    //   }
    // })
  }
}
