<div align="center">

# 🇮🇳 JanSaadhan
### *Making Government Welfare Schemes Accessible for Every Citizen*

![React](https://img.shields.io/badge/React-Frontend-61DAFB?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb)
![License](https://img.shields.io/badge/License-MIT-blue)

*A smart eligibility platform that helps citizens discover, understand, and apply for government welfare schemes in minutes.*

</div>

---

# 📖 Overview

Government welfare schemes often remain underutilized because eligible citizens struggle to discover them, understand complex eligibility criteria, or locate the correct application portal.

**JanSaadhan** bridges this gap through an intelligent rule-based recommendation engine that provides personalized scheme suggestions, simplified explanations, and verified application links—all in one place.

---

# 🚨 Problem Statement

## Current Challenges

| Problem | Impact |
|----------|--------|
| 🔍 Low Scheme Awareness | Millions of eligible citizens never discover relevant schemes. |
| 📑 Complex Government Language | Official eligibility criteria are difficult to understand. |
| 🌐 Fragmented Information | Information is spread across multiple ministry websites. |
| 🚧 Difficult Application Process | Users struggle to locate genuine application portals. |

---

# 💡 Our Solution

JanSaadhan simplifies welfare scheme discovery through an intuitive and intelligent platform.

### Key Features

- ✅ Smart Eligibility Questionnaire
- ✅ Personalized Scheme Recommendations
- ✅ Plain-Language Summaries
- ✅ Required Documents Checklist
- ✅ Official Verified Application Links
- ✅ Mobile-Friendly Interface
- ✅ Multi-language Ready Architecture

---

# ⚙️ Solution Workflow

```text
        User
          │
          ▼
 ┌──────────────────┐
 │ Profile Details  │
 │ Age • State      │
 │ Income           │
 │ Occupation       │
 │ Category         │
 └────────┬─────────┘
          │
          ▼
 ┌──────────────────┐
 │ Eligibility      │
 │ Rule Engine      │
 └────────┬─────────┘
          │
          ▼
 ┌──────────────────┐
 │ Personalized     │
 │ Scheme Dashboard │
 └────────┬─────────┘
          │
          ▼
 ┌──────────────────┐
 │ Scheme Details   │
 │ Benefits         │
 │ Documents        │
 │ Eligibility      │
 └────────┬─────────┘
          │
          ▼
 ┌──────────────────┐
 │ Official Portal  │
 │ Apply Now        │
 └──────────────────┘
```

---

# 🏗️ Tech Stack

| Layer | Technology |
|--------|------------|
| 🎨 Frontend | React.js / Next.js |
| 💅 Styling | Tailwind CSS |
| ⚙️ Backend | Node.js + Express.js |
| 🗄 Database | MongoDB / PostgreSQL |
| 🧠 Matching Engine | JSON Rule-Based Eligibility Engine |
| ☁ Deployment | Vercel + Render / Railway |

---

# 🧠 Matching Engine

The eligibility engine compares user information with predefined scheme rules.

### Inputs

- State
- Age
- Annual Income
- Occupation
- Gender
- Social Category

↓

### Processing

- Boolean Matching
- Income Range Filtering
- State Validation
- Category Verification

↓

### Output

- ✅ Eligible Schemes
- 🟡 Potentially Eligible
- ⭐ Popular Schemes

---

# ⭐ Unique Selling Proposition

| Feature | JanSaadhan |
|-----------|------------|
| Plain-language explanations | ✅ |
| Rule-based eligibility (No AI hallucinations) | ✅ |
| Official application links | ✅ |
| Lightweight & Mobile Optimized | ✅ |
| Easy to Scale | ✅ |

---

# 📂 Project Structure

```text
JanSaadhan
│
├── client
│   ├── components
│   ├── pages
│   ├── assets
│   ├── hooks
│   └── styles
│
├── server
│   ├── controllers
│   ├── routes
│   ├── models
│   ├── middleware
│   ├── utils
│   └── data
│       └── schemes.json
│
├── README.md
├── package.json
└── .env
```

---

# 🚀 Future Scope

- 🤖 AI-powered Scheme Assistant
- 🎙 Voice Search
- 🌍 Regional Language Support
- 📄 OCR-Based Document Verification
- 🔔 Notification for New Schemes
- 👤 User Accounts & Saved Schemes
- 📈 Analytics Dashboard

---

# 📊 Feasibility

### Technical

Uses structured JSON datasets and a deterministic rule engine, making it ideal for rapid hackathon development.

### Scalability

Adding new schemes only requires updating JSON definitions—no backend logic changes are needed.

### Accessibility

Designed for users with limited digital literacy using a clean, responsive interface.

---

# 🥊 Competitor Comparison

| Feature | JanSaadhan | myScheme | Haqdarshak |
|----------|:----------:|:--------:|:----------:|
| Simple UI | ✅ | ❌ | ✅ |
| Instant Eligibility Matching | ✅ | ⚠️ | ⚠️ |
| Plain Language | ✅ | ❌ | ✅ |
| Official Links | ✅ | ✅ | ✅ |
| Self-Service Platform | ✅ | ✅ | ❌ |
| Fast Mobile Experience | ✅ | ⚠️ | ⚠️ |

---

# 📚 Data Sources

- 🇮🇳 myScheme Portal
- 🇮🇳 India.gov.in
- Central Government Ministries
- State Government Scheme Portals

---

# 🤝 Contributing

Contributions are welcome!

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

# 📜 License

This project is developed for educational purposes and hackathon participation.

---

<div align="center">

## 👥 Team JanSaadhan

**Built with ❤️ to bridge the gap between citizens and government welfare schemes.**

*"Empowering Every Citizen Through Accessible Information."*

</div>