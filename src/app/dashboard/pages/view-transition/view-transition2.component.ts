import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <shared-title title="View Transition 2" />

    <section class="flex justify-end">
      <img 
        srcset="https://picsum.photos/id/237/200/300" 
        alt="Picsum"
        width="300"
        height="300"
        style="view-transition-name: hero1;">

        <div 
        class="fixed bottom-16 right-10 bg-blue-600 w-32 h-32 rounded" 
        style="view-transition-name: box1;">
          
        </div>
    </section>
  `
})
export default class ViewTransition2Component {

}
