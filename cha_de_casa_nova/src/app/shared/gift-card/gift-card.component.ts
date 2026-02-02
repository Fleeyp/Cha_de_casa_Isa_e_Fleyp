import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Gift } from '../../core/models/gift.model';
import { ClickOutsideDirective } from '../../shared/directives/click-outside.directive';

@Component({
  selector: 'app-gift-card',
  standalone: true,
  imports: [CommonModule, ClickOutsideDirective],
  templateUrl: './gift-card.component.html',
  styleUrl: './gift-card.component.css'
})
export class GiftCardComponent {
  @Input({ required: true }) gift!: Gift;
  @Output() togglePurchase = new EventEmitter<string>();

  isDropdownOpen = false;

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown(): void {
    this.isDropdownOpen = false;
  }

  onReserve(): void {
    this.togglePurchase.emit(this.gift.id);
  }

  formatPrice(price: number): string {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  }
}
