'use strict';

// Local demos open rendered projects; verified GitHub URLs open source code.
const projects = [
  {
    "title": "Curbside Thai",
    "activity": "M1A2",
    "category": "html",
    "label": "HTML FOUNDATIONS",
    "description": "An introductory restaurant page using semantic HTML, headings, navigation links, an image, and organized page content.",
    "url": "https://github.com/hailey-cezanne/m1a2-2106-hailey-cezanne",
    "linkType": "github"
  },
  {
    "title": "Portfolio Structure",
    "activity": "M2A1",
    "category": "css",
    "label": "FLEXBOX LAYOUT",
    "description": "An early portfolio scaffold arranging the header, hero, about, projects, contact, and footer with Flexbox and a small-screen media query.",
    "url": "https://github.com/hailey-cezanne/m2a1-2106-hailey-cezanne",
    "linkType": "github"
  },
  {
    "title": "Projects Grid",
    "activity": "M2A2",
    "category": "css",
    "label": "CSS GRID",
    "description": "A reusable project-card layout combining CSS Grid, Flexbox card content, images, rounded corners, and gradient styling.",
    "url": "https://github.com/hailey-cezanne/m2a2-2106-hailey-cezanne",
    "linkType": "github"
  },
  {
    "title": "Portfolio Styling",
    "activity": "M2A3",
    "category": "design",
    "label": "DESIGN SYSTEM",
    "description": "A portfolio styling exercise with a defined color palette, Georgia headings, Arial body text, consistent spacing, buttons, and reusable CSS classes.",
    "url": "projects/m2a3/",
    "linkType": "demo"
  },
  {
    "title": "My Favourites",
    "activity": "M2A4",
    "category": "html",
    "label": "HTML & FLEXBOX",
    "description": "A personal page about music, hobbies, and favourite characters, built with semantic HTML, external CSS, and Flexbox navigation and cards.",
    "url": "projects/m2a4/",
    "linkType": "demo"
  },
  {
    "title": "Responsive Website",
    "activity": "M2A5",
    "category": "responsive",
    "label": "RESPONSIVE DESIGN",
    "description": "A three-page Curbside Thai website with responsive images, wrapping navigation, Flexbox layouts, and CSS media queries for tablet and phone screens.",
    "url": "projects/m2a5/",
    "linkType": "demo"
  },
  {
    "title": "MonsterMatch",
    "activity": "M6A1",
    "category": "html",
    "label": "FORMS & TABLES",
    "description": "A themed profile mockup with a details table, labeled form fields, built-in required-field checks, and CSS gradients and animation.",
    "url": "https://github.com/hailey-cezanne/m6a1-2106-hailey-cezanne",
    "linkType": "github"
  },
  {
    "title": "Music Player",
    "activity": "M6A2",
    "category": "javascript",
    "label": "MEDIA & EVENTS",
    "description": "An audio/video player with JavaScript view toggles that pause the previous player and synchronize playback position when switching views.",
    "url": "projects/m6a2/",
    "linkType": "demo"
  },
  {
    "title": "Make the Page Talk",
    "activity": "M8A1",
    "category": "javascript",
    "label": "VARIABLES & DOM",
    "description": "A first JavaScript activity that combines a dish name and price into a message and displays it on the page with textContent.",
    "url": "https://github.com/hailey-cezanne/m8a1-2106-hailey-cezanne",
    "linkType": "github"
  },
  {
    "title": "Order Counter",
    "activity": "M8A2",
    "category": "javascript",
    "label": "DOM & CLICK EVENTS",
    "description": "A spring-roll counter that updates the page when Add is clicked and resets the running total with a separate Reset button.",
    "url": "projects/m8a2/",
    "linkType": "demo"
  },
  {
    "title": "Order Calculator",
    "activity": "M9A1",
    "category": "javascript",
    "label": "PARAMETERS & RETURN VALUES",
    "description": "A price-and-quantity calculator whose repository version uses a named orderTotal function to return the product and update the total as inputs change.",
    "url": "https://github.com/hailey-cezanne/m9a1-2106-hailey-cezanne",
    "linkType": "github"
  },
  {
    "title": "Checkout Form",
    "activity": "M9A2",
    "category": "javascript",
    "label": "FORMS & FUNCTIONS",
    "description": "An order calculator with dish selection, quantity input, and an optional delivery fee. Separate functions calculate the subtotal and total as controls change.",
    "url": "projects/m9a2/",
    "linkType": "demo"
  },
  {
    "title": "Data-driven Menu",
    "activity": "M10A1",
    "category": "javascript",
    "label": "ARRAYS & LOOPS",
    "description": "A menu generated from an array of dish objects, with a loop rendering the list and calculations displaying the dish count and sum of prices.",
    "url": "https://github.com/hailey-cezanne/m10a1-2106-hailey-cezanne",
    "linkType": "github"
  },
  {
    "title": "Find a Dish",
    "activity": "M10A2",
    "category": "javascript",
    "label": "ARRAYS & SEARCH",
    "description": "A menu generated from an array of dish objects, with live case-insensitive search, spicy badges, a result count, and a no-matches message.",
    "url": "projects/m10a2/",
    "linkType": "demo"
  },
  {
    "title": "Never Show NaN",
    "activity": "M11A1",
    "category": "javascript",
    "label": "INPUT VALIDATION",
    "description": "A price-and-quantity calculator that rejects blank, non-numeric, and negative input with a number-reading function, try/catch, and visible error messages.",
    "url": "projects/m11a1/",
    "linkType": "demo"
  },
  {
    "title": "Split the Receipt",
    "activity": "M11A2",
    "category": "javascript",
    "label": "DEBUGGING & CALCULATIONS",
    "description": "A receipt-splitting debugging activity that calculates the tip, total, and cost per diner, formats amounts to two decimals, and warns about a blank bill or fewer than one diner.",
    "url": "projects/m11a2/",
    "linkType": "demo"
  }
];

