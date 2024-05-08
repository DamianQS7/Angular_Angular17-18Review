import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-heavy-loader-fast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [ngClass]="['w-full', cssClass]" >
      <ng-content />
      
    </section>
  `
})
export class HeavyLoadersFastComponent {

  @Input({required: true})
  public cssClass!: string;
}
