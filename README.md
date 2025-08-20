# AI Gemini Web App

This project is a full-stack web application that provides a Gemini-powered AI assistant with multimodal capabilities (text and image input), user authentication, and a modern React-based frontend with dark mode support.

## Project Structure

- `client/` - React frontend (TypeScript)
- `server/` - Flask backend (Python)
- `.env` - Environment variables (API keys, etc.)

## Features

- **Login Page**: Simple authentication (demo credentials: `123@gmail.com` / `123`)
- **Home Page**: Chat with Gemini AI, send text or images, view chat history
- **Dark Mode**: Toggle between light and dark themes
- **Random Fact**: Displays a random fact using [api-ninjas.com](https://api-ninjas.com/api/facts)
- **Loading Animation**: Custom hamster wheel loader
- **Responsive Design**: Works on desktop and mobile

## Getting Started

### Prerequisites

- Node.js & npm
- Python 3.x
- [Google Generative AI Python SDK](https://github.com/google/generative-ai-python)
- [Flask](https://flask.palletsprojects.com/)
- [python-dotenv](https://pypi.org/project/python-dotenv/)
- [axios](https://axios-http.com/)

### Setup

#### 1. Clone the repository

```sh
git clone <your-repo-url>
cd project-root
```

#### 2. Install backend dependencies

```sh
cd server
pip install flask python-dotenv google-generativeai
```

#### 3. Install frontend dependencies

```sh
cd ../client
npm install
```

#### 4. Set up environment variables

Edit `.env` and add your Gemini API key:

```
GEMINI_API_KEY="your-gemini-api-key"
```

#### 5. Run the backend

```sh
cd ../server
python server.py
```

#### 6. Run the frontend

```sh
cd ../client
npm start
```

The frontend will be available at [http://localhost:3000](http://localhost:3000) and will proxy API requests to the backend at [http://localhost:5000](http://localhost:5000).

## Usage

- **Login**: Use the demo credentials or modify authentication logic in [`server/server.py`](server/server.py).
- **Chat**: Enter a query or upload an image to interact with Gemini AI.
- **Dark Mode**: Toggle using the bat icon.
- **Random Fact**: Displayed on the login page sidebar.

## Customization

- **Authentication**: Update logic in [`server/server.py`](server/server.py) and [`client/src/auth/useAuth.tsx`](client/src/auth/useAuth.tsx).
- **Gemini API**: Modify endpoints in [`server/server.py`](server/server.py).
- **Frontend UI**: All React components are in [`client/src`](client/src).

## License

This project is for educational/demo purposes.

---

**Frontend entry point:** [`client/src/index.tsx`](client/src/index.tsx)  
**Backend entry point:** [`server/server.py`](server/server.py)