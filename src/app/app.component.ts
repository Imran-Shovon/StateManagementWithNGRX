import { Component } from '@angular/core';
import { MyCounterComponent } from "./my-counter/my-counter.component";

@Component({
  selector: 'app-root',
  imports: [MyCounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'stateManagementWithNGRX';
}
