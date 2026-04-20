function changeImages(set) {
    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");
    const img3 = document.getElementById("img3");

    if (set === "set1") {
        img1.src = "p1-1.jpg";
        img2.src = "p1-2.jpg";
        img3.src = "p1-3.jpg";
    }

    if (set === "set2") {
        img1.src = "p2-1.jpg";
        img2.src = "p2-2.jpg";
        img3.src = "p2-3.jpg";
    }

    if (set === "set3") {
        img1.src = "p3-1.jpg";
        img2.src = "p3-2.jpg";
        img3.src = "p3-3.jpg";
    }
}
