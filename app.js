let visibleSchemes = 6;
const categoryIcons = {
    Education: "graduation-cap",
    Agriculture: "tractor",
    Healthcare: "heart-pulse",
    Housing: "house",
    Business: "briefcase-business",
    Finance: "wallet",
    Women: "users",
    Employment: "briefcase",
    Pension: "badge-indian-rupee"
};

const featuredSchemes = [

    {
        id: 1,
        name: "PM-KISAN",
        category: "Agriculture",
        provider: "Central Government",

        description:
            "Provides income support of ₹6,000 per year to eligible farmer families through Direct Benefit Transfer.",

        benefits: [
            "₹6,000 annual financial assistance",
            "Direct Benefit Transfer (DBT)",
            "Paid in three equal installments"
        ],

        documents: [
            "Aadhaar Card",
            "Bank Passbook",
            "Land Ownership Records"
        ],

        eligibility: [
            "Indian Citizen",
            "Farmer Family",
            "Eligible Agricultural Land Owner"
        ],

        criteria: {
            occupation: ["Farmer"],

            income: null,

            category: null,

            gender: null,

            age: {
                min: 18,
                max: 100
            },

            disability: null,

            bpl: null,

            state: null
        },

        officialWebsite: "https://pmkisan.gov.in/"
    },

    {
        id: 2,
        name: "Ayushman Bharat",
        category: "Healthcare",
        provider: "Central Government",

        description:
            "Provides health insurance coverage of up to ₹5 lakh per family every year.",

        benefits: [
            "₹5 lakh health coverage",
            "Cashless treatment",
            "Nationwide empanelled hospitals"
        ],

        documents: [
            "Aadhaar Card",
            "Family ID",
            "Ration Card (if applicable)"
        ],

        eligibility: [
            "Eligible Beneficiary",
            "Indian Citizen"
        ],

        criteria: {
            occupation: null,

            income: [
                "Below ₹1 Lakh",
                "₹1-3 Lakh"
            ],

            category: null,

            gender: null,

            age: {
                min: 0,
                max: 100
            },

            disability: null,

            bpl: [
                "Yes"
            ],

            state: null
        },

        officialWebsite: "https://beneficiary.nha.gov.in/"
    },

    {
        id: 3,
        name: "PM Awas Yojana",

        category: "Housing",

        provider: "Central Government",

        description:
            "Financial assistance for affordable housing under PMAY.",

        benefits: [
            "Housing subsidy",
            "Interest subsidy",
            "Affordable housing support"
        ],

        documents: [
            "Aadhaar Card",
            "Income Certificate",
            "Residence Proof"
        ],

        eligibility: [
            "Economically Weaker Section",
            "Low Income Group"
        ],

        criteria: {
            occupation: null,

            income: [
                "Below ₹1 Lakh",
                "₹1-3 Lakh",
                "₹3-5 Lakh"
            ],

            category: null,

            gender: null,

            age: {
                min: 18,
                max: 100
            },

            disability: null,

            bpl: [
                "Yes"
            ],

            state: null
        },

        officialWebsite: "https://pmaymis.gov.in/"
    },

    {
        id: 4,

        name: "PM Mudra Yojana",

        category: "Business",

        provider: "Central Government",

        description:
            "Collateral-free business loans for startups and small businesses.",

        benefits: [
            "Collateral-free loan",
            "Business expansion",
            "Startup support"
        ],

        documents: [
            "PAN Card",
            "Aadhaar Card",
            "Business Proof"
        ],

        eligibility: [
            "Entrepreneur",
            "Small Business Owner"
        ],
        criteria: {
            occupation: [
                "Self Employed"
            ],
            income: null,
            category: null,
            gender: null,
            age: {
                min: 18,
                max: 100
            },
            disability: null,
            bpl: null,
            state: null
        },

        officialWebsite: "https://www.mudra.org.in/"
    },

    {
        id: 5,

        name: "Post Matric Scholarship",

        category: "Education",

        provider: "Central Government",

        description:
            "Scholarship support for students pursuing higher education.",

        benefits: [
            "Tuition Fee Assistance",
            "Maintenance Allowance",
            "Education Support"
        ],

        documents: [
            "Income Certificate",
            "Caste Certificate",
            "Previous Marksheet"
        ],

        eligibility: [
            "Eligible Student",
            "Recognized Institution"
        ],

        criteria: {
            occupation: ["Student"],

            income: [
                "Below ₹1 Lakh",
                "₹1-3 Lakh"
            ],

            category: [
                "SC",
                "ST",
                "OBC"
            ],

            gender: null,

            age: {
                min: 16,
                max: 30
            },

            disability: null,

            bpl: null,

            state: null
        },

        officialWebsite: "https://scholarships.gov.in/"
    },

    {
        id: 6,

        name: "Atal Pension Yojana",

        category: "Pension",

        provider: "Central Government",

        description:
            "Guaranteed monthly pension for workers in the unorganized sector.",

        benefits: [
            "Guaranteed Pension",
            "Government-backed Scheme",
            "Retirement Security"
        ],

        documents: [
            "Aadhaar Card",
            "Savings Bank Account",
            "Mobile Number"
        ],

        eligibility: [
            "18-40 Years Age",
            "Indian Citizen",
            "Savings Bank Account Holder"
        ],
        criteria: {
            occupation: [
                "Farmer",
                "Self Employed",
                "Private Employee",
                "Unemployed"
            ],

            income: null,

            category: null,

            gender: null,

            age: {
                min: 18,
                max: 40
            },

            disability: null,

            bpl: null,

            state: null
        },

        officialWebsite: "https://www.npscra.nsdl.co.in/"
    },
    {
    id: 7,

    name: "PM Fasal Bima Yojana",

    category: "Agriculture",

    provider: "Central Government",

    description:
        "Crop insurance scheme providing financial support to farmers against crop loss due to natural calamities.",

    benefits: [
        "Crop insurance",
        "Low premium",
        "Compensation for crop loss"
    ],

    documents: [
        "Aadhaar Card",
        "Land Records",
        "Bank Passbook"
    ],

    eligibility: [
        "Farmer",
        "Cultivating Eligible Crops"
    ],

    criteria: {
        occupation: ["Farmer"],
        income: null,
        category: null,
        gender: null,
        age: {
            min: 18,
            max: 100
        },
        disability: null,
        bpl: null,
        state: null
    },

    officialWebsite:
        "https://pmfby.gov.in/"
},
{
    id: 8,

    name: "PM Jan Dhan Yojana",

    category: "Finance",

    provider: "Central Government",

    description:
        "Financial inclusion scheme providing zero balance bank accounts and banking services.",

    benefits: [
        "Zero balance account",
        "RuPay Debit Card",
        "Accident insurance"
    ],

    documents: [
        "Aadhaar Card",
        "PAN (optional)",
        "Mobile Number"
    ],

    eligibility: [
        "Indian Citizen"
    ],

    criteria: {
        occupation: null,
        income: null,
        category: null,
        gender: null,
        age: {
            min: 10,
            max: 100
        },
        disability: null,
        bpl: null,
        state: null
    },

    officialWebsite:
        "https://pmjdy.gov.in/"
},
{
    id: 9,

    name: "Pradhan Mantri Ujjwala Yojana",

    category: "Women",

    provider: "Central Government",

    description:
        "Provides free LPG gas connections to eligible women from poor households.",

    benefits: [
        "Free LPG Connection",
        "Cleaner cooking fuel",
        "Health benefits"
    ],

    documents: [
        "Aadhaar Card",
        "BPL Card",
        "Ration Card"
    ],

    eligibility: [
        "Adult Woman",
        "BPL Household"
    ],

    criteria: {
        occupation: null,
        income: null,
        category: null,
        gender: ["Female"],
        age: {
            min: 18,
            max: 100
        },
        disability: null,
        bpl: ["Yes"],
        state: null
    },

    officialWebsite:
        "https://www.pmuy.gov.in/"
},
{
    id: 10,

    name: "PM Kaushal Vikas Yojana",

    category: "Employment",

    provider: "Central Government",

    description:
        "Skill development and vocational training program for Indian youth.",

    benefits: [
        "Free Skill Training",
        "Certification",
        "Placement Assistance"
    ],

    documents: [
        "Aadhaar Card",
        "Education Certificate",
        "Bank Account"
    ],

    eligibility: [
        "Indian Citizen",
        "Youth"
    ],

    criteria: {
        occupation: [
            "Student",
            "Unemployed"
        ],
        income: null,
        category: null,
        gender: null,
        age: {
            min: 18,
            max: 35
        },
        disability: null,
        bpl: null,
        state: null
    },

    officialWebsite:
        "https://www.pmkvyofficial.org/"
},
{
    id: 11,

    name: "PM Jeevan Jyoti Bima Yojana",

    category: "Finance",

    provider: "Central Government",

    description:
        "Government-backed life insurance scheme with affordable annual premium.",

    benefits: [
        "Life Insurance Cover",
        "Affordable Premium",
        "Easy Enrollment"
    ],

    documents: [
        "Bank Account",
        "Aadhaar Card",
        "Consent Form"
    ],

    eligibility: [
        "Bank Account Holder"
    ],

    criteria: {
        occupation: null,
        income: null,
        category: null,
        gender: null,
        age: {
            min: 18,
            max: 50
        },
        disability: null,
        bpl: null,
        state: null
    },

    officialWebsite:
        "https://jansuraksha.gov.in/"
},
{
    id: 12,

    name: "PM Suraksha Bima Yojana",

    category: "Finance",

    provider: "Central Government",

    description:
        "Affordable accident insurance scheme offering financial protection against accidental death and disability.",

    benefits: [
        "₹2 Lakh Accident Insurance",
        "Low Annual Premium",
        "Easy Bank Enrollment"
    ],

    documents: [
        "Aadhaar Card",
        "Savings Bank Account"
    ],

    eligibility: [
        "Indian Citizen",
        "18-70 Years"
    ],

    criteria: {
        occupation: null,
        income: null,
        category: null,
        gender: null,
        age: {
            min: 18,
            max: 70
        },
        disability: null,
        bpl: null,
        state: null
    },

    officialWebsite: "https://jansuraksha.gov.in/"
},
{
    id: 13,

    name: "Stand Up India",

    category: "Business",

    provider: "Central Government",

    description:
        "Provides bank loans for women and SC/ST entrepreneurs to establish new businesses.",

    benefits: [
        "Business Loan",
        "Entrepreneurship Support",
        "Bank Assistance"
    ],

    documents: [
        "Aadhaar Card",
        "PAN Card",
        "Business Proposal"
    ],

    eligibility: [
        "Women",
        "SC/ST Entrepreneurs"
    ],

    criteria: {
        occupation: [
            "Self Employed"
        ],
        income: null,
        category: [
            "SC",
            "ST"
        ],
        gender: [
            "Female"
        ],
        age: {
            min: 18,
            max: 100
        },
        disability: null,
        bpl: null,
        state: null
    },

    officialWebsite: "https://www.standupmitra.in/"
},
{
    id: 14,

    name: "PM Employment Generation Programme",

    category: "Business",

    provider: "Central Government",

    description:
        "Credit-linked subsidy scheme for setting up micro-enterprises and generating employment.",

    benefits: [
        "Business Subsidy",
        "Bank Loan",
        "Employment Generation"
    ],

    documents: [
        "Aadhaar Card",
        "PAN Card",
        "Project Report"
    ],

    eligibility: [
        "Entrepreneur",
        "18 Years Above"
    ],

    criteria: {
        occupation: [
            "Self Employed",
            "Unemployed"
        ],
        income: null,
        category: null,
        gender: null,
        age: {
            min: 18,
            max: 100
        },
        disability: null,
        bpl: null,
        state: null
    },

    officialWebsite: "https://www.kviconline.gov.in/pmegp/"
},
{
    id: 15,

    name: "National Apprenticeship Promotion Scheme",

    category: "Employment",

    provider: "Central Government",

    description:
        "Promotes apprenticeship training to improve employability of youth.",

    benefits: [
        "Skill Training",
        "Monthly Stipend",
        "Industry Experience"
    ],

    documents: [
        "Aadhaar Card",
        "Educational Certificate",
        "Bank Account"
    ],

    eligibility: [
        "Student",
        "Job Seeker"
    ],

    criteria: {
        occupation: [
            "Student",
            "Unemployed"
        ],
        income: null,
        category: null,
        gender: null,
        age: {
            min: 18,
            max: 35
        },
        disability: null,
        bpl: null,
        state: null
    },

    officialWebsite: "https://www.apprenticeshipindia.gov.in/"
},
{
    id: 16,

    name: "Sukanya Samriddhi Yojana",

    category: "Women",

    provider: "Central Government",

    description:
        "Small savings scheme for securing the financial future of girl children.",

    benefits: [
        "High Interest Savings",
        "Tax Benefits",
        "Long-term Financial Security"
    ],

    documents: [
        "Birth Certificate",
        "Aadhaar Card",
        "Guardian ID Proof"
    ],

    eligibility: [
        "Girl Child Below 10 Years"
    ],

    criteria: {
        occupation: null,
        income: null,
        category: null,
        gender: [
            "Female"
        ],
        age: {
            min: 0,
            max: 10
        },
        disability: null,
        bpl: null,
        state: null
    },

    officialWebsite: "https://www.indiapost.gov.in/"
},
{
    id: 17,

    name: "Beti Bachao Beti Padhao",

    category: "Women",

    provider: "Central Government",

    description:
        "Promotes education, welfare, and empowerment of the girl child across India.",

    benefits: [
        "Girl Child Education Support",
        "Awareness Programs",
        "Women Empowerment"
    ],

    documents: [
        "Birth Certificate",
        "Aadhaar Card",
        "Residence Proof"
    ],

    eligibility: [
        "Girl Child",
        "Indian Citizen"
    ],

    criteria: {
        occupation: null,
        income: null,
        category: null,
        gender: ["Female"],
        age: {
            min: 0,
            max: 18
        },
        disability: null,
        bpl: null,
        state: null
    },

    officialWebsite: "https://wcd.gov.in/bbbp-schemes"
},
{
    id: 18,

    name: "Soil Health Card Scheme",

    category: "Agriculture",

    provider: "Central Government",

    description:
        "Provides soil health cards to farmers with nutrient recommendations for better crop productivity.",

    benefits: [
        "Free Soil Testing",
        "Crop Nutrient Recommendations",
        "Higher Productivity"
    ],

    documents: [
        "Aadhaar Card",
        "Land Records"
    ],

    eligibility: [
        "Farmer"
    ],

    criteria: {
        occupation: ["Farmer"],
        income: null,
        category: null,
        gender: null,
        age: {
            min: 18,
            max: 100
        },
        disability: null,
        bpl: null,
        state: null
    },

    officialWebsite: "https://soilhealth.dac.gov.in/"
},
{
    id: 19,

    name: "Kisan Credit Card",

    category: "Agriculture",

    provider: "Central Government",

    description:
        "Provides short-term credit to farmers for agricultural and allied activities.",

    benefits: [
        "Low Interest Loan",
        "Flexible Credit",
        "Crop Finance"
    ],

    documents: [
        "Aadhaar Card",
        "Land Records",
        "Bank Passbook"
    ],

    eligibility: [
        "Farmer"
    ],

    criteria: {
        occupation: ["Farmer"],
        income: null,
        category: null,
        gender: null,
        age: {
            min: 18,
            max: 75
        },
        disability: null,
        bpl: null,
        state: null
    },

    officialWebsite: "https://pmkisan.gov.in/"
},
{
    id: 20,

    name: "Pradhan Mantri Bhartiya Janaushadhi Pariyojana",

    category: "Healthcare",

    provider: "Central Government",

    description:
        "Provides quality generic medicines at affordable prices through Jan Aushadhi Kendras.",

    benefits: [
        "Affordable Medicines",
        "Quality Generic Drugs",
        "Available Across India"
    ],

    documents: [
        "Prescription (if required)"
    ],

    eligibility: [
        "All Indian Citizens"
    ],

    criteria: {
        occupation: null,
        income: null,
        category: null,
        gender: null,
        age: {
            min: 0,
            max: 100
        },
        disability: null,
        bpl: null,
        state: null
    },

    officialWebsite: "https://janaushadhi.gov.in/"
},
{
    id: 21,

    name: "National Scholarship Portal",

    category: "Education",

    provider: "Central Government",

    description:
        "Single platform offering various scholarships for eligible students across India.",

    benefits: [
        "Scholarship Assistance",
        "Online Application",
        "Direct Benefit Transfer"
    ],

    documents: [
        "Aadhaar Card",
        "Income Certificate",
        "Previous Marksheet"
    ],

    eligibility: [
        "Eligible Student"
    ],

    criteria: {
        occupation: ["Student"],
        income: null,
        category: null,
        gender: null,
        age: {
            min: 15,
            max: 35
        },
        disability: null,
        bpl: null,
        state: null
    },

    officialWebsite: "https://scholarships.gov.in/"
},



];

