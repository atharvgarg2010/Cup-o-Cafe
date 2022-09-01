let navbar = document.querySelector(".navbar");
let search2 = document.querySelector(".search");
let bars = document.querySelector(".bars");
let cross = document.querySelector(".cross");
let tabs = document.querySelector(".a");
let tabs1 = document.querySelector(".ab");
let tabs2 = document.querySelector(".abc");
let tabs3 = document.querySelector(".abcd");
let tabs4 = document.querySelector(".abcde");
// let tabs5 = document.querySelector(".abcdef");
let tabs6 = document.querySelector(".abcdefg");
let tabs7 = document.querySelector(".abcdefgh");
// let tabs6 = document.querySelector(".abcdefg");
let logo2 = document.querySelector(".logo");



function menu() {
    // navbar.style="left:0px;"
    navbar.classList.toggle("activate")
    
    bars.classList.toggle("fa-bars")
    bars.classList.toggle("fa-times")
    // console.log(navbar);
}
window.addEventListener('scroll',(event) => {
    if (document.body.scrollTop > 585 || document.documentElement.scrollTop > 585) {
        console.log('Scrolling...');
        tabs.style = "color:black;"
        tabs1.style = "color:black; display:inline-block;"
        tabs2.style = "color:black; display:inline-block;"
        tabs3.style = "color:black; display:inline-block;"
        tabs4.style = "color:black; display:inline-block;"
      //   tabs5.style = "color:black; display:inline-block;"
        tabs6.style = "color:black; display:inline-block;"
        tabs7.style = "color:black; display:inline-block;"
        // tabs6.style = "color:black; display:inline-block;"
        // document.getElementById("myP").className = "test";
        console.log(logo2);
        logo2.innerHTML=`<svg width="80.99999999999997" height="81.4000005722046" viewBox="0 0 199.99999999999997 141.4000005722046" class="css-1j8o68f"><defs id="SvgjsDefs2594"></defs><g id="SvgjsG2595" featurekey="symbolFeature-0" transform="matrix(1.0771676486792467,0,0,1.0771676486792467,46.01447887807309,-17.234681351600827)" fill="#f0b40e"><switch xmlns="http://www.w3.org/2000/svg"><foreignObject requiredExtensions="http://ns.adobe.com/AdobeIllustrator/10.0/" x="0" y="0" width="1" height="1"></foreignObject><g xmlns:i="http://ns.adobe.com/AdobeIllustrator/10.0/" i:extraneous="self"><g><path d="M46,35.6c-11.1,0-32.1-2-32.1-9.8c0-7.7,21-9.8,32.1-9.8s32.1,2,32.1,9.8C78.2,33.6,57.1,35.6,46,35.6z M46,20.1     c-18.3,0-28.1,4.1-28.1,5.8s9.9,5.8,28.1,5.8c18.3,0,28.1-4.1,28.1-5.8S64.3,20.1,46,20.1z"></path></g><g><path d="M63.3,29c-4-0.8-9.7-1.5-17.3-1.5c-7.6,0-13.2,0.7-17.3,1.5c4.2,0.8,9.9,1.4,17.3,1.4S59,29.8,63.3,29z"></path><path d="M46,36.9c-2.1,0-14.6-0.1-23.7-2.8c2,7.6,8.5,26.9,23.7,27.3c15.2-0.5,21.7-19.8,23.6-27.3C60.6,36.7,48.2,36.9,46,36.9z     "></path></g><g><path d="M46.7,83.9c-20.9,0-43-5.1-43-14.6c0-5.7,8.1-10.4,22.1-12.9c0.1,0,0.2,0,0.4,0h0.4c0.6,0,1.2,0.3,1.6,0.8     c5,6.3,11,9.6,17.9,9.8c22.3-0.6,28.1-33.2,28.2-33.6c0.2-1,1-1.7,2-1.7h18.2c0.6,0,1.2,0.3,1.6,0.8s0.5,1.1,0.4,1.7     c-0.2,1-6.2,24.4-24.8,25.8c-1.1,0.1-2.1-0.7-2.1-1.8c-0.1-1.1,0.7-2.1,1.8-2.1C83.6,55,89.6,41.3,91.6,35.6H77.8     c-1.6,7.2-9.1,34.6-31.7,35.2c0,0-0.1,0-0.1,0c-7.8-0.2-14.7-3.7-20.3-10.4c-12.4,2.3-18,6.2-18,8.8c0,4.4,14.8,10.6,39,10.6     s39-6.2,39-10.6c0-1.1,0.9-2,2-2s2,0.9,2,2C89.7,78.8,67.5,83.9,46.7,83.9z"></path></g></g></switch></g><g id="SvgjsG2596" featurekey="nameFeature-0" transform="matrix(0.6434012931839773,0,0,0.6434012931839773,-1.4669547766527875,85.53654475362775)" fill="#000000"><path d="M2.28 26 c0 -8.08 6.36 -14.4 14.36 -14.4 c3.36 0 6.56 1.12 9.4 3.28 l-1.8 2.8 c-2.36 -1.8 -4.8 -2.68 -7.6 -2.68 c-6.04 0 -10.76 4.84 -10.76 11 s4.76 11 10.76 11 c3.04 0 5.64 -0.96 7.6 -2.84 l1.84 2.76 c-2.44 2.2 -5.88 3.48 -9.44 3.48 c-8 0 -14.36 -6.36 -14.36 -14.4 z M39.952 28.92 l0 -16.92 l3.6 0 l0 16.64 c0 5.4 3.12 8.16 7.52 8.16 s7.56 -2.76 7.56 -8.16 l0 -16.64 l3.56 0 l0 16.92 c0 7.28 -4.16 11.48 -11.12 11.48 c-6.92 0 -11.12 -4.2 -11.12 -11.48 z M88.26400000000001 12 c6.56 0 9.64 4.96 9.64 10.2 s-3.08 10.2 -9.64 10.2 l-7 0 l0 7.6 l-3.6 0 l0 -28 l10.6 0 z M88.10400000000001 28.96 c3.68 0 6.12 -2.84 6.12 -6.76 s-2.44 -6.76 -6.12 -6.76 l-6.84 0 l0 13.52 l6.84 0 z M111.536 12 l2.6 0 l0 8.36 l-2.6 0 l0 -8.36 z M142.168 40.4 c-8 0 -14.36 -6.4 -14.36 -14.4 s6.36 -14.4 14.36 -14.4 s14.36 6.4 14.36 14.4 s-6.36 14.4 -14.36 14.4 z M142.168 36.96 c6.08 0 10.64 -4.76 10.64 -10.96 s-4.56 -10.96 -10.64 -10.96 c-6.12 0 -10.68 4.76 -10.68 10.96 s4.56 10.96 10.68 10.96 z M192.672 26 c0 -8.08 6.36 -14.4 14.36 -14.4 c3.36 0 6.56 1.12 9.4 3.28 l-1.8 2.8 c-2.36 -1.8 -4.8 -2.68 -7.6 -2.68 c-6.04 0 -10.76 4.84 -10.76 11 s4.76 11 10.76 11 c3.04 0 5.64 -0.96 7.6 -2.84 l1.84 2.76 c-2.44 2.2 -5.88 3.48 -9.44 3.48 c-8 0 -14.36 -6.36 -14.36 -14.4 z M249.024 40 l-2.44 -5.68 l-12.48 0 l-2.44 5.68 l-3.84 0 l12.32 -28.4 l0.4 0 l12.32 28.4 l-3.84 0 z M235.54399999999998 30.96 l9.6 0 l-4.8 -11.08 z M269.416 15.440000000000001 l0 8.64 l8.56 0 l0 3.44 l-8.56 0 l0 12.48 l-3.6 0 l0 -28 l15.92 0 l0.24 3.44 l-12.56 0 z M312.888 36.56 l0.24 3.44 l-17.04 0 l0 -28 l16.24 0 l0.28 3.44 l-12.92 0 l0 6.84 l8.76 0 l0 3.44 l-8.76 0 l0 10.84 l13.2 0 z"></path></g><g id="SvgjsG2597" featurekey="sloganFeature-0" transform="matrix(1,0,0,1,36.30000019073486,121.19999980926514)" fill="#000000"><path d="M9.3 11.16 c1.76 0.64 2.78 2.24 2.78 4.28 c0 2.38 -1.18 4.48 -5 4.56 l-5.38 0 l0 -14 l5.6 0 c2.46 0 3.14 1.8 3.14 2.94 c0 1 -0.6 1.8 -1.14 2.22 z M7.08 7.619999999999999 l-3.58 0 l0 3.12 l3.2 0 c1.42 0 1.98 -0.72 1.98 -1.58 c0 -0.62 -0.4 -1.54 -1.6 -1.54 z M6.92 18.28 c2.32 0 3.32 -1.16 3.32 -2.84 c0 -1.88 -1.04 -3.2 -3.28 -3.2 l-3.46 0 l0 6.04 l3.42 0 z M23.060000000000002 18.28 l0.12 1.72 l-8.52 0 l0 -14 l8.12 0 l0.14 1.72 l-6.46 0 l0 3.42 l4.38 0 l0 1.72 l-4.38 0 l0 5.42 l6.6 0 z M25.000000000000004 18.54 c0.88 0.82 2.7 1.66 4.52 1.66 c2.8 0 4.58 -1.44 4.58 -3.7 c0 -1.84 -0.88 -2.92 -3.92 -4.64 c-2.32 -1.34 -2.88 -1.78 -2.88 -2.66 c0 -0.94 0.88 -1.68 2.36 -1.68 c0.86 0 2 0.38 2.66 0.8 l0.96 -1.44 c-0.94 -0.62 -2.42 -1.08 -3.6 -1.08 c-2.58 0 -4.3 1.48 -4.3 3.42 c0 1.72 0.86 2.58 3.5 4.02 c2.34 1.28 3.3 2.22 3.3 3.24 c0 1.2 -1.04 1.92 -2.66 1.92 c-1.4 0 -2.8 -0.66 -3.5 -1.3 z M45.44 7.720000000000001 l-4.08 0 l0 12.28 l-1.8 0 l0 -12.28 l-4.1 0 l0.12 -1.72 l9.74 0 z M53.900000000000006 13 c0 -4.04 3.18 -7.2 7.18 -7.2 c1.68 0 3.28 0.56 4.7 1.64 l-0.9 1.4 c-1.18 -0.9 -2.4 -1.34 -3.8 -1.34 c-3.02 0 -5.38 2.42 -5.38 5.5 s2.38 5.5 5.38 5.5 c1.52 0 2.82 -0.48 3.8 -1.42 l0.92 1.38 c-1.22 1.1 -2.94 1.74 -4.72 1.74 c-4 0 -7.18 -3.18 -7.18 -7.2 z M75.02000000000001 20.2 c-4 0 -7.18 -3.2 -7.18 -7.2 s3.18 -7.2 7.18 -7.2 s7.18 3.2 7.18 7.2 s-3.18 7.2 -7.18 7.2 z M75.02000000000001 18.48 c3.04 0 5.32 -2.38 5.32 -5.48 s-2.28 -5.48 -5.32 -5.48 c-3.06 0 -5.34 2.38 -5.34 5.48 s2.28 5.48 5.34 5.48 z M86.84 7.720000000000001 l0 4.32 l4.28 0 l0 1.72 l-4.28 0 l0 6.24 l-1.8 0 l0 -14 l7.96 0 l0.12 1.72 l-6.28 0 z M97.5 7.720000000000001 l0 4.32 l4.28 0 l0 1.72 l-4.28 0 l0 6.24 l-1.8 0 l0 -14 l7.96 0 l0.12 1.72 l-6.28 0 z M114.75999999999999 18.28 l0.12 1.72 l-8.52 0 l0 -14 l8.12 0 l0.14 1.72 l-6.46 0 l0 3.42 l4.38 0 l0 1.72 l-4.38 0 l0 5.42 l6.6 0 z M125.88 18.28 l0.12 1.72 l-8.52 0 l0 -14 l8.12 0 l0.14 1.72 l-6.46 0 l0 3.42 l4.38 0 l0 1.72 l-4.38 0 l0 5.42 l6.6 0 z"></path></g></svg>`
    }
    else{
        tabs.style = "color:white;"
        tabs1.style = "color:white; display:inline-block;"
        tabs2.style = "color:white; display:inline-block;"
        tabs3.style = "color:white; display:inline-block;"
        tabs4.style = "color:white; display:inline-block;"
      //   tabs5.style = "color:white; display:inline-block;"
        tabs6.style = "color:white; display:inline-block;"
        tabs7.style = "color:white; display:inline-block;"
        // tabs6.style = "color:white; display:inline-block;"
        logo2.innerHTML=`<svg width="80.99999999999997" height="81.4000005722046" viewBox="0 0 199.99999999999997 141.4000005722046" class="css-1j8o68f"><defs id="SvgjsDefs2849"></defs><g id="SvgjsG2850" featurekey="symbolFeature-0" transform="matrix(1.0771676486792467,0,0,1.0771676486792467,46.01447887807309,-17.234681351600827)" fill="#f0b40e"><switch xmlns="http://www.w3.org/2000/svg"><foreignObject requiredExtensions="http://ns.adobe.com/AdobeIllustrator/10.0/" x="0" y="0" width="1" height="1"></foreignObject><g xmlns:i="http://ns.adobe.com/AdobeIllustrator/10.0/" i:extraneous="self"><g><path d="M46,35.6c-11.1,0-32.1-2-32.1-9.8c0-7.7,21-9.8,32.1-9.8s32.1,2,32.1,9.8C78.2,33.6,57.1,35.6,46,35.6z M46,20.1     c-18.3,0-28.1,4.1-28.1,5.8s9.9,5.8,28.1,5.8c18.3,0,28.1-4.1,28.1-5.8S64.3,20.1,46,20.1z"></path></g><g><path d="M63.3,29c-4-0.8-9.7-1.5-17.3-1.5c-7.6,0-13.2,0.7-17.3,1.5c4.2,0.8,9.9,1.4,17.3,1.4S59,29.8,63.3,29z"></path><path d="M46,36.9c-2.1,0-14.6-0.1-23.7-2.8c2,7.6,8.5,26.9,23.7,27.3c15.2-0.5,21.7-19.8,23.6-27.3C60.6,36.7,48.2,36.9,46,36.9z     "></path></g><g><path d="M46.7,83.9c-20.9,0-43-5.1-43-14.6c0-5.7,8.1-10.4,22.1-12.9c0.1,0,0.2,0,0.4,0h0.4c0.6,0,1.2,0.3,1.6,0.8     c5,6.3,11,9.6,17.9,9.8c22.3-0.6,28.1-33.2,28.2-33.6c0.2-1,1-1.7,2-1.7h18.2c0.6,0,1.2,0.3,1.6,0.8s0.5,1.1,0.4,1.7     c-0.2,1-6.2,24.4-24.8,25.8c-1.1,0.1-2.1-0.7-2.1-1.8c-0.1-1.1,0.7-2.1,1.8-2.1C83.6,55,89.6,41.3,91.6,35.6H77.8     c-1.6,7.2-9.1,34.6-31.7,35.2c0,0-0.1,0-0.1,0c-7.8-0.2-14.7-3.7-20.3-10.4c-12.4,2.3-18,6.2-18,8.8c0,4.4,14.8,10.6,39,10.6     s39-6.2,39-10.6c0-1.1,0.9-2,2-2s2,0.9,2,2C89.7,78.8,67.5,83.9,46.7,83.9z"></path></g></g></switch></g><g id="SvgjsG2851" featurekey="nameFeature-0" transform="matrix(0.6434012931839773,0,0,0.6434012931839773,-1.4669547766527875,85.53654475362775)" fill="#ffffff"><path d="M2.28 26 c0 -8.08 6.36 -14.4 14.36 -14.4 c3.36 0 6.56 1.12 9.4 3.28 l-1.8 2.8 c-2.36 -1.8 -4.8 -2.68 -7.6 -2.68 c-6.04 0 -10.76 4.84 -10.76 11 s4.76 11 10.76 11 c3.04 0 5.64 -0.96 7.6 -2.84 l1.84 2.76 c-2.44 2.2 -5.88 3.48 -9.44 3.48 c-8 0 -14.36 -6.36 -14.36 -14.4 z M39.952 28.92 l0 -16.92 l3.6 0 l0 16.64 c0 5.4 3.12 8.16 7.52 8.16 s7.56 -2.76 7.56 -8.16 l0 -16.64 l3.56 0 l0 16.92 c0 7.28 -4.16 11.48 -11.12 11.48 c-6.92 0 -11.12 -4.2 -11.12 -11.48 z M88.26400000000001 12 c6.56 0 9.64 4.96 9.64 10.2 s-3.08 10.2 -9.64 10.2 l-7 0 l0 7.6 l-3.6 0 l0 -28 l10.6 0 z M88.10400000000001 28.96 c3.68 0 6.12 -2.84 6.12 -6.76 s-2.44 -6.76 -6.12 -6.76 l-6.84 0 l0 13.52 l6.84 0 z M111.536 12 l2.6 0 l0 8.36 l-2.6 0 l0 -8.36 z M142.168 40.4 c-8 0 -14.36 -6.4 -14.36 -14.4 s6.36 -14.4 14.36 -14.4 s14.36 6.4 14.36 14.4 s-6.36 14.4 -14.36 14.4 z M142.168 36.96 c6.08 0 10.64 -4.76 10.64 -10.96 s-4.56 -10.96 -10.64 -10.96 c-6.12 0 -10.68 4.76 -10.68 10.96 s4.56 10.96 10.68 10.96 z M192.672 26 c0 -8.08 6.36 -14.4 14.36 -14.4 c3.36 0 6.56 1.12 9.4 3.28 l-1.8 2.8 c-2.36 -1.8 -4.8 -2.68 -7.6 -2.68 c-6.04 0 -10.76 4.84 -10.76 11 s4.76 11 10.76 11 c3.04 0 5.64 -0.96 7.6 -2.84 l1.84 2.76 c-2.44 2.2 -5.88 3.48 -9.44 3.48 c-8 0 -14.36 -6.36 -14.36 -14.4 z M249.024 40 l-2.44 -5.68 l-12.48 0 l-2.44 5.68 l-3.84 0 l12.32 -28.4 l0.4 0 l12.32 28.4 l-3.84 0 z M235.54399999999998 30.96 l9.6 0 l-4.8 -11.08 z M269.416 15.440000000000001 l0 8.64 l8.56 0 l0 3.44 l-8.56 0 l0 12.48 l-3.6 0 l0 -28 l15.92 0 l0.24 3.44 l-12.56 0 z M312.888 36.56 l0.24 3.44 l-17.04 0 l0 -28 l16.24 0 l0.28 3.44 l-12.92 0 l0 6.84 l8.76 0 l0 3.44 l-8.76 0 l0 10.84 l13.2 0 z"></path></g><g id="SvgjsG2852" featurekey="sloganFeature-0" transform="matrix(1,0,0,1,36.30000019073486,121.19999980926514)" fill="#ffffff"><path d="M9.3 11.16 c1.76 0.64 2.78 2.24 2.78 4.28 c0 2.38 -1.18 4.48 -5 4.56 l-5.38 0 l0 -14 l5.6 0 c2.46 0 3.14 1.8 3.14 2.94 c0 1 -0.6 1.8 -1.14 2.22 z M7.08 7.619999999999999 l-3.58 0 l0 3.12 l3.2 0 c1.42 0 1.98 -0.72 1.98 -1.58 c0 -0.62 -0.4 -1.54 -1.6 -1.54 z M6.92 18.28 c2.32 0 3.32 -1.16 3.32 -2.84 c0 -1.88 -1.04 -3.2 -3.28 -3.2 l-3.46 0 l0 6.04 l3.42 0 z M23.060000000000002 18.28 l0.12 1.72 l-8.52 0 l0 -14 l8.12 0 l0.14 1.72 l-6.46 0 l0 3.42 l4.38 0 l0 1.72 l-4.38 0 l0 5.42 l6.6 0 z M25.000000000000004 18.54 c0.88 0.82 2.7 1.66 4.52 1.66 c2.8 0 4.58 -1.44 4.58 -3.7 c0 -1.84 -0.88 -2.92 -3.92 -4.64 c-2.32 -1.34 -2.88 -1.78 -2.88 -2.66 c0 -0.94 0.88 -1.68 2.36 -1.68 c0.86 0 2 0.38 2.66 0.8 l0.96 -1.44 c-0.94 -0.62 -2.42 -1.08 -3.6 -1.08 c-2.58 0 -4.3 1.48 -4.3 3.42 c0 1.72 0.86 2.58 3.5 4.02 c2.34 1.28 3.3 2.22 3.3 3.24 c0 1.2 -1.04 1.92 -2.66 1.92 c-1.4 0 -2.8 -0.66 -3.5 -1.3 z M45.44 7.720000000000001 l-4.08 0 l0 12.28 l-1.8 0 l0 -12.28 l-4.1 0 l0.12 -1.72 l9.74 0 z M53.900000000000006 13 c0 -4.04 3.18 -7.2 7.18 -7.2 c1.68 0 3.28 0.56 4.7 1.64 l-0.9 1.4 c-1.18 -0.9 -2.4 -1.34 -3.8 -1.34 c-3.02 0 -5.38 2.42 -5.38 5.5 s2.38 5.5 5.38 5.5 c1.52 0 2.82 -0.48 3.8 -1.42 l0.92 1.38 c-1.22 1.1 -2.94 1.74 -4.72 1.74 c-4 0 -7.18 -3.18 -7.18 -7.2 z M75.02000000000001 20.2 c-4 0 -7.18 -3.2 -7.18 -7.2 s3.18 -7.2 7.18 -7.2 s7.18 3.2 7.18 7.2 s-3.18 7.2 -7.18 7.2 z M75.02000000000001 18.48 c3.04 0 5.32 -2.38 5.32 -5.48 s-2.28 -5.48 -5.32 -5.48 c-3.06 0 -5.34 2.38 -5.34 5.48 s2.28 5.48 5.34 5.48 z M86.84 7.720000000000001 l0 4.32 l4.28 0 l0 1.72 l-4.28 0 l0 6.24 l-1.8 0 l0 -14 l7.96 0 l0.12 1.72 l-6.28 0 z M97.5 7.720000000000001 l0 4.32 l4.28 0 l0 1.72 l-4.28 0 l0 6.24 l-1.8 0 l0 -14 l7.96 0 l0.12 1.72 l-6.28 0 z M114.75999999999999 18.28 l0.12 1.72 l-8.52 0 l0 -14 l8.12 0 l0.14 1.72 l-6.46 0 l0 3.42 l4.38 0 l0 1.72 l-4.38 0 l0 5.42 l6.6 0 z M125.88 18.28 l0.12 1.72 l-8.52 0 l0 -14 l8.12 0 l0.14 1.72 l-6.46 0 l0 3.42 l4.38 0 l0 1.72 l-4.38 0 l0 5.42 l6.6 0 z"></path></g></svg>`

    }
});



