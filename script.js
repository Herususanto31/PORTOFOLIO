// Menunggu hingga halaman sepenuhnya dimuat
document.addEventListener('DOMContentLoaded', function () {
    // Menangani klik pada tombol Download CV
    const downloadButton = document.querySelector('.learn-more');
    
    downloadButton.addEventListener('click', function (event) {
        event.preventDefault(); // Mencegah default behavior (misalnya navigasi ke anchor link)

        // Langsung mengunduh file CV
        window.location.href = 'CV/CV HERU SUSANTO.pdf'; // Ganti dengan path yang sesuai
    });
});