/* ==========================================
        RENDER FEATURED SCHEMES
========================================== */

function renderFeaturedSchemes() {

    const schemeGrid = document.getElementById("schemeGrid");

    schemeGrid.innerHTML = "";

    featuredSchemes
    .slice(0, visibleSchemes)
    .forEach((scheme) => {

        const card = document.createElement("div");

        card.className = "scheme-card";

        card.innerHTML = `

            <div class="scheme-category ${scheme.category.toLowerCase()}">

                <i data-lucide="${categoryIcons[scheme.category]}"></i>

                <span>${scheme.category}</span>

            </div>

            <h3>${scheme.name}</h3>

            <div class="scheme-provider">

                <i data-lucide="building-2"></i>

                <span>${scheme.provider}</span>

            </div>

            <p class="scheme-description">

                ${scheme.description}

            </p>

            <div class="scheme-footer">

                <span class="scheme-tag">

                    ${scheme.eligibility}

                </span>

                <button
    class="scheme-btn view-details"
    data-id="${scheme.id}"
>

    View Details

    <i data-lucide="arrow-right"></i>

</button>

            </div>

        `;

        schemeGrid.appendChild(card);

    });

    const viewMoreBtn = document.getElementById("viewMoreBtn");

if (viewMoreBtn) {

    if (visibleSchemes >= featuredSchemes.length) {

        viewMoreBtn.style.display = "none";

    } else {

        viewMoreBtn.style.display = "inline-flex";

    }

}

    lucide.createIcons();
}

