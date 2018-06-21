/**
 * Created by lis on 6/18/18.
 */
import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
@Injectable()
export class CheckGuard implements CanActivate {

  canActivate(): boolean {

    return true;
  }


}
