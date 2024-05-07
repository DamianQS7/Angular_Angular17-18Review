import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { Route, RouterModule } from '@angular/router';

@Component({
  selector: 'shared-sidemenu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {

  public menuItems: Route[] = routes
    .map(route => route.children ?? [] )
    .flat()
    .filter( route => route && route.path)
    .filter( route => !route.path?.includes(':'));
}
