document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                this.parentNode.style.backgroundColor = '#d4edda';
            } else {
                this.parentNode.style.backgroundColor = '#fff';
            }
        });
    });
});