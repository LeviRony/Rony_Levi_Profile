function reloadPageNoCache() {
    location.reload(true); // 'true' ensures cache is not used
}
const items = document.querySelectorAll('.scattered-item');
const container = document.getElementById('gridContainer');

items.forEach(item => {
    const randomTop = Math.random() * (container.offsetHeight - 150); // Random position within container height
    const randomLeft = Math.random() * (container.offsetWidth - 150); // Random position within container width
    item.style.top = `${randomTop}px`;
    item.style.left = `${randomLeft}px`;
});