import { bootstrapApplication } from '@angular/platform-browser';
import { provideState, provideStore } from '@ngrx/store';
import { AppComponent } from './app/app.component';
import { counterReducer } from './app/store/counter.reducer';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore(),
    provideState({ name: 'counter', reducer: counterReducer})
  ]
})
  .catch((err) => console.error(err));
