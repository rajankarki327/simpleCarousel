
            var image = document.getElementById('carousel-container');
            var slides = document.querySelectorAll('.carousel');
            var indicatorr=document.getElementById('indicators');
            var indicators=image.querySelectorAll('.indicator');
            var total = slides.length - 1;
            var Itotal =indicators.length-1;
            var counter = 0;
            
            function carousel() {
                    for (var s = 0; s <= total; s++) {

                        if (s === counter) {
                            slides[s].style.animation=options.animation+" 2s";
                           slides[s].style.display="inline-block";
                        } else {

                            slides[s].style.display = 'none';
                        }
                    }
                    indicate();
                    
                        } 


            function indicatorCheck()
            {
                if(options.showIndicator===false){
                        var parent=document.getElementById('indicators');
                        var child=document.getElementById('indicators');
                        image.removeChild(child);       
                    }
                    else{
                    indicatorDiv=document.createElement('div');
                    indicatorDiv.id='indicators';
                    image=document.getElementById("carousel-container").appendChild(indicatorDiv);
                    for(var i=0;i<=total;i++){
                        x=document.createElement('INPUT');
                        x.setAttribute("class","indicator");
                        x.setAttribute("type", "radio");
                        x.setAttribute("name", "btn");
                        x.setAttribute("onClick","indicates()");
                        indicatorr= document.getElementById('indicators').appendChild(x);
                    }
                    indicators=image.querySelectorAll('.indicator');
                    indicate();
                }
            }



            function indicates(){
               for(var s=0;s<=Itotal;s++)
                {
                    if(indicators[s].checked===true){
                        counter=s;
                        carousel();                        
                    }
                } 
              
            }


            function indicate()
            {
                for(var s=0;s<=Itotal;s++)
                {
                    if(s===counter){
                        indicators[s].checked=true;
                    }
                    else{
                        indicators[s].checked=false;
                    }
                }
               
            }


            function next() {
                slides[counter].style.display="inline-block";
                slides[counter].style.animation="m2r 2s";
                counter += 1;
                if (counter > total) {
                        counter = 0;
                    }
                setTimeout(carousel,1000); 
                // carousel();
            }


            function carouselSlide(){
                    slides[counter].style.display="inline-block";
                    slides[counter].style.animation="m2r 2s";
                    setTimeout(carousel,1000);
                    counter += 1;
                    if (counter > total) {
                        if(options.cycle===false){
                        clearInterval(myVar);
                        counter-=1;
                        setTimeout(carousel,1000);
                        }
                        else{
                            counter = 0;
                        }
                    }
            }


            function prev() {
                counter-=1;
                if(counter < 0)
                {
                    counter=total;
                } 
                
                carousel();
                   

            }

         

             function Carousel()
                 {
                    carousel();
                    // indicatorCheck();
                    // if(options.interval!=null){
                    // myVar = setInterval(carouselSlide, options.interval);
                    // }
                 }
            


        
        