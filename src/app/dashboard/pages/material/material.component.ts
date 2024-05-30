import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import {
  MatBottomSheet,
  MatBottomSheetConfig,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet';
import { OptionsBottomSheetComponent } from './ui/options-bottom-sheet/options-bottom-sheet.component';

@Component({
  standalone: true,
  imports: [MatSlideToggleModule, MatIconModule, MatButtonModule, MatBadgeModule, MatBottomSheetModule],
  templateUrl: './material.component.html',
  styles: ``
})
export default class MaterialComponent {

  constructor(private _bottomSheet: MatBottomSheet) {}

  public openBottomSheet(): void {
    this._bottomSheet.open(OptionsBottomSheetComponent)
  }
}
