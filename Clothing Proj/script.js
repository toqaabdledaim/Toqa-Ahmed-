if (document.body.id === 'index-page') {
    document.querySelectorAll('.card-img').forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.border = '2px solid #333';
        });
        img.addEventListener('mouseout', () => {
            img.style.border = 'none';
        });
    });
} else{
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('favorite');
        });
    });
}


const toggleButton = document.getElementById('mode-toggle');
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    toggleButton.textContent = "Switch to Light Mode"; // Change button text to "Switch to Light Mode"
} else {
    document.body.classList.remove('dark-mode');
    toggleButton.textContent = "Switch to Dark Mode"; // Change button text to "Switch to Dark Mode"
}
toggleButton.addEventListener('click', () => {
    // document.body.classList.toggle('dark-mode');
    // toggleButton.textContent = document.body.classList.contains('dark-mode')
    //     ? 'Switch to Light Mode'
    //     : 'Switch to Dark Mode';
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled'); // Save the preference
        toggleButton.textContent = "Switch to Dark Mode"; // Change button text
    } else {
        // If dark mode is not enabled, enable it
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled'); // Save the preference
        toggleButton.textContent = "Switch to Light Mode"; // Change button text
    }
});

const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        // Show the button when scrolled down
        scrollToTopButton.style.opacity = '1';
        scrollToTopButton.style.visibility = 'visible';
    } else {
        // Hide the button when at the top
        scrollToTopButton.style.opacity = '0';
        scrollToTopButton.style.visibility = 'hidden';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const cards = document.querySelectorAll('.card');

function revealCards() {
    cards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (cardPosition < windowHeight - 200) {
            card.classList.add('revealed');
        }
    });
}

window.addEventListener('scroll', revealCards);

// card header text on scroll
document.addEventListener("DOMContentLoaded", () => {
    const headerText = document.querySelectorAll("header h1, header p");

    const onScroll = () => {
        headerText.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.classList.add("visible");
            } else {
                el.classList.remove("visible");
            }
        });
    };

    // Run on scroll and page load
    window.addEventListener("scroll", onScroll);
    onScroll();
});


document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.animate');

    const handleScroll = () => {
        animatedElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    };

    // Trigger on scroll and on page load
    window.addEventListener('scroll', handleScroll);
    handleScroll();
});

document.getElementById("search-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page refresh
    const query = document.getElementById("search-bar").value.trim().toLowerCase();

    if (query) {
        // Remove existing highlights
        document.querySelectorAll(".highlight").forEach((el) => el.classList.remove("highlight"));

        let found = false;

        // Search and highlight within `.card` elements
        document.querySelectorAll('.card').forEach((element) => {
            const text = element.textContent || element.innerText;

            if (text.toLowerCase().includes(query)) {
                element.classList.add("highlight"); 
                found = true;
            }
        });

        // Scroll to the first highlighted element
        const firstHighlight = document.querySelector(".highlight");
        if (firstHighlight) {
            firstHighlight.scrollIntoView({ behavior: "smooth", block: "center" });
        }

        if (!found) {
            alert("No matches found.");
        }
    } else {
        alert("Please enter a search term.");
    }
});
