<template>
  <div class="clients-block">
  <h1 class="text-center">С нами работают</h1>
	    <h4 class="text-center">Десятки компаний доверяют нам самое ценное, что у них есть в интернете - свои сайты. Мы делаем всё, чтобы наше сотрудничество было долгим.</h4>
	    <div id="slick-slider">
	      <div class="custom-clients-block">
	        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png" alt="картинка">
	      </div>
	      <div class="custom-clients-block">
	        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png" alt="картинка">
	      </div>
	      <div class="custom-clients-block">
	        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png" alt="картинка">
	      </div>
	      <div class="custom-clients-block">
	        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png" alt="картинка">
	      </div>
	      <div class="custom-clients-block">
	        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/VK_Full_Logo_%282021-present%29.svg/1280px-VK_Full_Logo_%282021-present%29.svg.png" alt="картинка">
	      </div>
	      <div class="custom-clients-block">
	        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Red_Hat_Logo_2019.svg/2560px-Red_Hat_Logo_2019.svg.png" alt="картинка">
	      </div>
	      <div class="custom-clients-block">
	        <img src="https://assets.stickpng.com/images/62a2230d443b787d58371256.png" alt="картинка">
	      </div>
	      <div class="custom-clients-block">
	        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Kali_Linux_2.0_wordmark.svg/2560px-Kali_Linux_2.0_wordmark.svg.png" alt="картинка">
	      </div>
	      <div class="custom-clients-block">
	        <img src="https://1000logos.net/wp-content/uploads/2021/04/GNOME-logo.png" alt="картинка">
	      </div>
	      <div class="custom-clients-block">
	        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Sberbank_Logo_2020.svg/2560px-Sberbank_Logo_2020.svg.png" alt="картинка">
	      </div>
	      <div class="custom-clients-block">
	        <img src="https://1000logos.net/wp-content/uploads/2023/01/Steam-Logo-2002.png" alt="картинка">
	      </div>
	    </div>
  </div>
  <div class="clients-block2">
	  	<div id="slick-slider2">
  			<div class="custom-clients-block">
    			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="Image 1">
  			</div>
  			<div class="custom-clients-block">
	    		<img src="https://acdn.tinkoff.ru/static/documents/1d2d8a12-049a-478a-9e90-f8e6d3e7a04f.png" alt="Image 2">
  			</div>
  			<div class="custom-clients-block">
	    		<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Yandex_logo.svg/2560px-Yandex_logo.svg.png" alt="Image 2">
  			</div>
  			<div class="custom-clients-block">
	    		<img src="https://toplogos.ru/images/logo-sportmaster.png" alt="Image 2">
  			</div>
  			<div class="custom-clients-block">
	    		<img src="https://cdn.worldvectorlogo.com/logos/redbull-5.svg" alt="Image 2">
  			</div>
  			<div class="custom-clients-block">
	    		<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Mercedes-Benz_Logo_2010.svg/2560px-Mercedes-Benz_Logo_2010.svg.png" alt="Image 2">
  			</div>
  			<div class="custom-clients-block">
	    		<img src="https://logolook.net/wp-content/uploads/2022/05/Ferrari-Symbol.png" alt="Image 2">
  			</div>

  			<div class="custom-clients-block">
	    		<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Epic_Games_logo.svg/1764px-Epic_Games_logo.svg.png" alt="Image 2">
  			</div>

  			<div class="custom-clients-block">
	    		<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Marlboro_Logo.svg/2560px-Marlboro_Logo.svg.png" alt="Image 2">
  			</div>

  			<div class="custom-clients-block">
	    		<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png" alt="Image 2">
  			</div>
		</div>
	</div>
</template>


<script>
  $(document).ready(function(){
	$('#slick-slider').slick({
	infinite: true, // Infinite scrolling
	slidesToShow: 8, // Number of slides to show
	slidesToScroll: 1, // Number of slides to scroll when navigating
	autoplay: true, // Automatic scrolling
	arrows: false,
	dots: false,
	responsive: 'none',
	variableWidth: true,
    centerMode: true,
    centerPadding: '60px',
    lazyLoad: 'ondemand',
    autoplaySpeed: 2000 // Scroll speed in milliseconds
    });
});
    $(document).ready(function(){
        $('#slick-slider2').slick({
        infinite: true,
      	slidesToShow: 8,
      	slidesToScroll: 1,
      	autoplay: true,
      	arrows: false,
      	dots: false,
      	responsive: 'none',
      	variableWidth: true,
      	centerPadding: '60px',
      	lazyLoad: 'ondemand',
    	autoplaySpeed: 2000
    	});
    });
</script>
<style>
	    .clients-block {
	      margin-bottom: 10px; /* Add a reduced margin */
	      max-width: 100%; /* Set the maximum width of the clients-block */
	    }
        .clients-block2 {
            margin-bottom: 150px;
            max-width: 100%;
        }
        .clients-block2 img {
	      max-width: 100%; /* Make the image responsive */
	      height: 60px;
	      display: flex;
	      margin: 45px auto;
	    }
	    .clients-block img {
	      max-width: 100%; /* Make the image responsive */
	      height: 60px;
	      display: flex;
	      margin: 45px auto;
	    }
	    h1 {
	      font-weight: bold;
	      margin-top: 20px; /* Add margin at the top */
	    }
	    h4 {
	      margin-bottom: 20px; /* Add margin at the bottom */
	    }
	    #slick-slider {
	      margin-top: 20px; /* Add margin at the top */
	    }
	    #slick-slider div {
	      margin: 5px; /* Add margin around each slide */
	    }
	    #slick-slider2 div{
	    	margin: 5px;
	    }
	    .slick-slide{
			width: 280px;
		}
	    .custom-clients-block {
	    justify-content: center;
	    align-items: center;
		align-content: center;
	    border: 1px solid #ccc;
	    border-radius: 5px;
	    width: 300px;
	    padding-left: 15px;	
	    padding-right: 15px;	
	    height: 150px;
	    }
</style>