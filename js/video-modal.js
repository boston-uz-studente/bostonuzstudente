document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('video').pause();
    document.getElementById('video-modal').classList.add('hidden');
});

document.querySelectorAll('[data-modal]').forEach(modal => {
    modal.addEventListener('click', function() {
        document.getElementById(modal.dataset.modal).classList.remove('hidden');
        document.getElementById('video').play();
    });
});

document.getElementById('video-modal').addEventListener('click', function(e) {
    if (e.target.id === 'video-bg') {
        document.getElementById('video-modal').classList.add('hidden');
        document.getElementById('video').pause();
    }
});