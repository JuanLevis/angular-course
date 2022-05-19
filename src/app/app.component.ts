import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() selectedSection = 'recipe';

  onNavigate(selected: string) {
    this.selectedSection = selected;
  }

}
