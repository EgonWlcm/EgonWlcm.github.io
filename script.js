function changeImages(set) {
    const gallery = document.getElementById("gallery");

    let images = [];

    if (set === "set1") {
            images = [
                "p1-1.jpg",
                "p1-2.jpg",
                "p1-3.jpg",
                "p1-4.jpg",
                "p1-5.jpg",
                "p1-6.jpg",
                "p1-7.jpg",
                "p1-8.jpg",
                "p1-9.jpg",
                "p1-10.jpg",
                "p1-11.jpg",
                "p1-12.jpg",
                "p1-13.jpg",
                "p1-14.jpg",
                "p1-15.jpg",
                "p1-16.jpg",
                "p1-17.jpg",
                "p1-18.jpg",
                "p1-19.jpg",
                "p1-20.jpg",
                "p1-21.jpg",
                "p1-22.jpg",
                "p1-23.jpg",
                "p1-24.jpg",
                "p1-25.jpg",
                "p1-26.jpg",
                "p1-27.jpg",
                "p1-28.jpg",
                "p1-29.jpg",
                "p1-30.jpg",
                "p1-31.jpg",
                "p1-32.jpg",
                "p1-33.jpg",
                "p1-34.jpg",
                "p1-35.jpg",
                "p1-36.jpg",
                "p1-37.jpg",
                "p1-38.jpg",
                "p1-39.jpg",
                "p1-40.jpg",
                "p1-41.jpg",
                "p1-42.jpg",
                "p1-43.jpg",
                "p1-44.jpg",
                "p1-45.jpg",
                "p1-46.jpg",
                "p1-47.jpg",
                "p1-48.jpg",
                "p1-49.jpg",
                "p1-50.jpg",
                "p1-51.jpg",
                "p1-52.jpg",
                "p1-53.jpg",
                "p1-54.jpg",
                "p1-55.jpg",
                "p1-56.jpg",
                "p1-57.jpg",
                "p1-58.jpg",
                "p1-59.jpg",
                "p1-60.jpg",
                "p1-61.jpg"
        ];
    }

    if (set === "set2") {
        images = [
            "p2-1.jpg",
            "p2-2.jpg",
            "p2-3.jpg",
            "p2-4.jpg"
        ];
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
