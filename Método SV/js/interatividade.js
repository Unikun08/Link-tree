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

    if( modoescuro == false ) {

        botoes.css( "background-color" , "rgb(125, 22, 51)");
        botoes.css("color" , "white");

        modoescuro = true;

    }else{

        botoes.css( "background-color" , "rgb(57, 8, 26)");
        botoes.css("color" , "white");

        modoescuro = false;

    }


});


botao_modoescuro.click(()=>{

    icones.css("color" , "rgb(57, 8, 26)")
    

});


});