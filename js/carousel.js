               $('.active-testimonial').owlCarousel({            
            items: 2,            
            loop: true,           
            margin: 30,           
            autoplayHoverPause: true,            
            dots: false,            
            autoplay: true,            
            nav: true,            
            navText: ["<span class='lnr lnr-arrow-up'></span>", 
                     "<span class='lnr lnr-arrow-down'></span>"],
            responsive: {                
                0: {                   
                    items: 1                
                },                
                480: {                    
                    items: 1,                
                },                
                768: {                    
                    items: 2,               
                }      
            }
        });    
        $('.active-brand-carusel').owlCarousel({
                    items: 5,        
                    loop: true,       
                    autoplayHoverPause: true,        
                    autoplay: true,      
                    responsive: {            
                        0: {                
                            items: 1            
                        },            
                        455: {                
                            items: 2          
                        },                        
                        768: {              
                            items: 3,            
                        },            
                        991: {                
                            items: 4,            
                        },            
                        1024: {                
                            items: 5,            
                        }        }
                    });