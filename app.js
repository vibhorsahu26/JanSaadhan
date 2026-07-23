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
        description: "Income support of ₹6,000 per year for eligible farmer families.",
        eligibility: "Eligible Farmers",
        applyLink: "https://pmkisan.gov.in/"
    },

    {
        id: 2,
        name: "Ayushman Bharat",
        category: "Healthcare",
        provider: "Central Government",
        description: "Health insurance coverage of up to ₹5 lakh per family every year.",
        eligibility: "Eligible Families",
        applyLink: "https://beneficiary.nha.gov.in/"
    },

    {
        id: 3,
        name: "PM Awas Yojana",
        category: "Housing",
        provider: "Central Government",
        description: "Financial assistance for affordable housing under PMAY.",
        eligibility: "Low Income Families",
        applyLink: "https://pmaymis.gov.in/"
    },

    {
        id: 4,
        name: "PM Mudra Yojana",
        category: "Business",
        provider: "Central Government",
        description: "Collateral-free business loans for small entrepreneurs.",
        eligibility: "Small Businesses",
        applyLink: "https://www.mudra.org.in/"
    },

    {
        id: 5,
        name: "Post Matric Scholarship",
        category: "Education",
        provider: "Central Government",
        description: "Scholarship support for students pursuing higher education.",
        eligibility: "Eligible Students",
        applyLink: "https://scholarships.gov.in/"
    },

    {
        id: 6,
        name: "Atal Pension Yojana",
        category: "Pension",
        provider: "Central Government",
        description: "Guaranteed monthly pension for workers in the unorganized sector.",
        eligibility: "Indian Citizens",
        applyLink: "https://www.npscra.nsdl.co.in/"
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

                <a
                    href="${scheme.applyLink}"
                    target="_blank"
                    class="scheme-btn"
                >

                    Learn More

                    <i data-lucide="arrow-right"></i>

                </a>

            </div>

        `;

        schemeGrid.appendChild(card);

    });

    lucide.createIcons();

}

document.addEventListener("DOMContentLoaded", () => {

    renderFeaturedSchemes();

});