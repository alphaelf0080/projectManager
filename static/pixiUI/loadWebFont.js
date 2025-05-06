window.WebFontConfig = {
    google: {
        families: ['Snippet', 'Arvo:300', 'Podkova:300', 'Nunito:300','Noto Sans TC','cwTeXFangSong','cwTeXYen','cwTeXKai','cwTeXMing'], //cwTeXFangSong 仿宋，cwTeXYen  圓體字體，cwTeXKai 楷體字體，Noto Sans TC 思源黑體， cwTeXMing 明體字體
    },

   // active() {
   //     init();
   // },
};


(function() {
    console.log('text style________________________________')
    const wf = document.createElement('script');
    wf.src = `${document.location.protocol === 'https:' ? 'https' : 'http'
    }://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js`;
    wf.type = 'text/javascript';
    wf.async = 'true';
    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
}());


