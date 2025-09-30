document.addEventListener('DOMContentLoaded', () => {
    // Modal Functionality
    const modal = document.getElementById('attractionModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDetails = document.getElementById('modalDetails');
    const closeModal = document.querySelector('.modal-close');

    const attractionDetails = {
        'cathedral': {
            title: 'Exeter Cathedral',
            details: 'Just steps from Exeter Hotel, this magnificent medieval cathedral features stunning Gothic architecture, historic crypts, and the famous Exeter Cathedral Library. Perfect for history enthusiasts and those seeking a cultural experience.'
        },
        'underground': {
            title: 'Underground Passages',
            details: 'Discover the unique subterranean network of medieval passages beneath Exeter, a one-of-a-kind historical experience with guided tours revealing the city\'s hidden engineering marvels.'
        },
        'museum': {
            title: 'Royal Albert Memorial Museum',
            details: 'Located in Exeter\'s historic city centre, this renowned museum houses global artefacts, contemporary art, and exhibits on Exeter\'s cultural heritage, offering something for every visitor.'
        }
    };

    document.querySelectorAll('.details-btn').forEach(button => {
        button.addEventListener('click', () => {
            const attraction = button.getAttribute('data-attraction');
            modalTitle.textContent = attractionDetails[attraction].title;
            modalDetails.textContent = attractionDetails[attraction].details;
            modal.classList.add('active');
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Animation on Scroll
    const animatedElements = document.querySelectorAll('[data-animate]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    animatedElements.forEach(element => observer.observe(element));
});