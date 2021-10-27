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

    let = precio = false
    let = botoncomprar = false

    $(".carta").hover(()=>{
        $("precio,botoncomprar").show();
        

   
    });


});