const selectElement = function (element) {
    return document.querySelector(element);

};
let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click',function () {
    body.classList.toggle('open');
});

window.sr = scrollReveal();

sr.reveal('.animate-left', {
origin: 'left',
duration:100,
distance:'25rem',
delay:300
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration:100,
    distance:'25rem',
    delay:600
    });

sr.reveal('.animate-top', {
        origin: 'top',
        duration:100,
        distance:'25rem',
        delay:600
        });

 sr.reveal('.animate-bottom', {
            origin: 'bottom',
            duration:100,
            distance:'25rem',
            delay:600
            });

            const selectElement = function (element) {
                return document.querySelector(element);
            
            };
            let menuToggler = selectElement('.menu-toggle');
            let body = selectElement('body');
            
            menuToggler.addEventListener('click',function () {
                body.classList.toggle('open');
            });


            function myFunction() {
                document.getElementById("dropbtn").classList.toggle("show");
              }
              
              function filterFunction() {
                var input, filter, ul, li, a, i;
                input = document.getElementById("myInput");
                filter = input.value.toUpperCase();
                div = document.getElementById("dropbtn");
                a = div.getElementsByTagName("a");
                for (i = 0; i < a.length; i++) {
                  txtValue = a[i].textContent || a[i].innerText;
                  if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    a[i].style.display = "";
                  } else {
                    a[i].style.display = "none";
                  }
                }
              }
           

             
