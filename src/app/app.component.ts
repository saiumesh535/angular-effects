import { Component } from '@angular/core';
import { Dispatch } from 'dist/angular-effects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-effects-app';

  constructor(private dispatch: Dispatch) {}

  public onChange(name: string): void {
    this.dispatch.dispatch({ type: 'NAME', payload: name });
  }


}
