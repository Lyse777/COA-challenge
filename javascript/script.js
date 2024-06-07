document.addEventListener('DOMContentLoaded', () => {
    const captions = document.querySelectorAll('.gallery-item .caption');
    
    captions.forEach(caption => {
        caption.style.transform = 'translateY(0)';
    });
});
