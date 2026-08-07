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