import {Injectable} from '@angular/core'
import {Subject} from 'rxjs'

@Injectable()
export class ToggleService {

toggleSubject = new Subject<number>();
obsevables =  this.toggleSubject.asObservable();
 constructor()
 {

 }
  toggled(id)
  {
     this.toggleSubject.next(id);
  }

}
