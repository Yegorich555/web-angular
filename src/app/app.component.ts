import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { getAge } from '@/helpers/date';
import { LoginComponent } from './login/login.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'web-angular';
  age = getAge.call(new Date(Date.UTC(2002, 2, 25)));
}

// todo add webpack-mock-server + web-ui-pack & loginForm for tests