const viewMoreBtn = document.getElementById("viewMoreBtn");

if (viewMoreBtn) {

    viewMoreBtn.addEventListener("click", () => {

        visibleSchemes += 6;

        renderFeaturedSchemes();

    });

}

const modal = {

    overlay: document.getElementById("modalOverlay"),

    closeBtn: document.getElementById("closeModal"),

    title: document.getElementById("modalTitle"),

    category: document.getElementById("modalCategory"),

    provider: document.getElementById("modalProvider"),

    // providerInfo: document.getElementById("providerInfo"),

    description: document.getElementById("modalDescription"),

    benefits: document.getElementById("modalBenefits"),

    documents: document.getElementById("modalDocuments"),

    eligibility: document.getElementById("modalEligibility"),

    applyBtn: document.getElementById("applyButton")

};

function openSchemeModal(id) {

    const scheme = featuredSchemes.find(item => item.id == id);

    if (!scheme) return;

    modal.title.textContent = scheme.name;

    modal.category.textContent = scheme.category;

    // modal.provider.textContent = scheme.provider;

    const providerInfo = document.getElementById("providerInfo");

    // providerInfo.textContent = scheme.provider;

    modal.description.textContent = scheme.description;

    modal.applyBtn.href = scheme.officialWebsite;

    modal.benefits.innerHTML = "";

    modal.documents.innerHTML = "";

    modal.eligibility.innerHTML = "";

    modal.benefits.innerHTML = scheme.benefits
        .map(item => `
        <li>
        <i data-lucide="check"></i>
        <span>${item}</span>
        </li>
        `)
        .join("");

    modal.documents.innerHTML = scheme.documents
        .map(item => `
            <li>
            <i data-lucide="file-check"></i>
            <span>${item}</span>
            </li>
            `)
        .join("");

    modal.eligibility.innerHTML = scheme.eligibility
        .map(item => `
                <li>
                <i data-lucide="badge-check"></i>
                <span>${item}</span>
                </li>
                `)
        .join("");

    modal.overlay.classList.add("active");

    document.body.style.overflow = "hidden";

    lucide.createIcons();

}
/* ==========================================
VIEW DETAILS BUTTONS
========================================== */

