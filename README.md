# Text-to-Speech Frontend

React Text-to-Speech is a web application that provides Text-to-Speech, Text-to-Sound Effects, Voice Dubbing, and Voice Changer functionalities.

## Features

- Convert text to speech
- Add sound effects to text
- Voice dubbing
- Voice changer
- User authentication (Sign in / Sign up)
- Dashboard with profile management

## Project Structure

```
src/
  App.js
  components/
  Dashboard/
  pages/
  config/
  assests/
  css/
public/
  index.html
  ...
```

## Configuration

API base URL is set in [src/config/index.js](src/config/index.js):

```javascript
const CONFIG = {
    baseURL: 'http://localhost:5000',
};
export default CONFIG;
```

## Getting Started

### Prerequisites

- Node.js (v14 or above)
- npm

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/subhanaziz406/text-to-speech-frontend.git
    cd text-to-speech-frontend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm start
    ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available Scripts

- `npm start` – Runs the app in development mode.
- `npm run build` – Builds the app for production.
- `npm test` – Launches the test runner.

## License

See [LICENSE](../LICENSE) for