document.getElementById("start").onclick = ()=>{
    // search2.style="top:0px;";
    search2.classList.add("active")
}
document.getElementById("close").onclick = ()=>{
    // search2.style="top:-10000px;"
    search2.classList.remove("active")

    console.log("df");
}

// console.log(document.querySelectorAll(".slide")[1]);

//     // console.log(navbar);

let previewContainer = document.querySelector('.food-preview-container');
let previewBox = previewContainer.querySelectorAll('.food-preview');

document.querySelectorAll('.food .slide').forEach(food =>{
   food.onclick = () =>{
      previewContainer.style.left="0px"
      let name = food.getAttribute('data-name');
      previewBox.forEach(preveiw =>{
         let target = preveiw.getAttribute('data-target');
         if(name == target){
            preveiw.classList.add('active');
         }
      });
   };
});

previewContainer.querySelector('#close-preview').onclick = () =>{
   previewContainer.style.left="10000px";
   previewBox.forEach(close =>{
      close.classList.remove('active');
   });
};
let previewContainer2 = document.querySelector('.bev-preview-container');
let previewBox2 = previewContainer2.querySelectorAll('.preview-bev');

document.querySelectorAll('.bev .slide').forEach(bev =>{
   bev.onclick = () =>{
      previewContainer2.style.left="0px"
      let name = bev.getAttribute('data-name');
      console.log(name);
      previewBox2.forEach(preveiw2 =>{
         let target = preveiw2.getAttribute('data-target2');
         if(name == target){
            preveiw2.classList.add('activa');
         }
         
      });
   };
});

previewContainer2.querySelector('.acros').onclick = () =>{
   previewContainer2.style.left="1500px";
   previewBox2.forEach(close =>{
      close.classList.remove('activa');
   });
};

function fullmenu1() {
   document.querySelector('.fullmenu').style = "right:0px;"
}
function fullmenu() {
   document.querySelector('.fullmenu').style = "right:2000px;"
   // console.log("a");
}


