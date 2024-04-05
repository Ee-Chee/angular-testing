import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  protected accessGranted = false;

  isAccessGranted() {
    return this.accessGranted;
  }

  getAccess() {
    this.accessGranted = true;
  }
}

 export const routeGuard: CanActivateFn = (
   route: ActivatedRouteSnapshot,
   state: RouterStateSnapshot,
 ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
    const permissionService = inject(PermissionService);
    const router = inject(Router);
    let isLoggedIn = permissionService.isAccessGranted();
    
    if (isLoggedIn){
      return true;
    } else {
      return router.navigateByUrl('/get-permission');
    }
 };
