import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  host: { class: 'app-layout' },
})
export class LayoutComponent {
  pageTitle: string | undefined;
  username: string | undefined;
  showLogout: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationEnd),
    //   map(() => this.activatedRoute),
    //   map(route => {
    //     while (route.firstChild) route = route.firstChild;
    //     return route;
    //   }),
    //   filter(route => route.outlet === 'primary'),
    //   mergeMap(route => route.data)
    // ).subscribe(data => {
    //   if (data.pageTitle) {
    //     this.pageTitle = data.pageTitle;
    //   }
    // });
    console.log('route', this.pageTitle);

    const storedUsername = sessionStorage.getItem('username');
    if (storedUsername !== null) {
      this.username =
        storedUsername.charAt(0).toUpperCase() +
        storedUsername.slice(1).toLowerCase();
    } else {
      this.username = '';
    }
  }

  toggleLogout() {
    this.showLogout = !this.showLogout;
  }

  logout() {
    this.router.navigate(['/']);
  }
}
