# Transfer List App

This project is a React-based implementation of a Transfer List component, created as a technical test for a React Developer position. The original challenge can be found at [AlgoChurn](https://www.algochurn.com/frontend/transfer-list).

## Project Overview

The Transfer List App allows users to move items between two containers using selection and transfer buttons.

## User Stories

1. The data for the list is given in the `data.ts` file.
2. Create a `TransfersList` component that will handle the entire function.
3. On clicking of the items on the `Left Container`, the box should highlight.
4. On clicking of the items on the `Right Container`, the box should highlight.
5. If any of the `Arrow Buttons` are clicked, the items should move into the respective boxes. For Example, If the `First Item` from the Left box is moved, it should move to the right box and should be removed from the left box -- finally should be unchecked.
6. If an item from the left box is moved to left, nothing should happen. Similarly, if an item from the right box is move to right, nothing should happen.
7. Use tailwindcss for styling.

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm start`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Technologies Used

- React
- Tailwind CSS
