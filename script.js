function changeImages(set) {
    const gallery = document.getElementById("gallery");

    let images = [];

    if (set === "set1") {
        images = [
            "p1-1.jpg",
            "p1-2.jpg",
            "p1-3.jpg",
            "p1-4.jpg"
        ];
    }

    if (set === "set2") {
        images = [
            "p2-1.jpg",
            "p2-2.jpg"
        ];
    }

    if (set === "set3") {
        images = [
            "p3-1.jpg",
            "p3-2.jpg",
            "p3-3.jpg",
            "p3-4.jpg",
            "p3-5.jpg"
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
