# Cipher Safe

Cipher Safe is a web application that allows users to securely store, manage, and search for their passwords. The application uses encryption to protect passwords and provides a user-friendly interface for managing them.

## Features

- Add new passwords with website, username, and password fields
- View, search, and delete stored passwords
- Password strength indicator
- Copy passwords to clipboard
- Responsive design using Tailwind CSS
- Toast notifications for user feedback

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Axios
- CryptoJS
- React Toastify
- Express (backend)
- SQLite (database)

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine

### Installation

1. Clone the repository:

```sh
git clone https://github.com/your-username/password-manager.git
cd password-manager
```

2. Install dependencies for the frontend:

```sh
cd frontend
npm install
```

3. Install dependencies for the backend:

```sh
cd ../backend
npm install
```

### Environment Variables

Create a `.env` file in the `frontend` and `backend` directories with the following content:

#### Frontend `.env`

```properties
REACT_APP_API_URL=http://localhost:3000/passwords
REACT_APP_SECRET_KEY=your-secret-key
```

#### Backend `.env`

```properties
PORT=3000
```

### Running the Application

1. Start the backend server:

```sh
cd backend
npm start
```

2. Start the frontend development server:

```sh
cd ../frontend
npm start
```

The application should now be running at `http://localhost:5173`.

## Project Structure

```
password-manager
├── backend
│   ├── db.js
│   ├── routes
│   │   └── passwords.js
│   ├── server.js
│   ├── .env
│   └── package.json
├── frontend
│   ├── public
│   ├── src
│   │   ├── api
│   │   │   └── passwords
│   │   │       └── route.tsx
│   │   ├── components
│   │   │   ├── Header.tsx
│   │   │   ├── password
│   │   │   │   ├── PasswordForm.tsx
│   │   │   │   ├── PasswordList.tsx
│   │   │   │   └── PasswordCard.tsx
│   │   │   ├── search
│   │   │   │   └── SearchBar.tsx
│   │   ├── types.ts
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   └── .env
│   ├── .env
│   └── package.json
```

## Usage

1. Open the application in your browser.
2. Use the form to add new passwords by entering the website, username, and password.
3. View the list of stored passwords.
4. Use the search bar to filter passwords by website or username.
5. Click the "X" button to delete a password.
6. Click the eye icon to toggle password visibility.
7. Click the copy icon to copy the password to the clipboard.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [CryptoJS](https://cryptojs.gitbook.io/docs/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [Express](https://expressjs.com/)
- [SQLite](https://www.sqlite.org/)
