
    const menuBtn = document.querySelector(".btn-menu");
    const navigation = document.querySelector(".navigate");

    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("active");
      navigation.classList.toggle("active");
    });

   
    const btns = document.querySelectorAll(".btn-navigate");
    const slides = document.querySelectorAll(".video-slide");
    const contents = document.querySelectorAll(".content");

    var sliderNav = function(manual){
      btns.forEach((btn) => {
        btn.classList.remove("active");
      });

      slides.forEach((slide) => {
        slide.classList.remove("active");
      });

      contents.forEach((content) => {
        content.classList.remove("active");
      });

      btns[manual].classList.add("active");
      slides[manual].classList.add("active");
      contents[manual].classList.add("active");
    }

    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        sliderNav(i);
      });
    });

    
    const faqTag = document.querySelectorAll('.faq');

const hideTag = () =>{
    faqTag.forEach(item =>{
        item.classList.remove('open')
        item.children[1].innerHTML = '&#43;'
    })
}

faqTag.forEach(item =>{  
    item.addEventListener('click', e =>{
        if (e.target.className == 'btn') {
            hideTag()
            e.target.parentElement.classList.toggle('open');
            e.target.innerHTML = '&#8722;';
        }
    }) 
})