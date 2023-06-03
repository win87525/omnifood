const allLinks = document.querySelectorAll('a:link');
allLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        // console.log(e);
        e.preventDefault();
        const href = link.getAttribute("href")
        // console.log(href);
        if(href==='#')window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    })
})