import {
  Contract,
  GlobalState,
} from '@algorandfoundation/algorand-typescript';

export class CardDrawer extends Contract {
  // Store the current card identifier (e.g., name or description)
  currentCard = GlobalState<string>({ key: 'currentCard', initialValue: '' });

  // Set a card (e.g., card name or description) and return it
  setCard(cardInfo: string): string {
    this.currentCard.value = cardInfo;
    return cardInfo;
  }

  // Retrieve the current card
  getCard(): string {
    return this.currentCard.value;
  }

  // Optionally clear the card
  clearCard(): void {
    this.currentCard.value = '';
  }
}
