import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component } from '@angular/core';
import { WUPFormElement, WUPPasswordControl, WUPTextControl } from 'web-ui-pack';

WUPFormElement.$use();
WUPTextControl.$use();
WUPPasswordControl.$use();

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginComponent {
  // todo handle form omSubmit + NiceToHave: wrap every element with angular component
}
