# Building Management System

A Next.js-based building management system designed to support daily building operations and utility management.

## Features

- Maintenance Request Management
- Utility Bills Management
  - Electricity Bills
  - Water Bills
  - Gas Bills
- Document Download Center
- Announcement System
- Responsive Design for Mobile Access

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- React
- Node.js

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/yourusername/building-management-system.git
cd building-management-system
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
Copy `.env.example` to `.env` and fill in the configuration:
```bash
cp .env.example .env
```

4. Run development server
```bash
npm run dev
```

5. Build for production
```bash
npm run build
```

## Deployment

This project can be deployed on Vercel:

1. Create a new project on Vercel
2. Connect your GitHub repository
3. Configure environment variables
4. Deploy

## Project Structure

```
building-management-system/
├── app/                    # Main application directory
│   ├── maintenance/       # Maintenance request page
│   ├── payments/         # Utility bills payment page
│   └── documents/        # Document downloads page
├── public/                # Static assets
├── styles/                # Style files
└── package.json          # Project configuration
```

## Environment Variables

The project uses the following environment variables:

- `NEXT_PUBLIC_SITE_NAME`: Website name
- `NEXT_PUBLIC_COMPANY_NAME`: Company name
- `NEXT_PUBLIC_CONTACT_EMAIL`: Contact email
- `NEXT_PUBLIC_CONTACT_PHONE`: Contact phone
- `API_SECRET_KEY`: API secret key
- `DATABASE_URL`: Database connection URL

## Contributing

Issues and Pull Requests are welcome.

## License

MIT
