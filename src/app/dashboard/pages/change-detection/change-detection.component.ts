import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [TitleComponent, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.css'
})
export default class ChangeDetectionComponent {

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016
  });

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016
  };

  public currentFramework = computed(
    () => `Change Detection - ${ this.frameworkAsSignal().name }`
  );

  constructor() {

    setTimeout(() => {

      //this.frameworkAsProperty.name = 'ASP.NET Core';
      this.frameworkAsSignal.update( value => ({
        ...value,
        name: 'ASP.NET Core'
      }))
      console.log('Done');
    }, 3000);
  }
}
