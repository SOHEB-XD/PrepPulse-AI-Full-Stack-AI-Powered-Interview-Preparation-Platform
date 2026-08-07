# PrepPulse AI - AI-Powered Interview Preparation Platform

An intelligent interview preparation platform that leverages Google's Gemini AI to create personalized interview strategies based on job descriptions and candidate profiles.

## 🚀 Features

- **AI-Powered Analysis**: Uses Google Gemini AI to analyze job requirements and candidate profiles
- **Personalized Interview Reports**: Generates comprehensive interview reports including:
  - Match score (0-100)
  - Technical and behavioral questions with model answers
  - Skill gap analysis with severity levels
  - Day-wise preparation roadmap
- **Resume Upload & Parsing**: Supports PDF resume uploads with automatic content extraction
- **Custom Resume Generation**: Generate tailored PDF resumes based on job requirements
- **User Authentication**: Secure JWT-based authentication system
- **Responsive Design**: Modern, mobile-friendly React interface

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **Google Gemini AI** - AI-powered analysis
- **JWT** - Authentication
- **Multer** - File upload handling
- **PDF-parse** - Resume content extraction
- **Puppeteer** - PDF generation
- **Zod** - Schema validation

### Frontend
- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Sass** - CSS preprocessing
- **ESLint** - Code linting

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **MongoDB** (local installation or MongoDB Atlas)
- **Google AI API Key** (for Gemini AI)

## 🔧 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd interview-ai-yt-main
```

### 2. Backend Setup

```bash
cd Backend

# Install dependencies
npm install

# Create environment file
cp Backend/.env.example Backend/.env
```

Edit the `.env` file with your configuration:
```env
MONGO_URI=mongodb://localhost:27017/interview-ai
GOOGLE_GENAI_API_KEY=your_google_ai_api_key_here
JWT_SECRET=your_jwt_secret_here
PORT=3000
```

### 3. Frontend Setup

```bash
cd ../Frontend

# Install dependencies
npm install
```

### 4. Database Setup

Make sure MongoDB is running on your system. If using MongoDB Atlas, update the `MONGO_URI` in your `.env` file accordingly.

## 🚀 Running the Application

### Development Mode

1. **Start Backend** (from Backend directory):
```bash
npm run dev
```
Server will start on `http://localhost:3000`

2. **Start Frontend** (from Frontend directory):
```bash
npm run dev
```
Frontend will start on `http://localhost:5173`

### Production Build

1. **Build Frontend**:
```bash
cd Frontend
npm run build
```

2. **Start Backend**:
```bash
cd ../Backend
npm start
```

## 📖 Usage

1. **Register/Login**: Create an account or login with existing credentials
2. **Create Interview Plan**:
   - Enter the target job description
   - Upload your resume (PDF) or provide a self-description
   - Click "Generate Interview Plan"
3. **View Results**: Access your personalized interview report including:
   - Match score
   - Technical questions with answers
   - Behavioral questions with answers
   - Skill gaps analysis
   - Preparation roadmap
4. **Generate Resume**: Create a tailored PDF resume based on the job requirements

## 🔗 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/logout` - User logout
- `GET /api/auth/get-me` - Get current user info

### Interview Reports
- `POST /api/interview/` - Generate new interview report
- `GET /api/interview/` - Get all user's interview reports
- `GET /api/interview/report/:id` - Get specific interview report
- `POST /api/interview/resume/pdf/:id` - Generate tailored resume PDF

## 🏗️ Project Structure

```
interview-ai-yt-main/
├── Backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js
│   │   ├── controllers/
│   │   │   ├── auth.controller.js
│   │   │   └── interview.controller.js
│   │   ├── middlewares/
│   │   │   ├── auth.middleware.js
│   │   │   └── file.middleware.js
│   │   ├── models/
│   │   │   ├── user.model.js
│   │   │   ├── interviewReport.model.js
│   │   │   └── blacklist.model.js
│   │   ├── routes/
│   │   │   ├── auth.routes.js
│   │   │   └── interview.routes.js
│   │   ├── services/
│   │   │   └── ai.service.js
│   │   ├── app.js
│   │   └── server.js
│   └── package.json
├── Frontend/
│   ├── src/
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   │   ├── components/
│   │   │   │   ├── pages/
│   │   │   │   ├── services/
│   │   │   │   └── hooks/
│   │   │   └── interview/
│   │   │       ├── components/
│   │   │       ├── pages/
│   │   │       ├── services/
│   │   │       └── hooks/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── app.routes.jsx
│   ├── public/
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


