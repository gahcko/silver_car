
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

  //phone_messenger

	const btn_phone = document.querySelector('.btn_phone');
	const messenger_main = document.querySelector('.messenger_main');
	const messenger = document.querySelector('.window_messenger');
	const messenger_close = document.querySelector('.messenger_close');

	
	btn_phone.addEventListener('click', () => {
    document.body.style.overflow = "hidden"; 
    messenger_main.classList.add('active_block');
		messenger.classList.add('active_block');
	});

	messenger_close.addEventListener('click', () => {
    document.body.style.overflow = ""; 
    messenger_main.classList.remove('active_block');
		messenger.classList.remove('active_block');
	});

  //burger-list

	const burger_btn = document.querySelector('.burger_menu');
	const sub_ul_burger = document.querySelector('.sub_ul_burger');
	const burger_close = document.querySelector('.burger_close');


	
	burger_btn.addEventListener('click', () => {
    	sub_ul_burger.classList.add('active_block');
	});

  burger_close.addEventListener('click', () => {
    sub_ul_burger.classList.remove('active_block');
});



    