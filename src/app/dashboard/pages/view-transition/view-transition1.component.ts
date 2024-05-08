import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <shared-title title="View Transition 1" />

    <section class="flex justify-start">
      <img 
        srcset="https://picsum.photos/id/237/200/300" 
        alt="Picsum"
        width="300"
        height="300"
        style="view-transition-name: hero1;">

        <div 
        class="bg-blue-300 w-56 h-56" 
        style="view-transition-name: box1;">
          
        </div>
    </section>
  `
})
export default class ViewTransition1Component {

}
