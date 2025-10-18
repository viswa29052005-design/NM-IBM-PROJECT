// Portfolio Website JS

// Theme Switcher
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
	document.body.classList.toggle('dark-theme');
	themeToggle.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
});

// Smooth Scroll Navigation
document.querySelectorAll('nav a').forEach(link => {
	link.addEventListener('click', function(e) {
		e.preventDefault();
		const target = document.querySelector(this.getAttribute('href'));
		if (target) {
			target.scrollIntoView({ behavior: 'smooth' });
		}
	});
});

// Dynamic Project Rendering
const projects = [
	{
		title: "Portfolio Website",
		description: "A modern, responsive portfolio website built with HTML, CSS, and JavaScript.",
		image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
		link: "https://github.com/yourusername/portfolio"
	},
	{
		title: "Weather App",
		description: "A weather application using OpenWeatherMap API.",
		image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
		link: "https://github.com/yourusername/weather-app"
	},
	{
		title: "Task Manager",
		description: "A simple task manager to track your daily activities.",
		image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
		link: "https://github.com/yourusername/task-manager"
	}
	// Add more projects as needed
];

function renderProjects() {
	const container = document.getElementById('projects-container');
	container.innerHTML = '';
	projects.forEach((project, idx) => {
		const card = document.createElement('div');
		card.className = 'project-card';
		card.innerHTML = `
			<img src="${project.image}" alt="${project.title}" />
			<h3>${project.title}</h3>
			<p>${project.description}</p>
			<button class="details-btn" data-idx="${idx}">Details</button>
		`;
		container.appendChild(card);
	});
}
renderProjects();

// Modal Popup for Project Details
const modal = document.getElementById('project-modal');
const modalContent = document.getElementById('modal-content');
document.addEventListener('click', function(e) {
	if (e.target.classList.contains('details-btn')) {
		const idx = e.target.getAttribute('data-idx');
		const project = projects[idx];
		modalContent.innerHTML = `
			<h2>${project.title}</h2>
			<img src="${project.image}" alt="${project.title}" />
			<p>${project.description}</p>
			<a href="${project.link}" target="_blank">View on GitHub</a>
			<button id="close-modal">Close</button>
		`;
		modal.style.display = 'flex';
	}
	if (e.target.id === 'close-modal' || e.target === modal) {
		modal.style.display = 'none';
	}
});

// Contact Form Validation
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
	e.preventDefault();
	const name = contactForm.elements['name'].value.trim();
	const email = contactForm.elements['email'].value.trim();
	const message = contactForm.elements['message'].value.trim();
	if (!name || !email || !message) {
		alert('Please fill in all fields.');
		return;
	}
	if (!validateEmail(email)) {
		alert('Please enter a valid email.');
		return;
	}
	alert('Message sent!');
	contactForm.reset();
});

function validateEmail(email) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Skill Progress Bars Animation
function animateSkills() {
	document.querySelectorAll('.progress-bar').forEach(bar => {
		const percent = bar.getAttribute('data-skill');
		bar.querySelector('::after'); // For CSS selector
		bar.style.setProperty('--bar-width', percent);
		bar.style.position = 'relative';
		// Animate using JS for compatibility
		setTimeout(() => {
			bar.style.background = '#e5e7eb';
			bar.innerHTML = `<div style="background: var(--primary-color); height: 100%; width: ${percent}; border-radius: 8px; transition: width 1s;"></div>`;
		}, 300);
	});
}
window.addEventListener('DOMContentLoaded', animateSkills);

// Footer Year Update
document.getElementById('footer-year').textContent = new Date().getFullYear();
