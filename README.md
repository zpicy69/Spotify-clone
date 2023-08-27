A Spotify clone project built using TypeScript and React. The project is structured around the Next.js framework.

Here's a high-level overview of the project structure:


Actions:

getActiveProductsWithPrices.ts: Retrieves active products along with their prices.

getLikedSongs.ts: Fetches songs that a user has liked.

getSongs.ts: Fetches a list of songs.

getSongsByTitle.ts: Retrieves songs based on their title.

getSongsByUserId.ts: Fetches songs associated with a specific user ID.

Components:
PageContent.tsx: A component that likely represents the main content of a page.
AccountContent.tsx: A component dedicated to displaying account-related content.
AuthModal.tsx: A modal component for authentication purposes.
Header.tsx: Represents the header of the application.
Player.tsx: A component that functions as a music player.

API Routes:

create-checkout-session/route.ts: Handles the creation of a checkout session, possibly for payment processing.

create-portal-link/route.ts: Manages the creation of a portal link.

webhooks/route.ts: Handles webhooks, which are typically used for real-time notifications from third-party services.

App Layout and Pages:
layout.tsx: Defines the overall layout of the application.

LikedContent.tsx: Displays content related to songs that a user has liked.

SearchContent.tsx: Represents the content of the search page or functionality.

Hooks:
useAuthModal.ts: A custom hook for managing the authentication modal's state and behavior.

usePlayer.ts: A hook dedicated to the functionality of the music player.

useUser.tsx: A hook that manages user-related data and operations.

Libraries:

helpers.ts: Contains utility functions or helpers that assist in various tasks throughout the application.