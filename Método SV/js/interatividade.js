$(function(){


//ENTRADA

var botoes = $(".botao");
var titulo = $("h1");
var subtitulo = $("#subtitulo");
var icones = $("svg");
var fundo = $("body");
var botao_modoescuro = $ ("#modoescuro");

var modoescuro = false


//PROCESSAMENTO

botao_modoescuro.click(()=>{

    if(modoescuro == false ){

        botoes.css("background-color","rgb(57, 8, 26)");
        botoes.css("color","white");

        fundo.css("background-image","url('https://i.pinimg.com/736x/d6/bd/2d/d6bd2d6d5f9937c1e52e66354a110c8e.jpg')")

        modoescuro = true


    }else{

        botoes.css( "background-color","rgb(125, 22, 51)");
        botoes.css("color","white");

        fundo.css("background-image","url('https://i.pinimg.com/736x/29/ed/80/29ed8045f52712cdd6bfe79318c55802.jpg')")

        modoescuro = false

    }


});


botao_modoescuro.click(()=>{

    icones.css("color" , "rgb(57, 8, 26)")
    

});


});