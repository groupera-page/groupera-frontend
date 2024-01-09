# Groupera-frontend

Welcome to the Groupera Frontend! Groupera is all about bringing people together.

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:groupera-page/groupera-frontend.git
   ```
2. Enter the directory:
   ```bash
   cd groupera-frontend
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Create & update .env file by copying .env.example
   ```bash
   cp -R .env.example .env
   ```

### Running the Frontend

Before running the frontend, make sure you have set up the Groupera backend. Refer to [Groupera Backend README](https://github.com/groupera-page/groupera-backend/blob/main/README.md) for detailed instructions.

First start the the backend server, then run the frontend with:

```bash
npm start
```

The front-end is served on http://localhost:8080/ and the back-end on http://localhost:3000/.

### Features

- **User Authentication**: Secure login and registration.
- **Group Management**: Create, edit, and manage groups.
- **Event Scheduling**: Organize and keep track of events.
- ...

### State Management with Redux

Groupera Frontend employs the [Redux](http://redux.js.org) state management library to efficiently handle the application state. Redux provides a scalable and predictable state container for seamless interaction between different components.

### File Structure

The front-end is based on create-react-app.

```
src
 ┣ api - Axios and services
 ┣ assets - Images, Logos
 ┣ components - Containers, Layouts, User inputs
 ┣ features - Signup forms/funnels, API:s, Redux slices
 ┃ ┣ admin
 ┃ ┣ alert
 ┃ ┣ auth
 ┃ ┣ groups
 ┃ ┣ profile
 ┃ ┗ videoCalls - Video SDK
 ┣ pages
 ┃ ┣ GroupSubPages
 ┃ ┣ ProfileSubPages
 ┣ services
 ┣ util - Helper functions and Hooks
┣ store.js - Redux store
┣ Navigation.js - Start/Entry
tailwind.config - TW CSS gobals
```

### Additional Documentation

- React - <https://react.com>
- Tailwind - <https://tailwindcss.com/>
- Redux - <https://redux.js.org/>
- Video SDK - <https://www.videosdk.live/>
