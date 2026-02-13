// Load components when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadComponent('header-container', 'components/header.html');
    loadComponent('menubar-container', 'components/menubar.html').then(() => {
        setActiveMenuItem();
    });
});

function loadComponent(elementId, filePath) {
    return fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error));
}

// Set active menu item based on current page
function setActiveMenuItem() {
    const currentPath = window.location.pathname;
    const menuLinks = document.querySelectorAll('#menuBar a, #menuBar button');
    
    menuLinks.forEach(link => {
        link.classList.remove('active');
        
        if (link.tagName === 'A') {
            const href = link.getAttribute('href');
            // Check if the current path ends with this href
            if (currentPath.endsWith(href)) {
                link.classList.add('active');
            }
        }
    });
    
    // Special handling for project pages
    const projectPages = ['interactiveMenuBar.html', '3dPrinting.html', 'projects.html'];
    if (projectPages.some(page => currentPath.includes(page))) {
        const dropBtn = document.querySelector('.dropBtn');
        if (dropBtn) {
            dropBtn.classList.add('active');
        }
    }
}

// Dropdown menu toggle
function dropMenu() {
    document.getElementById("projList").classList.toggle("show");
}

// Close dropdown when clicking outside
window.onclick = function(event) {
    if (!event.target.matches('.dropBtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Login check function (NOTE: This is NOT secure - anyone can view this code)
function check(form) {
    if(form.username.value == "James" && form.password.value == "test") {
        window.open('adminOnly.html', '_self');
        document.getElementById('main').setAttribute('hidden', 'false');
        document.getElementById('noAccess').setAttribute('hidden', 'true');
    }
    else {
        alert("Wrong Password or Username")
    }
}

// Referrer check function
function referCheck(referPage) {
    if(referPage.includes('loginPage.html')) {
        return true;
    }
    else {
        self.location='loginPage.html';
        alert("Please Sign in First");
    }
}