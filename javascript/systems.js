let level = 0;

function adjustLevel(change) {
    level += change;
    if (level < 0) level = 0;
    if (level > 100) level = 100;

    document.getElementById("dynamicFill").style.width = level + "%";
}
