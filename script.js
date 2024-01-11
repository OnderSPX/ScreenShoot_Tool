document.getElementById('screenshotBtn').addEventListener('click', function() {
    // Alınan ekran görüntüsünden, ekran görüntüsü butonunu gizleme
    this.classList.add('hidden');

    // Ekran görüntüsü alma
    html2canvas(document.documentElement, {
        scale: window.devicePixelRatio, // Cihazın piksel oranında yakalama
        logging: true, // Hata ayıklama için günlüğe kaydetmeyi etkinleştir
        useCORS: true, // Çapraz kökenli görüntüleri işlemek için CORS'u kullanın
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth,
    }).then(canvas =>{
        // Bir resim oluştur
        var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");

        // Resmi indirmek için bir bağlantı oluşturun
        var link = document.createElement('a');
        link.download = 'screenshot.png';
        link.href = image;
        link.click()

        // Butonu tekrar göster
        this.classList.remove('hidden');
    });

});