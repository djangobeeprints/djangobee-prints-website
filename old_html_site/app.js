// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Sample Posts Data - This will eventually come from a backend or CMS
const posts = [
    {
        id: 1,
        title: "Getting Started with Classroom Recorders",
        category: "tech",
        categoryLabel: "Tech Guide",
        date: "2025-01-15",
        excerpt: "Learn how to integrate recorders into your elementary music curriculum with practical tips and engaging activities for young learners.",
        image: "assets/recorder_clip_1.jpg",
        slug: "getting-started-classroom-recorders"
    },
    {
        id: 2,
        title: "DIY Xylophone Mounting Solutions",
        category: "tech",
        categoryLabel: "Tech Guide",
        date: "2025-01-10",
        excerpt: "Create accessible and organized xylophone storage with these simple mounting solutions perfect for elementary classrooms.",
        image: "assets/xylophone_mount_1.jpg",
        slug: "diy-xylophone-mounting"
    },
    {
        id: 3,
        title: "Why Technology Integration Matters in Elementary Education",
        category: "thought",
        categoryLabel: "Educational Thought",
        date: "2025-01-05",
        excerpt: "Reflections on the meaningful integration of technology in elementary classrooms and how it can enhance rather than replace traditional learning.",
        image: null,
        slug: "technology-integration-matters"
    },
    {
        id: 4,
        title: "Building Digital Literacy from Grade 1",
        category: "tech",
        categoryLabel: "Tech Guide",
        date: "2024-12-28",
        excerpt: "A practical framework for introducing digital literacy concepts to first graders in age-appropriate and engaging ways.",
        image: null,
        slug: "digital-literacy-grade-1"
    },
    {
        id: 5,
        title: "The Balance Between Tech and Hands-On Learning",
        category: "thought",
        categoryLabel: "Educational Thought",
        date: "2024-12-20",
        excerpt: "Finding the sweet spot between digital tools and tactile experiences in the elementary classroom.",
        image: null,
        slug: "balance-tech-hands-on"
    },
    {
        id: 6,
        title: "Setting Up a Classroom iPad Station",
        category: "tech",
        categoryLabel: "Tech Guide",
        date: "2024-12-15",
        excerpt: "Step-by-step guide to creating an organized, accessible, and effective iPad learning station for your elementary students.",
        image: null,
        slug: "classroom-ipad-station"
    }
];

// Format date to readable string
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Create post card HTML
function createPostCard(post) {
    const imageHTML = post.image
        ? `<img src="${post.image}" alt="${post.title}" class="post-image">`
        : '';

    const categoryClass = post.category === 'tech' ? 'category-tech' : 'category-thought';

    return `
        <article class="post-card">
            ${imageHTML}
            <div class="post-content">
                <div class="post-header">
                    <span class="post-category ${categoryClass}">${post.categoryLabel}</span>
                    <h3 class="post-title">
                        <a href="post.html?id=${post.slug}">${post.title}</a>
                    </h3>
                    <time class="post-date" datetime="${post.date}">${formatDate(post.date)}</time>
                </div>
                <p class="post-excerpt">${post.excerpt}</p>
                <a href="post.html?id=${post.slug}" class="read-more">Read More</a>
            </div>
        </article>
    `;
}

// Load and display posts
function loadPosts(filterCategory = null) {
    const postsContainer = document.getElementById('posts-container');

    if (!postsContainer) return;

    let filteredPosts = posts;

    // Filter by category if specified
    if (filterCategory) {
        filteredPosts = posts.filter(post => post.category === filterCategory);
    }

    // Sort by date (newest first)
    filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Generate HTML
    const postsHTML = filteredPosts.map(post => createPostCard(post)).join('');

    // Display posts
    postsContainer.innerHTML = postsHTML;

    // Show message if no posts
    if (filteredPosts.length === 0) {
        postsContainer.innerHTML = '<p class="no-posts">No posts found.</p>';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Check which page we're on and load appropriate content
    const currentPage = window.location.pathname.split('/').pop();

    if (currentPage === '' || currentPage === 'index.html') {
        loadPosts(); // Load all posts for home page
    } else if (currentPage === 'tech-guides.html') {
        loadPosts('tech'); // Load only tech guides
    } else if (currentPage === 'thoughts.html') {
        loadPosts('thought'); // Load only educational thoughts
    }
});

// Export for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { posts, loadPosts, formatDate };
}
