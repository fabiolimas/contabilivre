$(document).ready(function(){
    //progress bar

    let containerA=document.querySelector('#circleA');

    let circleA= new ProgressBar.Circle(containerA, {
        color:'#64daf9',
        strokeWidth:8,
        duration:1400,
        from:{color: '#aaa'},
        to:{color:'#64daf9'},

        step:function(state, circle){
            circle.path.setAttribute('stroke', state.color);
            let value=Math.round(circle.value()*60);
            circle.setText(value);
        }
    });
   

    let containerB=document.querySelector('#circleB');

    let circleB= new ProgressBar.Circle(containerB, {
        color:'#64daf9',
        strokeWidth:8,
        duration:1600,
        from:{color: '#aaa'},
        to:{color:'#64daf9'},

        step:function(state, circle){
            circle.path.setAttribute('stroke', state.color);
            let value=Math.round(circle.value()*200);
            circle.setText(value);
        }
    });
    

    let containerC=document.querySelector('#circleC');

    let circleC= new ProgressBar.Circle(containerC, {
        color:'#64daf9',
        strokeWidth:8,
        duration:1800,
        from:{color: '#aaa'},
        to:{color:'#64daf9'},

        step:function(state, circle){
            circle.path.setAttribute('stroke', state.color);
            let value=Math.round(circle.value()*380);
            circle.setText(value);
        }
    });
    

    let containerD=document.querySelector('#circleD');

    let circleD= new ProgressBar.Circle(containerD, {
        color:'#64daf9',
        strokeWidth:8,
        duration:2000,
        from:{color: '#aaa'},
        to:{color:'#64daf9'},

        step:function(state, circle){
            circle.path.setAttribute('stroke', state.color);
            let value=Math.round(circle.value()*980);
            circle.setText(value);
        }
    });

    
let dataAreaOffset=$('#data-area').offset();
let stop=0;
$(window).scroll(function(e){
    let scroll=$(window).scrollTop();

    if(scroll> (dataAreaOffset.top-500) && stop ==0){
        circleA.animate(1.0);
        circleB.animate(1.0);
        circleC.animate(1.0);
        circleD.animate(1.0);
    }
});
//paralax

setTimeout(function(){
    $('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'});
}, 250);
});



$(document).ready(function() {
    $('#boasvindas').modal('show');
})

$(document).ready(function(){
    var cartaobt=document.querySelector('#linkCartao');
    var boletobt=document.querySelector('#linkBoleto');
    var pixbt=document.querySelector('#linkPix');
    var saldobt=document.querySelector('#linkSaldo');

    var modCartao=document.querySelector('#cartao');
    var modBoleto=document.querySelector("#boleto");
    var modPix=document.querySelector('#qrcode');
    var modSaldo=document.querySelector('#saldo');

    cartaobt.addEventListener('click', function(e){
        e.preventDefault();
       modCartao.style.display='block';
       cartaobt.style.borderBottom='1px solid #4aa3e5';
       cartaobt.style.fontWeight='600';
       boletobt.style.fontWeight='100';
       pixbt.style.fontWeight='100';
       saldobt.style.fontWeight='100';
       boletobt.style.borderBottom='none';
       pixbt.style.borderBottom='none';
       saldobt.style.borderBottom='none';
       modBoleto.style.display='none';
       modPix.style.display='none';
       modSaldo.style.display='none';
       
        
    });
    boletobt.addEventListener('click', function(e){
        e.preventDefault();
       modCartao.style.display='none';
       boletobt.style.borderBottom='1px solid #4aa3e5';
       boletobt.style.fontWeight='600';
       pixbt.style.borderBottom='none';
       saldobt.style.borderBottom='none';
       cartaobt.style.borderBottom='none';
       modBoleto.style.display='block';
       modPix.style.display='none';
       modSaldo.style.display='none';
       cartaobt.style.fontWeight='100';
       pixbt.style.fontWeight='100';
       saldobt.style.fontWeight='100';
        
    });
    
    pixbt.addEventListener('click', function(e){
        e.preventDefault();
       modCartao.style.display='none';
       pixbt.style.borderBottom='1px solid #4aa3e5';
       pixbt.style.fontWeight='600';
       cartaobt.style.borderBottom='none';
       boletobt.style.borderBottom='none';
       saldobt.style.borderBottom='none';
       modBoleto.style.display='none';
       modPix.style.display='block';
       modSaldo.style.display='none';
       boletobt.style.fontWeight='100';
       cartaobt.style.fontWeight='100';
       saldobt.style.fontWeight='100';
        
    });
    saldobt.addEventListener('click', function(e){
        e.preventDefault();
       modCartao.style.display='none';
       saldobt.style.borderBottom='1px solid #4aa3e5';
       saldobt.style.fontWeight='600';
       pixbt.style.borderBottom='none';
       cartaobt.style.borderBottom='none';
       boletobt.style.borderBottom='none';
       modBoleto.style.display='none';
       modPix.style.display='none';
       modSaldo.style.display='block';
       boletobt.style.fontWeight='100';
       pixbt.style.fontWeight='100';
       cartaobt.style.fontWeight='100';
        
    });
});


