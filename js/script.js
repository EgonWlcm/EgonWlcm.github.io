function changeImages(set) {
    const gallery = document.getElementById("gallery");

    let images = [];

    document.getElementById("btn1").classList.remove("active");
    document.getElementById("btn2").classList.remove("active");
    document.getElementById("btn3").classList.remove("active");

    // dan juiste knop activeren
    if (set === "set1") {    
        images.sort(() => Math.random() - 0.5);
        document.getElementById("btn1").classList.add("active");
    }
    
    if (set === "set2") {
        document.getElementById("btn2").classList.add("active");
    }
    
    if (set === "set3") {
        document.getElementById("btn3").classList.add("active");
    }

    if (set === "set1") {
    
        images = [
            { src: "./img/p1-1.jpg", country: "🇮🇹 Dolomites, Italy" },
            { src: "./img/p1-5.jpg", country: "🇮🇹 Dolomites, Italy" },
            { src: "./img/p1-6.jpg", country: "🇮🇹 Dolomites, Italy" },
            { src: "./img/p1-7.jpg", country: "🇮🇹 Dolomites, Italy" },
            { src: "./img/p1-10.jpg", country: "🇮🇹 Dolomites, Italy" },
            { src: "./img/p1-12.jpg", country: "🇮🇹 Dolomites, Italy" },
            { src: "./img/p1-13.jpg", country: "🇮🇹 Dolomites, Italy" },
            { src: "./img/p1-14.jpg", country: "🇮🇹 Dolomites, Italy" },
            { src: "./img/p1-15.jpg", country: "🇮🇹 Dolomites, Italy" },
            { src: "./img/p1-17.jpg", country: "🇮🇹 Dolomites, Italy" },
            { src: "./img/p1-22.jpg", country: "🇮🇹 Dolomites, Italy" },
            { src: "./img/p1-23.jpg", country: "🇮🇹 Dolomites, Italy" },
            { src: "./img/p1-25.jpg", country: "🇮🇹 Dolomites, Italy" },
            { src: "./img/p1-26.jpg", country: "🇮🇹 Dolomites, Italy" },
            { src: "./img/p1-27.jpg", country: "🇮🇹 Dolomites, Italy" },
            { src: "./img/p1-28.jpg", country: "🇮🇹 Dolomites, Italy" },
            { src: "./img/p1-29.jpg", country: "🇮🇹 Dolomites, Italy" },
            { src: "./img/p1-31.jpg", country: "🇮🇹 Dolomites, Italy" },
            { src: "./img/p1-32.jpg", country: "🇮🇹 Dolomites, Italy" },
            { src: "./img/p1-35.jpg", country: "🇮🇹 Dolomites, Italy" },
            { src: "./img/p1-36.jpg", country: "🇮🇹 Dolomites, Italy" },
            { src: "./img/p1-37.jpg", country: "🇮🇹 Dolomites, Italy" },
            { src: "./img/p1-39.jpg", country: "🇮🇹 Dolomites, Italy" },
            { src: "./img/p1-41.jpg", country: "🇮🇹 Dolomites, Italy" },
            { src: "./img/p1-42.jpg", country: "🇮🇹 Dolomites, Italy" },
            { src: "./img/p1-43.jpg", country: "🇮🇹 Dolomites, Italy" },
            { src: "./img/p1-46.jpg", country: "🇮🇹 Dolomites, Italy" },
            { src: "./img/p1-47.jpg", country: "🇮🇹 Dolomites, Italy" },
            { src: "./img/p1-51.jpg", country: "🇮🇹 Dolomites, Italy" },
            { src: "./img/p1-56.jpg", country: "🇮🇹 Dolomites, Italy" },
            { src: "./img/p1-59.jpg", country: "🇮🇹 Dolomites, Italy" },
            { src: "./img/p1-61.jpg", country: "🇮🇹 Dolomites, Italy" }
        ];
    
    }

    if (set === "set2") {
    images = [];

    for (let i = 1; i <= 106; i++) {
        images.push(`./img/p2_${i}.jpg`);
    }
    }

    if (set === "set3") {
        images = [
            "./img/p3-1.jpg",
            "./img/p3-2.jpg",
            "./img/p3-3.jpg",
            "./img/p3-4.jpg"
        ];
    }

    // Leeg gallery
    gallery.innerHTML = "";

    // Voeg alle images toe
    
    images.forEach(item => {

    const src = typeof item === "string" ? item : item.src;
    const country = typeof item === "string" ? null : item.country;

    const wrapper = document.createElement("div");
    wrapper.classList.add("image-card");

    const img = document.createElement("img");
    img.src = src;

    img.onerror = function () {
        this.style.display = "none";
    };

    img.onclick = function () {
        openLightbox(src);
    };

    wrapper.appendChild(img);

    if (country) {
        const label = document.createElement("div");
        label.classList.add("label");
        label.innerText = country;
        wrapper.appendChild(label);
    }

    gallery.appendChild(wrapper);
});
}

/* LIGHTBOX */

function openLightbox(src) {
    const lightbox = document.getElementById("lightbox");
    const img = document.getElementById("lightbox-img");

    img.src = src;
    lightbox.style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Optioneel: laad standaard set bij openen
changeImages("set1");
