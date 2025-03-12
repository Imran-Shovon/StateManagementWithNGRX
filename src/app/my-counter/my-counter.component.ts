import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../store/counter.actions';
import { selectCount } from '../store/counter.selectors';

@Component({
  selector: 'app-my-counter',
  imports: [CommonModule],
  templateUrl: './my-counter.component.html',
  styleUrl: './my-counter.component.css'
})
export class MyCounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{count: number}>){
    this.count$ = store.select(selectCount)
  }

  increment(){
    this.store.dispatch(increment());
  }

  decrement(){
    debugger;
    console.log('decrement', this.count$)
    this.store.dispatch(decrement());
  }

  reset(){
    this.store.dispatch(reset());
  }
}
