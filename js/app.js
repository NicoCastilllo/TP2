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

    $(".precio,.botoncomprar").toggle()

    mostrar = true 

    $("#carta16").hover(()=>{
        if(mostrar==true){
            $(".precio,.botoncomprar").show()
            mostrar = false
        }else{$(".precio,.botoncomprar").toggle()
        mostrar = true}
    });
    


});