document.addEventListener("click", (e) => {

    const btn = e.target.closest(".view-details");

    if (!btn) return;

    openSchemeModal(btn.dataset.id);

});
/* ==========================================
CLOSE MODAL
========================================== */

modal.closeBtn.addEventListener("click", () => {

    modal.overlay.classList.remove("active");

    document.body.style.overflow = "auto";

});
/* ==========================================
CLOSE ON OUTSIDE CLICK
========================================== */

modal.overlay.addEventListener("click", (e) => {

    if (e.target === modal.overlay) {

        modal.overlay.classList.remove("active");

        document.body.style.overflow = "auto";

    }

});
/* ==========================================
ESC KEY SUPPORT
========================================== */

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        modal.overlay.classList.remove("active");

        document.body.style.overflow = "auto";

    }

});
const checkEligibilityBtn = document.getElementById("checkEligibilityBtn");

if (checkEligibilityBtn) {

    checkEligibilityBtn.addEventListener("click", () => {

        document.getElementById("eligibility").scrollIntoView({

            behavior: "smooth"

        });

    });

}

const questionnaire = [

    {

        title: "Basic Information",

        fields: [

            {

                label: "Age",

                type: "number",

                id: "age",

                placeholder: "Enter your age"

            },

            {

                label: "Gender",

                type: "select",

                id: "gender",

                options: [

                    "Male",

                    "Female",

                    "Other"

                ]

            },

            {

                label: "Category",

                type: "select",

                id: "category",

                options: [

                    "General",

                    "OBC",

                    "SC",

                    "ST"

                ]

            }

        ]

    },

    {

        title: "Financial & Location",

        fields: [

            {

                label: "Annual Income",

                type: "select",

                id: "income",

                options: [

                    "Below ₹1 Lakh",

                    "₹1-3 Lakh",

                    "₹3-5 Lakh",

                    "Above ₹5 Lakh"

                ]

            },

            {

                label: "State / UT",

                type: "text",

                id: "state",

                placeholder: "Enter your State"

            }

        ]

    },

    {

        title: "Occupation",

        fields: [

            {

                label: "Occupation",

                type: "select",

                id: "occupation",

                options: [

                    "Student",

                    "Farmer",

                    "Self Employed",

                    "Unemployed",

                    "Senior Citizen",

                    "Private Employee"

                ]

            }

        ]

    },

    {

        title: "Special Criteria",

        fields: [

            {

                label: "Disability",

                type: "select",

                id: "disability",

                options: [

                    "No",

                    "Yes"

                ]

            },

            {

                label: "BPL Card",

                type: "select",

                id: "bpl",

                options: [

                    "No",

                    "Yes"

                ]

            }

        ]

    }

];

