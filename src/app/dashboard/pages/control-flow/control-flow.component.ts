import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A' | 'B' | 'F';

@Component({
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export default class ControlFlowComponent {

  public showContent = signal<boolean>(false);
  public grade = signal<Grade>('A');
  public frameworks = signal<string[]>(['Angular', 'Vue', 'ASP.NET Core', 'NET MAUI']);
  public frameworks2 = signal<string[]>([]);

  public toggleContent() {
    this.showContent.update((value) => !value );
  }
}