const projectList = document.querySelector('#project-list');
const projectCount = document.querySelector('#project-count');
const projectSearch = document.querySelector('#project-search');
const projectFilter = document.querySelector('#project-filter');

// Calculate results without changing the original array or the page.
function filterProjects(list, searchTerm, category) {
  const search = searchTerm.trim().toLowerCase();
  return list.filter(function (project) {
    const searchableText = (project.title + ' ' + project.description + ' ' +
      project.label + ' ' + project.activity).toLowerCase();
    const matchesSearch = searchableText.includes(search);
    const matchesCategory = category === 'all' || project.category === category;
    return matchesSearch && matchesCategory;
  });
}

// All project-list updates happen here, with one write after the loop.
function renderProjects(list) {
  let markup = '';
  for (const project of list) {
    const buttonText = project.linkType === 'github' ? 'View Code →' : 'View Project →';
    const externalAttributes = project.linkType === 'github' ? ' target="_blank" rel="noopener"' : '';
    const action = '<a class="project-link" href="' + project.url + '"' + externalAttributes + '>' + buttonText + '</a>';
    markup += '<article class="project-card"><div class="project-info">' +
      '<p class="project-category">' + project.activity + ' • ' + project.label + '</p>' +
      '<h3>' + project.title + '</h3>' +
      '<p>' + project.description + '</p>' + action + '</div></article>';
  }
  if (list.length === 0) {
    markup = '<p class="empty-message">No projects matched your search. Try another keyword or category.</p>';
  }
  projectList.innerHTML = markup;
  projectCount.textContent = 'Showing ' + list.length + ' of ' + projects.length + ' projects';
}

function updateProjects() {
  const filteredProjects = filterProjects(projects, projectSearch.value, projectFilter.value);
  renderProjects(filteredProjects);
}

renderProjects(projects);
projectSearch.addEventListener('input', updateProjects);
projectFilter.addEventListener('change', updateProjects);