let currentStep = 0;

const userAnswers = {};

const questionnaireContainer = document.getElementById("questionnaireContainer");

const progressFill = document.getElementById("progressFill");

const currentStepText = document.getElementById("currentStep");

/* ==========================================
RENDER QUESTIONNAIRE
========================================== */

function renderQuestionnaire() {

    const step = questionnaire[currentStep];

    currentStepText.textContent = currentStep + 1;

    progressFill.style.width =
        `${((currentStep + 1) / questionnaire.length) * 100}%`;

    questionnaireContainer.innerHTML = `
                
                <h2 class="question-title">
                
                ${step.title}
                
                </h2>
                
                ${step.fields.map(field => {

        if (field.type === "number") {

            return `
                        
                        <div class="form-group">
                        
                        <label>${field.label}</label>
                        
                       <input
                            type="number"
                            id="${field.id}"
                            placeholder="${field.placeholder}"
                            value="${userAnswers[field.id] || ""}"
                        >
                        
                        </div>
                        
                        `;

        }

        if (field.type === "text") {

            return `
                        
                        <div class="form-group">
                        
                        <label>${field.label}</label>
                        
                        <input
                            type="text"
                            id="${field.id}"
                            placeholder="${field.placeholder}"
                            value="${userAnswers[field.id] || ""}"
                        >
                        
                        </div>
                        
                        `;

        }

        if (field.type === "select") {

            return `
                        
                        <div class="form-group">
                        
                        <label>${field.label}</label>
                        
                        <select id="${field.id}">
                        
                        ${field.options.map(option => `
                            
                           <option
                            value="${option}"
                            ${userAnswers[field.id] === option ? "selected" : ""}
                        >
                            
                            ${option}
                            
                            </option>
                            
                            `).join("")}
                            
                            </select>
                            
                    </div>
                    
                    `;

        }
    }).join("")}
            
            <div class="question-actions">

    ${currentStep > 0
            ? `
            <button
                class="secondary-btn"
                id="prevStep"
            >
                Previous
            </button>
          `
            : ""
        }
    

    <button
        class="primary-btn"
        id="nextStep"
    >

        ${currentStep === questionnaire.length - 1
            ? "Find Schemes"
            : "Next"
        }

    </button>

</div>

            
            `;


    const nextBtn = document.getElementById("nextStep");
    const prevBtn = document.getElementById("prevStep");

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {

            saveCurrentStep();

            currentStep--;

            renderQuestionnaire();

        });
    }

    nextBtn.addEventListener("click", () => {

        if (!validateCurrentStep()) {
            return;
        }

        saveCurrentStep();

        if (currentStep < questionnaire.length - 1) {

            currentStep++;

            renderQuestionnaire();

        } else {

            const matches = findMatchingSchemes();

            console.log("User Answers:", userAnswers);

            console.table(matches);

            renderResults(matches);

            document.getElementById("resultsContainer").scrollIntoView({

                behavior: "smooth"

            });

        }
    });
}

