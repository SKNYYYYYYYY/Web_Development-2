document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('transaction-form');
    const recurringCheckbox = document.getElementById('recurring');
    const recurringOptions = document.getElementById('recurring-options');
    const fileUploadArea = document.getElementById('file-upload-area');
    const fileInput = document.getElementById('receipt');
    const successMessage = document.getElementById('success-message');

    recurringCheckbox.addEventListener('change', function() {
        recurringOptions.style.display = this.checked ? 'block' : 'none';
    });

    fileUploadArea.addEventListener('click', function() {
        fileInput.click();
    });

    fileUploadArea.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.style.borderColor = '#3498db';
    });

    fileUploadArea.addEventListener('dragleave', function(e) {
        e.preventDefault();
        this.style.borderColor = '#ddd';
    });

    fileUploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        this.style.borderColor = '#ddd';
        if (e.dataTransfer.files.length) {
            fileInput.files = e.dataTransfer.files;
            updateFileName(e.dataTransfer.files[0].name);
        }
    });

    fileInput.addEventListener('change', function() {
        if (this.files.length) {
            updateFileName(this.files[0].name);
        }
    });

    function updateFileName(name) {
        const fileNameElement = fileUploadArea.querySelector('p');
        fileNameElement.textContent = name;
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        // For this example, we'll just show a success message
        successMessage.style.display = 'block';
        form.reset();
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);
    });
});
