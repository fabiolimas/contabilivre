


$(document).ready(function() {
    $('#boasvindas').modal('show');
});












$(document).ready(function(){
    var evento=document.querySelector("#evento");
    var atestadoMedico=document.querySelector(".atestadoMedico");
    var suspensao=document.querySelector(".suspensao");
    var estagiario=document.querySelector(".estagiario");
    var ferias=document.querySelector(".ferias");
    var rodape=document.querySelector("#rodape");

    evento.addEventListener('change', function(e){
        e.preventDefault();
        console.log(evento.value);
        switch(evento.value){
        
        case ('1'):
            console.log(evento.value);
        atestadoMedico.style.display='flex';
        suspensao.style.display='none';
        estagiario.style.display='none';
        ferias.style.display='none';
        rodape.style.position='relative';

        break;

        case ('2'):
            console.log(evento.value);
            atestadoMedico.style.display='none';
            suspensao.style.display='flex';
            estagiario.style.display='none';
            ferias.style.display='none';
            rodape.style.position='absolute';
    
            break;

        case ('5'):
            console.log(evento.value);
                atestadoMedico.style.display='none';
                suspensao.style.display='none';
                estagiario.style.display='flex';
                ferias.style.display='none';
        
                break;
        case ('4'):
            console.log(evento.value);
                    atestadoMedico.style.display='none';
                    suspensao.style.display='none';
                    estagiario.style.display='flex';
                    ferias.style.display='none';
            
                    break;

        case ('3'):
            console.log(evento.value);
                        atestadoMedico.style.display='none';
                        suspensao.style.display='none';
                        estagiario.style.display='none';
                        ferias.style.display='flex';
                
                        break;
                    


        }


   
    });




});

$(document).ready(function(){
    var check=document.querySelector('.holeritecheck');
    var contador=document.querySelector('.contadorselect');
    var btndownload=document.querySelector('#btndownload');

    $('input[type=checkbox]').on('change', function () {

        var total = $('input[type=checkbox]:checked').length;

        if(total<1){

        }else if(total -1 == 0){
            contador.style.display="none";
            btndownload.style.display='none';
            
        }else{
            btndownload.style.display='block';
            contador.style.display="block";
            contador.innerHTML= total-1+' Holerites Selecionados';
        }
        
    });

});




$(document).ready(function(){
    var btnSaidas=document.querySelector("#saidasBtnm");
    var btnEntradas=document.querySelector("#entradasBtnm");
   

    var tabelaSaidas=document.querySelector('.saidaVendas');
    var tabelaEntradas=document.querySelector('.nfentradas');
   

    btnSaidas.addEventListener('click', function(e){
        e.preventDefault();
        tabelaSaidas.style.display='flow-root';
        tabelaEntradas.style.display='none';
       
       

        btnEntradas.style.border='none';
        btnSaidas.style.borderBottom='2px solid #4aa3e5';
        btnSaidas.style.fontWeight='600';
        btnEntradas.style.fontWeight='100';
       
      
        
    });

    btnEntradas.addEventListener('click', function(e){
        e.preventDefault();
        tabelaSaidas.style.display='none';
        tabelaEntradas.style.display='flow-root';
       
       

        btnEntradas.style.borderBottom='2px solid #4aa3e5';
        btnEntradas.style.fontWeight='600';
        btnSaidas.style.fontWeight='100';
        btnSaidas.style.borderBottom='none';
       
      
        
    });


});



$(document).ready(function(){
    var btnImportar=document.querySelector("#importarBtnm");
    var btnUltimasEm=document.querySelector("#ultimasemissoesBtnm");
   

    var importar=document.querySelector('.plan1');
    var ultimasEmissoes=document.querySelector('.ultimasEmissoesmobile');
   

    btnImportar.addEventListener('click', function(e){
        e.preventDefault();
        importar.style.display='flow-root';
        ultimasEmissoes.style.display='none';
       
       

        btnUltimasEm.style.border='none';
        btnImportar.style.borderBottom='2px solid #4aa3e5';
        btnImportar.style.fontWeight='600';
        btnUltimasEm.style.fontWeight='100';
       
      
        
    });

    btnUltimasEm.addEventListener('click', function(e){
        e.preventDefault();
        importar.style.display='none';
        ultimasEmissoes.style.display='flow-root';
       
       

        btnUltimasEm.style.borderBottom='2px solid #4aa3e5';
        btnUltimasEm.style.fontWeight='600';
        btnImportar.style.fontWeight='100';
        btnImportar.style.borderBottom='none';
       
      
        
    });


});












$(document).ready(function(){
    var btneventos=document.querySelector("#eventosbtnm");
    var atestadobtn=document.querySelector("#atestadobtnm");
    var consultabtn=document.querySelector("#consultabtnm");

    var tabelaeventos=document.querySelector('.eventosgeralmobile');
    var tabelaatestados=document.querySelector('.atestadomedicomobile');
    var tabelaconsultaf=document.querySelector('.consultaferiasmobile');

    btneventos.addEventListener('click', function(e){
        e.preventDefault();
        tabelaeventos.style.display='flow-root';
        tabelaatestados.style.display='none';
        tabelaconsultaf.style.display='none';
       

        atestadobtn.style.border='none';
        btneventos.style.borderBottom='2px solid #4aa3e5';
        btneventos.style.fontWeight='600';
        atestadobtn.style.fontWeight='100';
        consultabtn.style.fontWeight='100';
        consultabtn.style.border='none';
      
        
    });

    atestadobtn.addEventListener('click', function(e){
        e.preventDefault();
        tabelaeventos.style.display='none';
        tabelaatestados.style.display='flow-root';
        tabelaconsultaf.style.display='none';
       

        atestadobtn.style.borderBottom='2px solid #4aa3e5';
        atestadobtn.style.fontWeight='600';
        btneventos.style.borderBottom='none';
        consultabtn.style.border='none';
        btneventos.style.fontWeight='100';
        consultabtn.style.fontWeight='100';
      
        
    });

    consultabtn.addEventListener('click', function(e){
        e.preventDefault();
        tabelaeventos.style.display='none';
        tabelaatestados.style.display='none';
        tabelaconsultaf.style.display='flow-root';
       

        atestadobtn.style.border='none';
        btneventos.style.borderBottom='none';
        consultabtn.style.borderBottom='2px solid #4aa3e5';
        consultabtn.style.fontWeight='600';
        atestadobtn.style.fontWeight='100';
        btneventos.style.fontWeight='100';
      
        
    });


});