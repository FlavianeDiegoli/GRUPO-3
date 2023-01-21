var FLAVIANE;

var FLAVIANEImg;

 

 

 //configurações do dinossauro

    FLAVIANE = createSprite(100,100,20,20);

    FLAVIANE.addAnimation("FLAVIANE", FLAVIANEImg);

    //altera o tamanho

    FLAVIANE.scale = 0.5;

    //alterar um posição esepecífica

    FLAVIANE.x = 50;

   

//função que executa enquanto o código estiver funcionando

function draw()

{

 

    background("#9f5f9f");

 

    if (estadoJogo==="play")

    {

        //movimento pro chão e renicia o chão

        chao.velocityX = -2;

        if(chao.x<0)

        {  

            chao.x = chao.width/2;

        }

 

        //pular quando a tecla espaço for pressionada

        if(keyDown("space"))

        {

            //o que acontece se a condição for verdadeira

            FLAVIANE.velocityY = -10;

        }

 

        if(grupoCactos.isTouching(FLAVIANE)){

            estadoJogo = "end";

        }

    }

 

    else if(estadoJogo==="end")

    {

       //parar a velocidade

       chao.velocityX = 0;

       tRex.velocityY = 0;





    }

        

}