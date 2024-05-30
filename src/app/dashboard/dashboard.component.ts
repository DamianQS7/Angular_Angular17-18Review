import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidemenuComponent } from '@shared/sidemenu/sidemenu.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@Component({
  standalone: true,
  imports: [ RouterModule, SidemenuComponent, ProductCardComponent ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export default class DashboardComponent {

}
