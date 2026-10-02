let resources = JSON.parse(localStorage.getItem("resources")) || [
    {
        title: "MDN Web Docs",
        description: "HTML, CSS and JavaScript documentation",
        category: "Web Development",
        link: "https://developer.mozilla.org/"
    },
    {
        title: "React",
        description: "Learn React for web development",
        category: "Web Development",
        link: "https://react.dev/"
    },
    {
        title: "Flutter",
        description: "Build mobile applications",
        category: "App Development",
        link: "https://flutter.dev/"
    },
    {
        title: "Kaggle",
        description: "Learn AI and Machine Learning",
        category: "AI/ML",
        link: "https://www.kaggle.com/"
    },
    {
        title: "GitHub",
        description: "Store and manage your coding projects",
        category: "Tools",
        link: "https://github.com/"
    }
];
function showResources() {
    let box = document.getElementById("resourceContainer");
    box.innerHTML = "";
    resources.forEach(function(resource) {
        box.innerHTML += `
            <div class="card">
                <span class="category">
                    ${resource.category}
                </span>
                <h3>
                    ${resource.title}
                </h3>
                <p>
                    ${resource.description}
                </p>
                <a href="${resource.link}" target="_blank">
                    Visit Resource
                </a>
                <button onclick="deleteResource(${resources.indexOf(resource)})">
    Delete
</button>
            </div>
        `;
    });
}
document.getElementById("searchInput")
.addEventListener("input", function() {
    let search = this.value.toLowerCase();
    let cards = document.querySelectorAll(".card");
    cards.forEach(function(card) {
        let text = card.innerText.toLowerCase();
        if (text.includes(search)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
document.getElementById("categoryFilter")
.addEventListener("change", function() {
    let category = this.value;
    let cards = document.querySelectorAll(".card");
    cards.forEach(function(card) {
        let cardCategory =
            card.querySelector(".category").innerText;
        if (category == "All" ||
            cardCategory == category) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
document.getElementById("resourceForm")
.addEventListener("submit", function(event) {
    event.preventDefault();
    let title =
        document.getElementById("title").value;
    let description =
        document.getElementById("description").value;
    let category =
        document.getElementById("category").value;
    let link =
        document.getElementById("link").value;
    let newResource = {
        title: title,
        description: description,
        category: category,
        link: link
    };
    resources.push(newResource);
    localStorage.setItem(
        "resources",
        JSON.stringify(resources)
    );
    showResources();
    this.reset();
});
showResources();
function deleteResource(index) {
    resources.splice(index, 1);

    localStorage.setItem(
        "resources",
        JSON.stringify(resources)
    );

    showResources();
}