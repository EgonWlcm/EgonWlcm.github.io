function changeImages(set) {
    const gallery = document.getElementById("gallery");

    let images = [];

    if (set === "set1") {
    images = [];

    for (let i = 1; i <= 61; i++) {
        images.push(`p1-${i}.jpg`);
    }
    }

    if (set === "set2") {
    images = [];

    for (let i = 1; i <= 106; i++) {
        images.push(`p1-${i}.jpg`);
    }
    }

    if (set === "set3") {
        images = [
            "p3-1.jpg",
            "p3-2.jpg",
            "p3-3.jpg",
            "p3-4.jpg"
        ];
    }

    // Leeg gallery
    gallery.innerHTML = "";

    // Voeg alle images toe
    images.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        gallery.appendChild(img);
    });
}

// Optioneel: laad standaard set bij openen
changeImages("set1");
