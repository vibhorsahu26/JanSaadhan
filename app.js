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

        officialWebsite: "https://www.npscra.nsdl.co.in/"
    }

];

/* ==========================================
        RENDER FEATURED SCHEMES
========================================== */

function renderFeaturedSchemes() {

    const schemeGrid = document.getElementById("schemeGrid");

    schemeGrid.innerHTML = "";

    featuredSchemes.forEach((scheme) => {

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
    
    lucide.createIcons();
}
document.addEventListener("DOMContentLoaded", () => {

    renderFeaturedSchemes();

});
    /* ==========================================
        MODAL REFERENCES
        ========================================== */

/* ==========================================
        MODAL REFERENCES
========================================== */

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



/* ==========================================
        OPEN MODAL
========================================== */

/* ==========================================
        OPEN MODAL
========================================== */

function openSchemeModal(id){

    const scheme = featuredSchemes.find(item => item.id == id);

    if(!scheme) return;

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

document.addEventListener("click",(e)=>{

    const btn = e.target.closest(".view-details");

    if(!btn) return;

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