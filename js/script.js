


$(document).ready(function() {
    $('#boasvindas').modal('show');
})




$(document).ready(function(){

    
var investimentohora=document.querySelector('#investimentohora');
var outroprod=document.querySelector("#outrosprodutos");

var tabinvesthora=document.querySelector("#tbinvestimento");
var taboutroprod=document.querySelector("#tboutrosp");

investimentohora.addEventListener('click', function(e){
    e.preventDefault();
    tabinvesthora.style.display='inline-table';
     investimentohora.style.borderBottom='2px solid #4aa3e5';
     investimentohora.style.fontWeight='600';
     outroprod.style.fontWeight='100';
   taboutroprod.style.display='none';
   outroprod.style.border='none';
   
   
    
});

outroprod.addEventListener('click', function(e){
    e.preventDefault();
    tabinvesthora.style.display='none';
   outroprod.style.borderBottom='2px solid #4aa3e5';
   outroprod.style.fontWeight='600';
   investimentohora.style.fontWeight='100';
   taboutroprod.style.display='inline-table';
     investimentohora.style.border='none';
   
   
    
});


});



$(document).ready(function(){

    var btnDadosCadastrais=document.querySelector('#dados-cadastrais-btn');
    var btnSalarios =document.querySelector('#salariosbtn');
    var btnHorarios=document.querySelector('#horariosbtn');
    var btnSindicato=document.querySelector('#sindicatobtn');
    var btnPis=document.querySelector('#pisbtn');
    var btnDesconto=document.querySelector('#descontosbtn');

    var dadosCadastrais=document.querySelector('.dadosCadastrais');
    var salarios=document.querySelector('#salario');
    var horarios=document.querySelector('#horarios');
    var sindicato=document.querySelector('#sindicato');
    var pisCtps=document.querySelector('#pisctps');
    var descontos=document.querySelector('#descontosProventos');


    btnDadosCadastrais.addEventListener('click', function(e){
        e.preventDefault();
        dadosCadastrais.style.display='flex';
        salarios.style.display='none';
        horarios.style.display='none';
        sindicato.style.display='none';
        pisCtps.style.display='none';
        descontos.style.display='none';

        btnDadosCadastrais.style.borderBottom='2px solid #4aa3e5';
        btnDadosCadastrais.style.fontWeight='600';
        btnSalarios.style.fontWeight='100';
        btnHorarios.style.fontWeight='100';
        btnSindicato.style.fontWeight='100';
        btnPis.style.fontWeight='100';
        btnDesconto.style.fontWeight='100';
        btnSalarios.style.border='none';
        btnHorarios.style.border='none';
        btnSindicato.style.border='none';
        btnPis.style.border='none';
        btnDesconto.style.border='none';

    });

    btnSalarios.addEventListener('click', function(e){
        e.preventDefault();
        dadosCadastrais.style.display='none';
        salarios.style.display='flex';
        horarios.style.display='none';
        sindicato.style.display='none';
        pisCtps.style.display='none';
        descontos.style.display='none';

        btnDadosCadastrais.style.border='none';
        btnSalarios.style.borderBottom='2px solid #4aa3e5';
        btnSalarios.style.fontWeight='600';
        btnHorarios.style.border='none';
        btnSindicato.style.border='none';
        btnPis.style.border='none';
        btnDesconto.style.border='none';
       
        btnHorarios.style.fontWeight='100';
        btnSindicato.style.fontWeight='100';
        btnPis.style.fontWeight='100';
        btnDesconto.style.fontWeight='100';
        
    });
    btnHorarios.addEventListener('click', function(e){
        e.preventDefault();
        dadosCadastrais.style.display='none';
        salarios.style.display='none';
        horarios.style.display='flex';
        sindicato.style.display='none';
        pisCtps.style.display='none';
        descontos.style.display='none';

        btnDadosCadastrais.style.border='none';
        btnHorarios.style.borderBottom='2px solid #4aa3e5';
        btnHorarios.style.fontWeight='600';
        btnSalarios.style.border='none';
        btnSindicato.style.border='none';
        btnPis.style.border='none';
        btnDesconto.style.border='none';
        btnSalarios.style.fontWeight='100';
       
        btnSindicato.style.fontWeight='100';
        btnPis.style.fontWeight='100';
        btnDesconto.style.fontWeight='100';
        
    });

    btnSindicato.addEventListener('click', function(e){
        e.preventDefault();
        dadosCadastrais.style.display='none';
        salarios.style.display='none';
        horarios.style.display='none';
        sindicato.style.display='flex';
        pisCtps.style.display='none';
        descontos.style.display='none';

        btnDadosCadastrais.style.border='none';
        btnSindicato.style.borderBottom='2px solid #4aa3e5';
        btnSindicato.style.fontWeight='600';
        btnSalarios.style.border='none';
        btnHorarios.style.border='none';
        btnPis.style.border='none';
        btnDesconto.style.border='none';
        btnSalarios.style.fontWeight='100';
        btnHorarios.style.fontWeight='100';
     
        btnPis.style.fontWeight='100';
        btnDesconto.style.fontWeight='100';
        
    });

    btnPis.addEventListener('click', function(e){
        e.preventDefault();
        dadosCadastrais.style.display='none';
        salarios.style.display='none';
        horarios.style.display='none';
        sindicato.style.display='none';
        pisCtps.style.display='flex';
        descontos.style.display='none';

        btnDadosCadastrais.style.border='none';
        btnPis.style.borderBottom='2px solid #4aa3e5';
        btnPis.style.fontWeight='600';
        btnSalarios.style.border='none';
        btnHorarios.style.border='none';
        btnSindicato.style.border='none';
        btnDesconto.style.border='none';
        btnSalarios.style.fontWeight='100';
        btnHorarios.style.fontWeight='100';
        btnSindicato.style.fontWeight='100';
       
        btnDesconto.style.fontWeight='100';
        
    });
    btnDesconto.addEventListener('click', function(e){
        e.preventDefault();
        dadosCadastrais.style.display='none';
        salarios.style.display='none';
        horarios.style.display='none';
        sindicato.style.display='none';
        pisCtps.style.display='none';
        descontos.style.display='flex';

        btnDadosCadastrais.style.border='none';
        btnDesconto.style.borderBottom='2px solid #4aa3e5';
        btnDesconto.style.fontWeight='600';
        btnSalarios.style.border='none';
        btnHorarios.style.border='none';
        btnPis.style.border='none';
        btnSindicato.style.border='none';
        btnSalarios.style.fontWeight='100';
        btnHorarios.style.fontWeight='100';
        btnSindicato.style.fontWeight='100';
        btnPis.style.fontWeight='100';
       
        
    });

});


