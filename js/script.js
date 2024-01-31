//

    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY || document.documentElement.scrollTop;
        var maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        var percentage = (scrollPosition / maxScroll) * 100;

        
        document.querySelector('.scroll-bar').style.width = percentage + '%';
    });
