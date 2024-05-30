import { CommonModule } from '@angular/common';
import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { Product } from '../../../interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styles: ``
})
export class ProductCardComponent {
  // Input
  public product: InputSignal<Product> = input.required<Product>();
  
  // Output
  public onIncrementQuantity: OutputEmitterRef<number> = output<number>();

  public incrementQuantity(): void {
    this.onIncrementQuantity.emit(this.product().quantity + 1)
  }
}
