# 🃏 CardDraw dApp on Algorand

Welcome to **CardDraw**, a decentralized application (dApp) built on the Algorand blockchain that allows users to draw, view, and clear virtual cards — all stored immutably and transparently via a smart contract.

---

## 📜 Project Description

CardDraw is a minimal and elegant example of how to build and interact with smart contracts on Algorand using TypeScript. It demonstrates storing and managing a simple state (the "card") on-chain. This project can serve as a base for collectible card games, random draws, NFT card decks, or educational demos in Web3 development.

---

## 🚀 What It Does

- Users can **set** a card (e.g., name, type, or description).
- Retrieve the **currently drawn** card.
- **Clear** the current card from the global state.

Everything is recorded and retrievable on the blockchain, ensuring transparency and tamper-proof operation.

---

## ✨ Features

- ✅ Built on **Algorand** for speed, security, and low fees.
- ✅ Fully **decentralized** card storage using Algorand smart contracts.
- ✅ **TypeScript** based smart contract for modern developer experience.
- ✅ Simple **API** with 3 core methods:
  - `setCard(cardInfo: string): string`
  - `getCard(): string`
  - `clearCard(): void`

---

## 📄 Smart Contract Code

```ts
//paste your code
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