$(document).ready(function(){

    
var investimentohora=document.querySelector('#investimentohora');
var outroprod=document.querySelector("#outrosprodutos");

var tabinvesthora=document.querySelector("#tbinvestimento");
var taboutroprod=document.querySelector("#tboutrosp");

investimentohora.addEventListener('click', function(e){
    e.preventDefault();
    tabinvesthora.style.display='inline-table';
     investimentohora.style.borderBottom='1px solid #4aa3e5';
     investimentohora.style.fontWeight='600';
     outroprod.style.fontWeight='100';
   taboutroprod.style.display='none';
   outroprod.style.border='none';
   
   
    
});

outroprod.addEventListener('click', function(e){
    e.preventDefault();
    tabinvesthora.style.display='none';
   outroprod.style.borderBottom='1px solid #4aa3e5';
   outroprod.style.fontWeight='600';
   investimentohora.style.fontWeight='100';
   taboutroprod.style.display='inline-table';
     investimentohora.style.border='none';
   
   
    
});


});

$(document).ready(function(){

    var btnacessos=document.querySelector('#acessosbtn');
    var btncert=document.querySelector('#certificadobtn');

    var formempresa=document.querySelector('.formempresa');
    var formcert=document.querySelector('.formcertificado');

    btnacessos.addEventListener('click', function(e){
        e.preventDefault();
        formempresa.style.display='flex';
        formcert.style.display='none';
        btnacessos.style.borderBottom='1px solid #4aa3e5';
        btnacessos.style.fontWeight='600';
        btncert.style.fontWeight='100';
        btncert.style.border='none';
       
       
        
    });

    btncert.addEventListener('click', function(e){
        e.preventDefault();
        formempresa.style.display='none';
        formcert.style.display='block';
        btncert.style.borderBottom='1px solid #4aa3e5';
        btncert.style.fontWeight='600';
        btnacessos.style.fontWeight='100';
        btnacessos.style.border='none';
       
       
        
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

        btnDadosCadastrais.style.borderBottom='1px solid #4aa3e5';
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
        btnSalarios.style.borderBottom='1px solid #4aa3e5';
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
        btnHorarios.style.borderBottom='1px solid #4aa3e5';
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
        btnSindicato.style.borderBottom='1px solid #4aa3e5';
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
        btnPis.style.borderBottom='1px solid #4aa3e5';
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
        btnDesconto.style.borderBottom='1px solid #4aa3e5';
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
        btneventos.style.borderBottom='1px solid #4aa3e5';
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
       

        atestadobtn.style.borderBottom='1px solid #4aa3e5';
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
        consultabtn.style.borderBottom='1px solid #4aa3e5';
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

/*$(document).ready(function(){
    var check=document.querySelector('.impostocheck');
    var contador=document.querySelector('.contadorselect');
  

    $('input[type=checkbox]').on('change', function () {

        var total = $('input[type=checkbox]:checked').length;

        if(total < 1){
            contador.style.display="none";
        }else if(total  == 0){
            contador.style.display="none";
           
            
        }else{
            
            contador.style.display="block";
            contador.innerHTML= total+' Holerites Selecionados';
        }
        
    });



});





*/
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
        btnSaidas.style.borderBottom='1px solid #4aa3e5';
        btnSaidas.style.fontWeight='600';
        btnEntradas.style.fontWeight='100';
       
      
        
    });

    btnEntradas.addEventListener('click', function(e){
        e.preventDefault();
        tabelaSaidas.style.display='none';
        tabelaEntradas.style.display='inline-table';
       
       

        btnEntradas.style.borderBottom='1px solid #4aa3e5';
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
        btnImportar.style.borderBottom='1px solid #4aa3e5';
        btnImportar.style.fontWeight='600';
        btnUltimasEm.style.fontWeight='100';
       
      
        
    });

    btnUltimasEm.addEventListener('click', function(e){
        e.preventDefault();
        importar.style.display='none';
        ultimasEmissoes.style.display='inline-table';
       
       

        btnUltimasEm.style.borderBottom='1px solid #4aa3e5';
        btnUltimasEm.style.fontWeight='600';
        btnImportar.style.fontWeight='100';
        btnImportar.style.borderBottom='none';
       
      
        
    });


});