function saveCurrentStep() {

    const step = questionnaire[currentStep];

    step.fields.forEach(field => {

        const element = document.getElementById(field.id);

        if (element) {

            userAnswers[field.id] = element.value;

        }

    });
}

function matchesCriteria(userValue, criteriaValue) {

    // No restriction
    if (!criteriaValue) {
        return true;
    }

    // Any value is accepted
    if (criteriaValue === "Any") {
        return true;
    }

    // Multiple allowed values
    if (Array.isArray(criteriaValue)) {
        return criteriaValue.includes(userValue);
    }

    // Exact match
    return userValue === criteriaValue;
}
function calculateMatchScore(scheme) {

    const criteria = scheme.criteria;

    let score = 0;
    let total = 0;

    function check(userValue, schemeValue) {

        if (schemeValue === null) return;

        total++;

        if (Array.isArray(schemeValue)) {
            if (schemeValue.includes(userValue)) {
                score++;
            }
        }
        else if (userValue === schemeValue) {
            score++;
        }
    }

    check(userAnswers.occupation, criteria.occupation);
    check(userAnswers.category, criteria.category);
    check(userAnswers.gender, criteria.gender);
    check(userAnswers.disability, criteria.disability);
    check(userAnswers.bpl, criteria.bpl);
    check(userAnswers.state, criteria.state);
    check(userAnswers.income, criteria.income);

    if (criteria.age) {

        total++;

        const age = Number(userAnswers.age);

        if (
            age >= criteria.age.min &&
            age <= criteria.age.max
        ) {
            score++;
        }
    }

    if (total === 0) {
        return 100;
    }

    return Math.round((score / total) * 100);
}
function findMatchingSchemes() {

    return featuredSchemes
        .map((scheme) => {

            const criteria = scheme.criteria;

            let score = 0;
            let total = 0;

            // Occupation
            if (criteria.occupation !== null) {
                total++;
                if (matchesCriteria(userAnswers.occupation, criteria.occupation))
                    score++;
            }

            // Category
            if (criteria.category !== null) {
                total++;
                if (matchesCriteria(userAnswers.category, criteria.category))
                    score++;
            }

            // Gender
            if (criteria.gender !== null) {
                total++;
                if (matchesCriteria(userAnswers.gender, criteria.gender))
                    score++;
            }

            // Disability
            if (criteria.disability !== null) {
                total++;
                if (matchesCriteria(userAnswers.disability, criteria.disability))
                    score++;
            }

            // BPL
            if (criteria.bpl !== null) {
                total++;
                if (matchesCriteria(userAnswers.bpl, criteria.bpl))
                    score++;
            }

            // State
            if (criteria.state !== null) {
                total++;
                if (matchesCriteria(userAnswers.state, criteria.state))
                    score++;
            }

            // Income
            if (criteria.income !== null) {
                total++;
                if (matchesCriteria(userAnswers.income, criteria.income))
                    score++;
            }

            // Age
            if (criteria.age) {

                total++;

                const age = Number(userAnswers.age);

                if (
                    age >= criteria.age.min &&
                    age <= criteria.age.max
                ) {
                    score++;
                }
            }

            const matchScore =
                total === 0
                    ? 100
                    : Math.round((score / total) * 100);

            return {
                ...scheme,
                matchScore
            };

        })

        // only keep decent matches
        .filter(scheme => scheme.matchScore >= 40)

        // highest first
        .sort((a, b) => b.matchScore - a.matchScore);

}
function renderResults(matches) {

    const container = document.getElementById("resultsContainer");

    container.innerHTML = "";

    if (matches.length === 0) {

        container.innerHTML = `
            <div class="no-results">

                <h2>No Matching Schemes Found</h2>

                <p>
                    Try changing your details to discover more schemes.
                </p>

            </div>
        `;

        return;
    }

    container.innerHTML = `
        <h2 class="results-title">
            Eligible Schemes (${matches.length})
        </h2>

        <div class="result-grid" id="resultGrid"></div>
    `;

    const resultGrid = document.getElementById("resultGrid");

    matches.forEach((scheme) => {

        const card = document.createElement("div");

        card.className = "scheme-card";

        card.innerHTML = `
            <div class="scheme-category ${scheme.category.toLowerCase()}">

                <i data-lucide="${categoryIcons[scheme.category]}"></i>

                <span>${scheme.category}</span>

            </div>

            <h3>${scheme.name}</h3>

            <div class="scheme-provider">

                <i data-lucide="building-2"></i>

                <span>${scheme.provider}</span>

            </div>

            <div class="match-score">

    ⭐ ${scheme.matchScore}% Match

</div>

            <p class="scheme-description">

                ${scheme.description}

            </p>

            <div class="scheme-footer">

                <span class="scheme-tag">

                    ${scheme.occupation}

                </span>

                <button
                    class="scheme-btn view-details"
                    data-id="${scheme.id}"
                >

                    View Details

                    <i data-lucide="arrow-right"></i>

                </button>

            </div>
        `;

        resultGrid.appendChild(card);

    });

    lucide.createIcons();

}

function validateCurrentStep() {

    const step = questionnaire[currentStep];

    for (const field of step.fields) {

        const element = document.getElementById(field.id);

        if (!element.value.trim()) {

            alert(`Please enter ${field.label}.`);

            element.focus();

            return false;

        }

    }

    return true;

}

document.addEventListener("DOMContentLoaded", () => {

    renderFeaturedSchemes();

    renderQuestionnaire();

});


const themeToggle = document.getElementById("themeToggle");

function updateThemeIcon() {

    themeToggle.innerHTML = `
        <i data-lucide="${
            document.body.classList.contains("dark")
                ? "sun"
                : "moon"
        }"></i>
    `;

    lucide.createIcons();
}
// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

updateThemeIcon();

themeToggle.addEventListener("click", () => {

    console.log("clicked");

    document.body.classList.toggle("dark");

    console.log(document.body.classList);

    updateThemeIcon();

});