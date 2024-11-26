# Cat Facts App

A beautiful React application that displays cat facts paired with random user profiles, featuring infinite scroll and a modern UI.

## Features

-  Infinite scroll loading of cat facts
-  Random user profiles paired with each fact
-  Modern, responsive UI with Tailwind CSS
-  Skeleton loading states
-  Error handling with toast notifications
-  Data caching with React Query
-  Fully responsive design

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- React Query (TanStack Query)
- React Intersection Observer
- React Toastify
- Vite

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/cat-facts-app.git
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## APIs Used

- [Cat Facts API](https://catfact.ninja/facts) - For fetching cat facts
- [Random User API](https://randomuser.me/api) - For generating random user profiles

## Features in Detail

### Infinite Scroll
The app implements infinite scroll using React Intersection Observer and React Query's `useInfiniteQuery`. New content is automatically loaded as the user scrolls to the bottom of the page.

### Error Handling
The app includes comprehensive error handling with user-friendly toast notifications when API requests fail.

### Loading States
Skeleton loading states provide visual feedback while content is being loaded, enhancing the user experience.

## Future Improvements

- **Fix Infinite Scroll Double Request**: Currently, the infinite scroll implementation occasionally triggers two API requests instead of one when reaching the bottom of the page. This could be optimized.

- **Add Comprehensive Testing**:
  - Implement unit tests using Jest for components 

- **Accessibility**:
  - Add ARIA labels and roles
