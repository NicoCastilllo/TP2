$(document).ready(()=>{

    $("#BCamisetas").click(()=>{
        $(".camisetas, .pelotas, .articulos, .calzado").show();
        $(".pelotas, .articulos, .calzado").toggle();
    });

    $("#BPelotas").click(()=>{
        $(".camisetas, .pelotas, .articulos, .calzado").show();
        $(".camisetas, .articulos, .calzado").toggle();
    }); 

    $("#BArticulos").click(()=>{
        $(".camisetas, .pelotas, .articulos, .calzado").show();
        $(".pelotas, .camisetas, .calzado").toggle();
    });

    $("#BCalzado").click(()=>{
        $(".camisetas, .pelotas, .articulos, .calzado").show();
        $(".pelotas, .articulos, .camisetas").toggle();
    });

    $("#BReset").click(()=>{
        $(".camisetas, .pelotas, .articulos, .calzado").show();
    });

    $(".descripcion").toggle()



    for (let i = 1; i <= 16; i++) {
 
        $(`#${i}`).hover( 
            ()=> {
                  $(`#${i} > p`).css("opacity", "100")
                  $(`#${i} > a`).css("display", "block")
             } ,
            ()=> {
                  $(`#${i} > p`).css("opacity", "0")
                  $(`#${i} > a`).css("display", "none")
                 }
            )
        
  
     }

    
    $("#miniatura1").click(() =>{
        $("#fotoprincipal").attr("src","img/compra/camiseta1.jpg")
    })

    $("#miniatura2").click(() =>{
        $("#fotoprincipal").attr("src","img/compra/camiseta2.jpg")
    })

    $("#miniatura3").click(() =>{
        $("#fotoprincipal").attr("src","img/compra/camiseta3.jpg")
    })
});