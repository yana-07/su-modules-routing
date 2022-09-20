import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.isUserLoggedIn()) {
      return true;
    }

    // this.router.navigate(['/about']); -> this is a side effect of the method
    // return false;

    return this.router.createUrlTree(['/about']); // no side effect, thus better
  }

  isUserLoggedIn(): boolean {
    return !!(window as any).isLoggedIn
  } 
}
