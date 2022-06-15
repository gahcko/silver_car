
    $(document).ready(function(){
        $('.gallery-item').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1295,
                  settings: {
                    slidesToShow: 3,
                  }
                },
                // {
                //   breakpoint: 600,
                //   settings: {
                //     slidesToShow: 2,
                //     slidesToScroll: 2
                //   }
                // },
                {
                  breakpoint: 400,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                  }
                }
            ]
        });
      });

  //   const ulLiOne = document.querySelector('li');
  //   const subUl = document.querySelector('.sub_ul');
  //   const subUlClose = document.querySelector('.sub_ul_close');

  //   ulLiOne.addEventListener('click', () => {
  //       subUl.style.display = 'grid';
  //   });

  //   subUlClose.addEventListener('click', () => {
  //     subUl.style.display = 'none';
  // });

    