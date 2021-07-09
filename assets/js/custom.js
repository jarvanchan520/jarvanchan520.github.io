
/*$(window).on("load",function(){
    $(".hero-icons").addClass("init-animation");
});*/

$(document).ready(function(){

    // WOW JS
    new WOW().init();
    
    $('#root').hide();

    //Add Class
    const sections = document.querySelectorAll('.section');

    sections.forEach((section, index) => {
        gsap.to(section, {autoAlpha: 1,
            scrollTrigger: {
                trigger: section,
                start: 'top bottom-=100',
                toggleActions: 'play none none reverse',
                // markers: true
            }
        });

        ScrollTrigger.create({
            trigger: section,
            id: index+1,
            start: 'top center',
            end: () => `+=${section.clientHeight + 30}`,
            toggleActions: 'play reverse none reverse',
            toggleClass: {targets: section, className: "init-animation"},
            // markers: true
        });
    });


});


function icons(){
    let jsondata;    
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=black-kishu-inu&vs_currencies=usd').then(
            function(u){ return u.json();}
          ).then(
            function(data){
              jsondata = data;
              document.getElementById("price").innerHTML = data['black-kishu-inu']['usd'];
              marketCap = data['black-kishu-inu']['usd'] * 1000000000000;
              var removeDecimals = Math.trunc(marketCap)
              document.getElementById("mc").innerHTML = '$' + removeDecimals;
              console.log(data)
            }
          )
}



function CopyToClipboard(id){

    var r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    document.getElementById("confirm").innerHTML = "<b>Address Copied!</b>";
}