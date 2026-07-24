# JanSaadhan

### _Making Government Welfare Schemes Accessible for Every Citizen_

_A smart eligibility platform that helps citizens discover, understand, and apply for government welfare schemes in minutes._

---

# 📖 Overview

Government welfare schemes often remain underutilized because eligible citizens struggle to discover them, understand complex eligibility criteria, or locate the correct application portal.

**JanSaadhan** bridges this gap through a lightweight, rule-based eligibility checker that provides personalized scheme suggestions, simplified explanations, and verified application links — all in one place, with no backend or database required.

---

# 🚨 Problem Statement

## Current Challenges

| Problem                          | Impact                                                         |
| -------------------------------- | -------------------------------------------------------------- |
| 🔍 Low Scheme Awareness          | Millions of eligible citizens never discover relevant schemes. |
| 📑 Complex Government Language   | Official eligibility criteria are difficult to understand.     |
| 🌐 Fragmented Information        | Information is spread across multiple ministry websites.       |
| 🚧 Difficult Application Process | Users struggle to locate genuine application portals.          |

---

# 💡 Our Solution

JanSaadhan simplifies welfare scheme discovery through a simple, fast, static web page — no sign-up, no server, no delay.

### Key Features

- ✅ Smart Eligibility Questionnaire
- ✅ Personalized Scheme Recommendations
- ✅ Plain-Language Summaries
- ✅ Required Documents Checklist
- ✅ Official Verified Application Links
- ✅ Mobile-Friendly Interface
- ✅ Zero Backend — Runs Entirely in the Browser

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
 │ app.js           │
 │ Eligibility      │
 │ Matching Logic   │
 └────────┬─────────┘
          │
          ▼
 ┌──────────────────┐
 │ schemes.js       │
 │ Scheme Dataset   │
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

| Layer          | Technology                                       |
| -------------- | ------------------------------------------------ |
| 🎨 Structure   | HTML5                                            |
| 💅 Styling     | CSS3                                             |
| ⚙️ Logic       | JavaScript (Vanilla JS)                          |
| 🧠 Scheme Data | JSON-style JS Data File (`schemes.js`)           |
| ☁ Deployment   | GitHub Pages / Netlify / Vercel (Static Hosting) |

---

# 🧠 Matching Engine

The eligibility logic in `app.js` compares user input against the scheme definitions stored in `schemes.js`.

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

| Feature                                       | JanSaadhan |
| --------------------------------------------- | ---------- |
| Plain-language explanations                   | ✅         |
| Rule-based eligibility (No AI hallucinations) | ✅         |
| Official application links                    | ✅         |
| Lightweight & Mobile Optimized                | ✅         |
| No Backend / Database Needed                  | ✅         |
| Instant Load — Static Site                    | ✅         |

---

# 📂 Project Structure

```text
JanSaadhan/
│
├── index.html      # Main page markup
├── style.css       # Styling and layout
├── app.js          # Eligibility logic & UI interactions
├── schemes.js      # Scheme dataset used for matching
├── README.md
└── assets/         # Images, icons, and other static files
```

---

# ▶️ Getting Started

No installation or build tools required — this is a fully static site.

```bash
# Clone the repository
git clone https://github.com/vibhorsahu26/JanSaadhan.git

# Move into the project folder
cd JanSaadhan

# Open index.html directly in your browser
```

Or, for live-reload during development, open the folder in VS Code and use the **Live Server** extension.

---

# 🚀 Future Scope

- 🤖 AI-powered Scheme Assistant
- 🎙 Voice Search
- 🌍 Regional Language Support
- 📄 OCR-Based Document Verification
- 🔔 Notification for New Schemes
- 👤 User Accounts & Saved Schemes (would require backend)
- 📈 Analytics Dashboard

---

# 📊 Feasibility

### Technical

Uses a structured JavaScript dataset (`schemes.js`) and simple conditional logic in `app.js`, making it easy to build, debug, and deploy quickly.

### Scalability

Adding new schemes only requires updating `schemes.js` — no build process or backend changes needed.

### Accessibility

Designed for users with limited digital literacy using a clean, responsive, single-page interface.

---

# 🥊 Competitor Comparison

| Feature                      | JanSaadhan | myScheme | Haqdarshak |
| ---------------------------- | :--------: | :------: | :--------: |
| Simple UI                    |     ✅     |    ❌    |     ✅     |
| Instant Eligibility Matching |     ✅     |    ⚠️    |     ⚠️     |
| Plain Language               |     ✅     |    ❌    |     ✅     |
| Official Links               |     ✅     |    ✅    |     ✅     |
| Self-Service Platform        |     ✅     |    ✅    |     ❌     |
| Fast Mobile Experience       |     ✅     |    ⚠️    |     ⚠️     |

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
git clone https://github.com/vibhorsahu26/JanSaadhan.git

# Move into the project folder
cd JanSaadhan

# Make your changes, then commit and push
git add .
git commit -m "Your change description"
git push origin main
```

---

# 📜 License

This project is developed for educational purposes and hackathon participation.

---

## 👥 Team JanSaadhan

**Built with ❤️ to bridge the gap between citizens and government welfare schemes.**

_"Empowering Every Citizen Through Accessible Information."_
