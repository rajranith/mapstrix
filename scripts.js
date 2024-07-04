document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded');

    function showOverlay(service) {
        const overlay = document.getElementById('overlay');
        const overlayTitle = document.getElementById('overlay-title');
        const overlayContent = document.getElementById('overlay-content');

        let title = '';
        let content = '';

        switch(service) {
            case 'geo-spatial-planning':
                title = 'Geo-spatial Planning';
                content = 'Information about Geo-spatial Planning...';
                break;
            case 'spatial-digitization':
                title = 'Spatial Digitization';
                content = 'Information about Spatial Digitization...';
                break;
            case 'spatial-surveys':
                title = 'Spatial Surveys';
                content = 'Information about Spatial Surveys...';
                break;
            case 'environment-impact-assessment':
                title = 'Environment Impact Assessment';
                content = 'Information about Environment Impact Assessment...';
                break;
            case 'msc-thesis-works':
                title = 'MSc Thesis Works';
                content = 'Information about MSc Thesis Works...';
                break;
            case 'phd-thesis-works':
                title = 'PhD Thesis Works';
                content = 'Information about PhD Thesis Works...';
                break;
            case 'internships':
                title = 'Internships';
                content = 'Information about Internships...';
                break;
            case 'qgis':
                title = 'QGIS';
                content = 'Information about QGIS...';
                break;
            case 'gee':
                title = 'GEE';
                content = 'Information about GEE...';
                break;
            case 'python-data-science':
                title = 'Python for Data Science and Spatial Analysis';
                content = 'Information about Python for Data Science and Spatial Analysis...';
                break;
            case 'r-data-science':
                title = 'R for Data Science and Spatial Analysis';
                content = 'Information about R for Data Science and Spatial Analysis...';
                break;
            default:
                title = 'Our Mission';
                content = 'At Mapstrix Technologies, we provide cutting-edge technology solutions to help with your geo-spatial needs.';
        }

        overlayTitle.innerText = title;
        overlayContent.innerText = content;
        overlay.style.display = 'flex';
    }

    document.querySelectorAll('.dropdown-content a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const service = event.target.getAttribute('data-service');
            showOverlay(service);
        });
    });

    const backButton = document.getElementById('back-button');
    if (backButton) {
        backButton.addEventListener('click', () => {
            window.location.href = 'index.html'; // Redirect to the home page
        });
    } else {
        console.error('Back to Home button not found');
    }
});