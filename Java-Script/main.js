document.querySelectorAll('.dropdown-wrapper').forEach(wrapper => {
    const selectedOption = wrapper.querySelector('.selected-option');
    const dropdownItems = wrapper.querySelectorAll('.dropdown div');

    wrapper.addEventListener('click', function(e) {
        e.stopPropagation();
        document.querySelectorAll('.dropdown-wrapper').forEach(w => {
            if (w !== wrapper) w.classList.remove('active');
        });
        wrapper.classList.toggle('active');
    });

    dropdownItems.forEach(item => {
        item.addEventListener('click', function() {
            selectedOption.innerHTML = this.innerHTML;
            wrapper.classList.remove('active');
        });
    });
});

document.addEventListener('click', function() {
    document.querySelectorAll('.dropdown-wrapper').forEach(w => w.classList.remove('active'));
});

document.addEventListener("DOMContentLoaded", () => {
    const selector = document.querySelector(".language-selector");
    const dropdown = document.querySelector(".language-dropdown");
    const selectedText = selector.querySelector("span:nth-child(2)");
    const selectedImg = selector.querySelector("span img");

    selector.addEventListener("click", () => {
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });

    dropdown.querySelectorAll(".lang-option").forEach(option => {
        option.addEventListener("click", () => {
            const img = option.querySelector("img").src;
            const text = option.textContent.trim();

            selectedImg.src = img;
            selectedText.textContent = text;
            dropdown.style.display = "none";
        });
    });

    // Close if clicked outside
    document.addEventListener("click", (e) => {
        if (!selector.contains(e.target)) {
            dropdown.style.display = "none";
        }
    });
});



// Countdown target date (yyyy-mm-dd hh:mm:ss)
    const targetDate = new Date("2025-08-20 23:59:59").getTime();

    function updateTimer() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance <= 0) {
            // Timer end ho gaya
            document.querySelector(".timer-display").innerHTML = "<div>Deal Ended</div>";
            clearInterval(timerInterval);
            return;
        }

        // Time calculations
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update HTML
        const timerNumbers = document.querySelectorAll(".timer-number");
        timerNumbers[0].textContent = days.toString().padStart(2, "0");
        timerNumbers[1].textContent = hours.toString().padStart(2, "0");
        timerNumbers[2].textContent = minutes.toString().padStart(2, "0");
        timerNumbers[3].textContent = seconds.toString().padStart(2, "0");
    }

    // Update every second
    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer(); // first run