$(document).ready(function(){
    var btneventos=document.querySelector("#eventosbtn");
    var atestadobtn=document.querySelector("#atestadobtn");
    var consultabtn=document.querySelector("#consultabtn");

    var tabelaeventos=document.querySelector('.eventostable');
    var tabelaatestados=document.querySelector('.atestadoTable');
    var tabelaconsultaf=document.querySelector('.consultaFerias');

    btneventos.addEventListener('click', function(e){
        e.preventDefault();
        tabelaeventos.style.display='inline-table';
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
        tabelaatestados.style.display='inline-table';
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
        tabelaconsultaf.style.display='inline-table';
       

        atestadobtn.style.border='none';
        btneventos.style.borderBottom='none';
        consultabtn.style.borderBottom='2px solid #4aa3e5';
        consultabtn.style.fontWeight='600';
        atestadobtn.style.fontWeight='100';
        btneventos.style.fontWeight='100';
      
        
    });


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
    var btnSaidas=document.querySelector("#saidasBtn");
    var btnEntradas=document.querySelector("#entradasBtn");
   

    var tabelaSaidas=document.querySelector('.nftable');
    var tabelaEntradas=document.querySelector('.entradasCompras');
   

    btnSaidas.addEventListener('click', function(e){
        e.preventDefault();
        tabelaSaidas.style.display='inline-table';
        tabelaEntradas.style.display='none';
       
       

        btnEntradas.style.border='none';
        btnSaidas.style.borderBottom='2px solid #4aa3e5';
        btnSaidas.style.fontWeight='600';
        btnEntradas.style.fontWeight='100';
       
      
        
    });

    btnEntradas.addEventListener('click', function(e){
        e.preventDefault();
        tabelaSaidas.style.display='none';
        tabelaEntradas.style.display='inline-table';
       
       

        btnEntradas.style.borderBottom='2px solid #4aa3e5';
        btnEntradas.style.fontWeight='600';
        btnSaidas.style.fontWeight='100';
        btnSaidas.style.borderBottom='none';
       
      
        
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
    var btnImportar=document.querySelector("#importarBtn");
    var btnUltimasEm=document.querySelector("#ultimasemissoesBtn");
   

    var importar=document.querySelector('.importarNota');
    var ultimasEmissoes=document.querySelector('.ultimasEmissoes');
   

    btnImportar.addEventListener('click', function(e){
        e.preventDefault();
        importar.style.display='block';
        ultimasEmissoes.style.display='none';
       
       

        btnUltimasEm.style.border='none';
        btnImportar.style.borderBottom='2px solid #4aa3e5';
        btnImportar.style.fontWeight='600';
        btnUltimasEm.style.fontWeight='100';
       
      
        
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
    var btnManual=document.querySelector("#manual");
    var btnExcel=document.querySelector("#excel");
   

    var manual=document.querySelector('.manual');
    var excel=document.querySelector('.importPlanilha');
   

    btnManual.addEventListener('click', function(e){
        e.preventDefault();
        manual.style.display='block';
        excel.style.display='none';
        btnExcel.checked=false;
        btnManual.checked=true;
       
          
      
        
    });

    btnExcel.addEventListener('click', function(e){
        e.preventDefault();
        manual.style.display='none';
        excel.style.display='flex';
        btnExcel.checked=true;
        btnManual.checked=false;
       
       

       
       
      
        
    });


});

$(document).ready(function(){
    var btnVendas=document.querySelector("#vendasBtn");
    var btnLocacao=document.querySelector("#locacaoBtn");
   

    var venda=document.querySelector('.venda');
    var aluguel=document.querySelector('.aluguel');
   

    btnVendas.addEventListener('click', function(e){
        e.preventDefault();
        venda.style.display='block';
        aluguel.style.display='none';
       
        btnLocacao.style.border='none';
        btnVendas.style.borderBottom='2px solid #4aa3e5';
        btnVendas.style.fontWeight='600';
        btnLocacao.style.fontWeight='100';
       
          
      
        
    });

    btnLocacao.addEventListener('click', function(e){
        e.preventDefault();
        venda.style.display='none';
        aluguel.style.display='block';
        btnLocacao.style.borderBottom='2px solid #4aa3e5';
        btnLocacao.style.fontWeight='600';
        btnVendas.style.fontWeight='100';
        btnVendas.style.borderBottom='none';
       

       
       
      
        
    });


});
$(document).ready(function(){
    var btnManual=document.querySelector("#manuall");
    var btnExcel=document.querySelector("#excell");
   

    var manual=document.querySelector('.manuall');
    var excel=document.querySelector('.importPlanilhal');
   

    btnManual.addEventListener('click', function(e){
        e.preventDefault();
        manual.style.display='block';
        excel.style.display='none';
        btnExcel.checked=false;
        btnManual.checked=true;
       
          
      
        
    });

    btnExcel.addEventListener('click', function(e){
        e.preventDefault();
        manual.style.display='none';
        excel.style.display='flex';
        btnExcel.checked=true;
        btnManual.checked=false;
       
       

       
       
      
        
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