$(document).ready(function(){
    var btnmensalidade=document.querySelector("#mensalidadeBtn");
    var btnhistorico=document.querySelector("#histBtn");
    var btnavulsos=document.querySelector("#avulsosBtn");
    var btncredito=document.querySelector("#creditosBtn");
   

    var mensalidade=document.querySelector('.mensalidades');
    var historico=document.querySelector('.historicoM');
    var avulsos=document.querySelector('.avulsos');
    var credito=document.querySelector('.creditost');
    var saldoc=document.querySelector('.saldoCreditos');
    var menuFinanceiro=document.querySelector('#menuFinanceiro');
    var metodosPagamento=document.querySelector('.metodospag');
    
   

    btnmensalidade.addEventListener('click', function(e){
        e.preventDefault();
        mensalidade.style.display='block';
        historico.style.display='none';
        avulsos.style.display='none';
        credito.style.display='none';
        saldoc.style.display='none';
       
        btnavulsos.style.border='none';
        btncredito.style.border='none';
        btnhistorico.style.border='none';
        btnmensalidade.style.borderBottom='1px solid #4aa3e5';
        btnmensalidade.style.fontWeight='600';
        menuFinanceiro.style.height='auto';
        metodosPagamento.style.marginTop='0px';
        btncredito.style.fontWeight='100';
        btnhistorico.style.fontWeight='100';
        
       
      
        
    });

    btnhistorico.addEventListener('click', function(e){
        e.preventDefault();
        mensalidade.style.display='none';
        historico.style.display='block';
        avulsos.style.display='none';
        credito.style.display='none';
        saldoc.style.display='none';
       
        btnavulsos.style.border='none';
        btncredito.style.border='none';
        btnhistorico.style.borderBottom='1px solid #4aa3e5';
        btnhistorico.style.fontWeight='600';
        btnmensalidade.style.borderBottom='none';
        menuFinanceiro.style.height='auto';
        metodosPagamento.style.marginTop='0px';
        btncredito.style.fontWeight='100';
        
        btnmensalidade.style.fontWeight='100';
       
      
        
    });

    btnavulsos.addEventListener('click', function(e){
        e.preventDefault();
        mensalidade.style.display='none';
        historico.style.display='none';
        avulsos.style.display='block';
        credito.style.display='none';
        saldoc.style.display='none';
       
        btnavulsos.style.borderBottom='1px solid #4aa3e5';
        btnavulsos.style.fontWeight='600';
        btncredito.style.fontWeight='100';
        btnhistorico.style.fontWeight='100';
        btnmensalidade.style.fontWeight='100';
        btncredito.style.border='none';
        btnhistorico.style.border='none';
        btnmensalidade.style.borderBottom='none';
        menuFinanceiro.style.height='auto';
        metodosPagamento.style.marginTop='0px';
       
      
        
    });

    btncredito.addEventListener('click', function(e){
        e.preventDefault();
        mensalidade.style.display='none';
        historico.style.display='none';
        avulsos.style.display='none';
        credito.style.display='block';
        saldoc.style.display='block';
       
        btnavulsos.style.border='none';
        btncredito.style.borderBottom='1px solid #4aa3e5';
        btncredito.style.fontWeight='600';
        btnavulsos.style.fontWeight='100';

        btnhistorico.style.border='none';
        btnmensalidade.style.border='none';
       menuFinanceiro.style.height='188px';
       metodosPagamento.style.marginTop='-76px';
       
       btnhistorico.style.fontWeight='100';
       btnmensalidade.style.fontWeight='100';

      
        
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
        btnVendas.style.borderBottom='1px solid #4aa3e5';
        btnVendas.style.fontWeight='600';
        btnLocacao.style.fontWeight='100';
       
          
      
        
    });

    btnLocacao.addEventListener('click', function(e){
        e.preventDefault();
        venda.style.display='none';
        aluguel.style.display='block';
        btnLocacao.style.borderBottom='1px solid #4aa3e5';
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
    var btnclose=document.querySelector("#btnclose");
    var avaliacao=document.querySelector("#avaliacaofooter");

    btnclose.addEventListener('click', function(e){
        e.preventDefault();
        avaliacao.style.display='none';
    });
});