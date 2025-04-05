# CapePolish Cleaning Services

A modern, responsive website for a Cape Town-based cleaning services company. This project is built using React, Vite, TypeScript, Tailwind CSS, and Firebase.

## Features

- Responsive single-page landing page with sections for services, testimonials, and more
- Dedicated pages for each service with detailed information
- Contact form and lead generation capabilities
- Client portal for tracking orders and communications
- Admin panel for managing orders and content
- AI-assisted FAQ system

## Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS 4.1
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Routing:** React Router
- **Backend/Database:** Firebase
- **Build Tool:** Vite

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/cape-polish-cleaning-services.git
cd cape-polish-cleaning-services
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
- Copy the `.env.example` file to `.env.local`
- Fill in your Firebase configuration details

```bash
cp .env.example .env.local
```

4. Start the development server
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The build files will be available in the `dist` directory.

## Deployment

This project can be deployed to any static hosting service such as Vercel, Netlify, or Firebase Hosting.

## Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page components
│   ├── services/        # API and service functions
│   ├── hooks/           # Custom React hooks
│   ├── context/         # React context providers
│   ├── utils/           # Utility functions
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Entry point
├── .env.example         # Example environment variables
├── index.html           # HTML template
└── vite.config.ts       # Vite configuration
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or feedback, please reach out to [your-email@example.com](mailto:your-email@example.com).
