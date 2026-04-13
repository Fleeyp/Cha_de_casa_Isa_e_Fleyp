import { Injectable, signal, computed } from '@angular/core';
import { Gift, StatusFilter, PriceRange } from '../models/gift.model';

@Injectable({
  providedIn: 'root'
})
export class GiftService {
  private readonly initialGifts: Gift[] = [
    {
      id: '1',
      name: 'Jogo de Panelas',
      category: 'Cozinha',
      description: 'Conjunto com 5 panelas de inox',
      price: 450,
      purchased: false,
      links: [
        { store: 'Amazon', url: 'https://amazon.com.br' },
        { store: 'Magazine Luiza', url: 'https://magazineluiza.com.br' },
        { store: 'Americanas', url: 'https://americanas.com.br' },
      ],
    },
    {
      id: '2',
      name: 'Jogo de Toalhas',
      category: 'Banho',
      description: 'Kit com 6 toalhas de banho',
      price: 120,
      purchased: false,
      links: [
        { store: 'Camicado', url: 'https://camicado.com.br' },
        { store: 'Zara Home', url: 'https://zarahome.com.br' },
        { store: 'Magazine Luiza', url: 'https://magazineluiza.com.br' },
      ],
    },
    {
      id: '3',
      name: 'Jogo de Cama',
      category: 'Quarto',
      description: 'Lençol casal + fronhas',
      price: 150,
      purchased: false,
      links: [
        { store: 'Camicado', url: 'https://camicado.com.br' },
        { store: 'Tok&Stok', url: 'https://tokstok.com.br' },
      ],
    },
    {
      id: '4',
      name: 'Cafeteira',
      category: 'Cozinha',
      description: 'Cafeteira elétrica programável',
      price: 280,
      purchased: false,
      links: [
        { store: 'Amazon', url: 'https://amazon.com.br' },
        { store: 'Fast Shop', url: 'https://fastshop.com.br' },
      ],
    },
    {
      id: '5',
      name: 'Tapete de Sala',
      category: 'Sala',
      description: 'Tapete 2x3m',
      price: 340,
      purchased: false,
      links: [
        { store: 'Tok&Stok', url: 'https://tokstok.com.br' },
        { store: 'Camicado', url: 'https://camicado.com.br' },
        { store: 'Zara Home', url: 'https://zarahome.com.br' },
      ],
    },
    {
      id: '6',
      name: 'Batedeira',
      category: 'Cozinha',
      description: 'Batedeira planetária',
      price: 680,
      purchased: false,
      links: [
        { store: 'KitchenAid Brasil', url: 'https://kitchenaid.com.br' },
        { store: 'Amazon', url: 'https://amazon.com.br' },
        { store: 'Magazine Luiza', url: 'https://magazineluiza.com.br' },
      ],
    },
    {
      id: '7',
      name: 'Liquidificador',
      category: 'Cozinha',
      description: 'Liquidificador potente',
      price: 180,
      purchased: false,
      links: [
        { store: 'Amazon', url: 'https://amazon.com.br' },
        { store: 'Casas Bahia', url: 'https://casasbahia.com.br' },
      ],
    },
    {
      id: '8',
      name: 'Aspirador de Pó',
      category: 'Limpeza',
      description: 'Aspirador portátil',
      price: 420,
      purchased: false,
      links: [
        { store: 'Amazon', url: 'https://amazon.com.br' },
        { store: 'Casas Bahia', url: 'https://casasbahia.com.br' },
        { store: 'Fast Shop', url: 'https://fastshop.com.br' },
      ],
    },
    {
      id: '9',
      name: 'Jogo de Facas',
      category: 'Cozinha',
      description: 'Kit profissional com 6 facas',
      price: 240,
      purchased: false,
      links: [
        { store: 'Tramontina', url: 'https://tramontina.com.br' },
        { store: 'Amazon', url: 'https://amazon.com.br' },
        { store: 'Tok&Stok', url: 'https://tokstok.com.br' },
      ],
    },
    {
      id: '10',
      name: 'Aparelho de Jantar',
      category: 'Cozinha',
      description: 'Conjunto de pratos para 6 pessoas',
      price: 320,
      purchased: false,
      links: [
        { store: 'Oxford', url: 'https://oxford.com.br' },
        { store: 'Camicado', url: 'https://camicado.com.br' },
      ],
    },
    {
      id: '11',
      name: 'Ferro de Passar',
      category: 'Limpeza',
      description: 'Ferro a vapor',
      price: 150,
      purchased: false,
      links: [
        { store: 'Amazon', url: 'https://amazon.com.br' },
        { store: 'Magazine Luiza', url: 'https://magazineluiza.com.br' },
      ],
    },
    {
      id: '12',
      name: 'Ventilador',
      category: 'Sala',
      description: 'Ventilador de coluna',
      price: 200,
      purchased: false,
      links: [
        { store: 'Amazon', url: 'https://amazon.com.br' },
        { store: 'Casas Bahia', url: 'https://casasbahia.com.br' },
        { store: 'Extra', url: 'https://extra.com.br' },
      ],
    },
  ];

  readonly priceRanges: PriceRange[] = [
    { label: 'Todos', min: null, max: null },
    { label: 'Até R$ 200', min: null, max: 200 },
    { label: 'R$ 200 - R$ 400', min: 200, max: 400 },
    { label: 'R$ 400 - R$ 600', min: 400, max: 600 },
    { label: 'Acima de R$ 600', min: 600, max: null },
  ];

  // Signals for reactive state management
  readonly gifts = signal<Gift[]>(this.initialGifts);
  readonly statusFilter = signal<StatusFilter>('all');
  readonly selectedPriceRange = signal<PriceRange>(this.priceRanges[0]);

  // Computed values
  readonly filteredGifts = computed(() => {
    let result = this.gifts();

    // Apply status filter
    const status = this.statusFilter();
    if (status === 'available') {
      result = result.filter(gift => !gift.purchased);
    } else if (status === 'reserved') {
      result = result.filter(gift => gift.purchased);
    }

    // Apply price filter
    const priceRange = this.selectedPriceRange();
    if (priceRange.min !== null || priceRange.max !== null) {
      result = result.filter(gift => {
        const meetsMin = priceRange.min === null || gift.price >= priceRange.min;
        const meetsMax = priceRange.max === null || gift.price <= priceRange.max;
        return meetsMin && meetsMax;
      });
    }

    return result;
  });

  readonly totalGifts = computed(() => this.gifts().length);
  readonly availableGifts = computed(() => this.gifts().filter(g => !g.purchased).length);
  readonly reservedGifts = computed(() => this.gifts().filter(g => g.purchased).length);

  togglePurchase(id: string): void {
    this.gifts.update(gifts =>
      gifts.map(gift =>
        gift.id === id ? { ...gift, purchased: !gift.purchased } : gift
      )
    );
  }

  setStatusFilter(status: StatusFilter): void {
    this.statusFilter.set(status);
  }

  setPriceRange(range: PriceRange): void {
    this.selectedPriceRange.set(range);
  }
}
