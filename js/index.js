const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// Nav Items
const navItems = document.querySelectorAll("a");
navItems[0].textContent = siteContent["nav"]["nav-item-1"];
navItems[1].textContent = siteContent["nav"]["nav-item-2"];
navItems[2].textContent = siteContent["nav"]["nav-item-3"];
navItems[3].textContent = siteContent["nav"]["nav-item-4"];
navItems[4].textContent = siteContent["nav"]["nav-item-5"];
navItems[5].textContent = siteContent["nav"]["nav-item-6"];

// Title Text
const ctaText = document.querySelector(".cta-text h1");
ctaText.textContent = siteContent["cta"]["h1"];

// Title Button
const ctaBtn = document.querySelector(".cta-text button");
ctaBtn.textContent = siteContent["cta"]["button"];

// Title Image
const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

// Main Content Titles
const mainTitles = document.querySelectorAll(".main-content h4");
mainTitles[0].textContent = siteContent["main-content"]["features-h4"];
mainTitles[1].textContent = siteContent["main-content"]["about-h4"];
mainTitles[2].textContent = siteContent["main-content"]["services-h4"];
mainTitles[3].textContent = siteContent["main-content"]["product-h4"];
mainTitles[4].textContent = siteContent["main-content"]["vision-h4"];

// Main Content Paragraphs
const mainParagraphs = document.querySelectorAll(".main-content p");
mainParagraphs[0].textContent = siteContent["main-content"]["features-content"];
mainParagraphs[1].textContent = siteContent["main-content"]["about-content"];
mainParagraphs[2].textContent = siteContent["main-content"]["services-content"];
mainParagraphs[3].textContent = siteContent["main-content"]["product-content"];
mainParagraphs[4].textContent = siteContent["main-content"]["vision-content"];

// Middle Image
const middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// Contact Title
const contactTitle = document.querySelector(".contact h4");
contactTitle.textContent = siteContent["contact"]["contact-h4"];

// Contact Paragraphs
const contactParagraphs = document.querySelectorAll(".contact p");
contactParagraphs[0].textContent = siteContent["contact"]["address"];
contactParagraphs[1].textContent = siteContent["contact"]["phone"];
contactParagraphs[2].textContent = siteContent["contact"]["email"];

// Footer
const footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];

// New Elements
const newNavItem = document.createElement("a");
newNavItem.textContent = "Team";
newNavItem.setAttribute("href", "#");
document.querySelector("nav").appendChild(newNavItem);

const newerNavItem = document.createElement("a");
newerNavItem.textContent = "Schedule";
newerNavItem.setAttribute("href", "#");
document.querySelector("nav").appendChild(newerNavItem);

// NavItems text to green
document.querySelector("nav a").forEach(a => {
  a.style.color = "green";
});
