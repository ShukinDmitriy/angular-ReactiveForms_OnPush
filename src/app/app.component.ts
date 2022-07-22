import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  VERSION,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { timer, merge, from } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  form = new FormGroup({
    control: new FormControl(),
  });

  controlValue = this.form.get('control')?.valueChanges;

  ngOnInit() {
    timer(2000).subscribe((_) => {
      console.log('server request complete');
      this.form.patchValue({ control: 'testValue' });
    });
  }
}
