models = [
    {
        name : 'Bmw Motor',
        image : 'img/bmw.jpg',
        url : 'https://www.bmw-motorrad.com.tr/tr/home.html'
        
    },
    
    {
        name : 'Ducatti V4',
        image : 'img/v4.jpg',
        url : 'https://www.ducati.com/ww/en/home'
    },
    
    {
        name : 'Kawasaki H2R',
        image : 'img/h2r.jpg',
        url : 'https://www.kawasaki.com.tr/'
    },
    
    {
        name : 'Yamaha R6',
        image : 'img/r6.jpg',
        url : 'https://www.yamaha-motor.eu/tr/tr/'
    },
    
    {
        name : 'Yamaha MT-07',
        image : 'img/mt07.jpg',
        url : 'https://www.yamaha-motor.eu/tr/tr/'
    }
    

]

index = 0;

var interval;

var settings = {
    random : true,
    slide : '2200' // 2.2s
}



randomSlider(settings)



//mouse events

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval)
    })
})


document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        randomSlider(settings)
    })
})








function randomSlider(settings){
   interval = setInterval(function(){

        if(settings.random){
            index = Math.floor(Math.random()*models.length)
        }
        slider(index)

    },settings.slide)


}


document.querySelector('.fa-arrow-left').addEventListener('click',function(){
    index--;
    slider(index);
    console.log(index);
})


document.querySelector('.fa-arrow-right').addEventListener('click',function(){
    index++;
    slider(index);
    console.log(index);
})




function slider(i){
    index = i;

  
    if(i<0){
        index = models.length - 1;
    }
    
    if(i>=models.length){
        index = 0;
    }

    document.querySelector('.card-img-top').setAttribute('src',models[index].image);
    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-link').setAttribute('href',models[index].url);
}

slider(index)


