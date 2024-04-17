
//Inicia todo programa
function OnStart()
{   
     var mecanic = app.ReadFile( "/sdcard/mecanic.txt","UTF-8" )
  
    dlg = app.CreateListDialog( "Serviços", "retificaMotor,jogoRoda,trocaEmbreagem,retificaCabecote,caixaDirecao,limpBicoTbi,camber,caster,limpRegFreio,sangriaFreio,desempenoRoda,kitLift,higienizacao,limpArrefecimento,limpezaBico,kitAmortecedor,Amortecedor,Mola,trocaOleo,borrachaScap,abracadeiraScap,oleoCambio,lampadaFarol,valvulaPneu,lampadaSimples" );
    dlg.SetOnTouch( dlg_OnTouch )

app
    
    //Cria um tema tipo carbono
    theme = app.CreateTheme( "Dark" );
    theme.AdjustColor( -30, 0, 0 );
    theme.SetBackground( "/Res/drawable/pattern_carbon", "repeat" );
    theme.SetButtonOptions( "custom" );
    theme.SetButtonStyle( "#353535","#161616",2,"#222222",1,1,"#00E1B6" );
    theme.SetBtnTextColor( "#bbffffff" );
    theme.SetBackColor( "#99000000" );
    theme.SetDialogBtnColor( "#ff222222" );
    theme.SetDialogBtnTxtColor( "#ffffff" );
    theme.SetTitleHeight( 42 );
    app.SetTheme( theme );
   
    frontLay = app.CreateLayout( "Linear","Vcenter,FillXY" )
    //Cria layout linear, centralizado
    lay = app.CreateLayout( "Linear", "VCenter,FillXY" )
    
    //Cria layout horizontal para componentes de pecas
    layH = app.CreateLayout( "Linear", "Horizontal" )
    
    //Cria layout horizontal para componentes de veiculos
    layHo= app.CreateLayout( "Linear","Horizontal" )
    
    //Cria layout para componentes de rodape
    layQt = app.CreateLayout( "Linear","Horizontal" )
   
       //Cria botão para adicionar peças a lista
    btn = app.CreateButton("Modo comissão",0.5,-1, "Alum")
    btn.SetTextSize( 15 )
    btn.SetOnTouch(modoComissao)
    btn.SetMargins( 0.01, 0.1, 0.01, 0.01 )
    frontLay.AddChild(btn)
    
         //Cria botão para adicionar peças a lista
    btn = app.CreateButton("Modo checklist",0.5,-1, "Alum")
    btn.SetTextSize( 15 )
    btn.SetOnTouch()
    btn.SetMargins( 0.01, 0.1, 0.01, 0.01 )
    frontLay.AddChild(btn)
    
         //Cria botão para adicionar peças a lista
    btn = app.CreateButton("Add mecânico",0.5,-1, "Alum")
    btn.SetTextSize( 15 )
    btn.SetOnTouch(addMecanico)
    btn.SetMargins( 0.01, 0.1, 0.01, 0.01 )
    frontLay.AddChild(btn)
    
        //cria texto  para adicionar peca a lista
    txtMe= app.CreateText(mecanic,0.39)
    txtMe.SetMargins( 0.01, 0.02, 0.01, 0.01 )
    frontLay.AddChild( txtMe ) 
    
      //cria texto  para adicionar peca a lista
    txtMec= app.CreateTextEdit("",0.39)
    txtMec.SetHint( "Digite seu nome" )
    txtMec.SetMargins( 0.01, 0.02, 0.01, 0.01 )
    txtMec.SetOnEnter()
    txtMec.SetText("")
   
           //Cria botão para adicionar peças a lista
    btnCon = app.CreateButton("Confirme",0.5,-1, "Alum")
    btnCon.SetTextSize( 15 )
    btnCon.SetTextColor( "#22ff22" )
    btnCon.SetOnTouch(confMecanico)
    btnCon.SetMargins( 0.01, 0.02, 0.01, 0.01 )
    
          
    //cria texto  para adicionar peca a lista
    txtPec = app.CreateTextEdit("",0.39)
    txtPec.SetHint( "Digite a peça" )
    txtPec.SetMargins( 0.02, 0.11, 0.01, 0.01 )
    txtPec.SetOnEnter()
    txtPec.SetText("")
    layH.AddChild(txtPec)
    
    //Cria botão para adicionar peças a lista
    btn = app.CreateButton("Adicione peças",0.2,-1, "Alum")
    btn.SetTextSize( 15 )
    btn.SetOnTouch(addList)
    btn.SetMargins( -0.01, 0.1, 0.01, 0.01 )
    layH.AddChild(btn)
    
    //cria texto  para adicionar quantidade
    txtQtd = app.CreateTextEdit("",0.39)
    txtQtd.SetHint( "Digite quantidade" )
    txtQtd.SetMargins( -0.01, 0.11, 0.01, 0.01 )
    txtQtd.SetText("")
    layH.AddChild(txtQtd)
    
    //cria texto para adicionar veiculo
    txt = app.CreateTextEdit("",0.39)
    txt.SetMargins( 0.02, 0.025, 0.01, 0.01 )
    txt.SetOnEnter( )
    txt.SetHint( "Digite o veiculo" )
    txt.SetText("" )
    layHo.AddChild(txt)
    
    //cria botão para adicionar veiculo a lista
    btn = app.CreateButton("Adicione servicos",0.2,-1, "Alum")
    btn.SetMargins( -0.01, 0.025, 0.01, 0.01 )
    btn.SetTextSize( 15 )
    btn.SetOnTouch(btnOnTouch)
    layHo.AddChild(btn)
    
    //cria botao para add pecas
    txtPla = app.CreateTextEdit( "",0.38)
    txtPla.SetMargins( -0.01, 0.025, 0.01, 0.01 )
    txtPla.SetOnEnter()
    txtPla.SetHint( "Digite a placa" )
    txtPla.SetText( "" )
    layHo.AddChild( txtPla )
    
    //cria lista para mostrar conteudo
    lst = app.CreateList("",0.975,0.675 )
    lst.SetTextColor( "black" )
    lst.SetTextSize( 10 )
    lst.SetMargins( 0.015, 0.16, 0.01, 0.01 )
    lst.SetOnLongTouch()
    lst.SetBackColor( "white" )
    layQt.AddChild( lst )
    
    //cria lista para mostra quantidade
    lstQt = app.CreateList("",0.295,0.675 )
    lstQt.SetMargins( -0.003, 0.16, 0.01, 0.01 )
    lstQt.SetOnLongTouch()
    lstQt.SetBackColor( "black" )
    layQt.AddChild( )
    
    
    //cria texto para mostrar total
    txtTot = app.CreateText( "",7 )
    txtTot.SetTextSize( 18)
    txtTot.SetMargins(0.01, 0.785, 0.01, 0.01 )
    lay.AddChild( txtTot )
    
   
    
    //cria botao para excluir ultimo da lista
    btnEx = app.CreateButton("Apagar>",0.19,0.045, "Alum")
    btnEx.SetMargins( 0.4, 0.01, 0.01, 0.01 )
    btnEx.SetOnTouch(apagar )
    //btnEx.SetBackColor( "red" )
    lay.AddChild(btnEx )
    
    btnEx = app.CreateButton("Enviar",0.19,0.045, "Alum" )
    btnEx.SetMargins( 0.2, -0.054, 0.01, 0.01 )
    btnEx.SetOnTouch(enviarListaWhatsApp)
    //  btnEx.SetBackColor( "blue" )
    lay.AddChild(btnEx )
    
    //Add layout to app.
         app.AddLayout( frontLay )
 //   app.AddLayout( lay )
   // app.AddLayout( layQt)
   // app.AddLayout( layH )
   // app.AddLayout( layHo )
    carregar()
    }
    
    
    //###############################################
    
    
    //VARIAVEIS GLOBAIS
    
    //Variavel de contador de manipulacao
    var count = 0
    
    //Variavel de manipulacao do total
    var total = 0
    
    //Variavel de manipulacao da soma
    var soma = 0
    
    var multi = 0
  
    var price = 0
    
    var mecanic = app.ReadFile( "/sdcard/mecanic.txt","UTF-8" )
    //INICIO DE FUNCOES##################################
    
    
    
    //Funcao para adiciona itens a lista
    function addList(){
    multi=0
    //Acrescenta 1 a contagem
    count++
    
    //Condicao inicial para continuar contagem se contador for maior que 0
    if(count >=0){
     
    //Grava no arquivo o valor de contador
    count =  app.ReadFile( "/sdcard/contador.txt", "UTF-8")
    
    //Adicionar 1 a nova contagem maior que zero
    count++
    }
    //Variavel de texto campo pecas
    var txtPeg = txtPec.GetText()
    
    //Variavel de numero campo quantidade
    var txtQt   =  txtQtd.GetText()
    
    //Variavel de texto campo veiculo
    var txtVec = txt.GetText()
    
    //Variavel de numero campo placa
    var txtPl   =  txtPla.GetText()
    
    //Contante de preenchento define espaco entre peca e qtd
    const prech = 70
    const prec   =  50
    
    //Variavel subtrai tamanho das palavras de pecas e qtd do valor campo total
    var espaco = prech-(txtPeg.length+txtQt.length)
    
    //Variavel converte entrada em um numero
    var item = Number.parseInt(txtQt)
    
    //Total recebe os primeiros valores
    total = parseInt(soma)+item
    
    //Grava valor de total em arquivo para uso posterior
    app.WriteFile( "/sdcard/total.txt",total)
    
    //Grava a contagem para uso posterior
    app.WriteFile( "/sdcard/contador.txt",count )
    
    //Grava uma peca por arquivo com variacao de count
    app.WriteFile( "/sdcard/pecas"+count+".txt",txtPeg )
    
    //Grava um valor de qtd por arquiv
    app.WriteFile( "/sdcard/qtd"+count+".txt",txtQt )
    
    //Grava uma peca por arquivo com variacao de count
    app.WriteFile( "/sdcard/veiculo"+count+".txt",txtVec )
    
     //Grava um valor de qtd por arquiv
    app.WriteFile( "/sdcard/placa"+count+".txt",txtPl)
   
   //Condicao para servicos com valor de 50
   if(txtPeg == "retificaMotor"){
    app.WriteFile( "/sdcard/preco"+count+".txt", 50)
    }
   //Condicao para servicos de valor 30 
   else if(txtPeg == "jogoRoda"){
    app.WriteFile( "/sdcard/preco"+count+".txt", 30)
    }
    //Condicao para servicos com valor 20
   else if(txtPeg == "trocaEmbreagem" || txtPeg =="retificaCabecote" 
   || txtPeg == "caixaDirecao"){
    app.WriteFile( "/sdcard/preco"+count+".txt", 20)
    }
    //Condicao para servicos com valor 10
      else if(txtPeg == "camber" || txtPeg =="caster" 
   || txtPeg == "limpRegFreio" || txtPeg =="sangriaFreio"
   ||txtPeg == "higienizacao" || txtPeg =="kitLift" 
   || txtPeg == "desempenoRoda" || txtPeg =="limpArrefecimento"){
    app.WriteFile( "/sdcard/preco"+count+".txt", 10)
    }
    //Condicao para servicos com valor 7.50
    else if(txtPeg == "limpezaBico"){
    app.WriteFile( "/sdcard/preco"+count+".txt", 8)
    }
    //Condicao para servicos com valor 5
   else if(txtPeg == "kitAmortecedor" || txtPeg =="Amortecedor" 
   || txtPeg == "Mola" || txtPeg =="trocaOleo"){
    app.WriteFile( "/sdcard/preco"+count+".txt", 5)
    }
    //Condicao para servicos com valor 2
   else if(txtPeg == "borrachaScap" || txtPeg == "abracadeiraScap"
   || txtPeg == "oleoCambio" || txtPeg =="lampadaFarol"){
    app.WriteFile( "/sdcard/preco"+count+".txt", 2)
    }
    //Condicao para servicos com valor 1
   else if(txtPeg == "valvulaPneu" || txtPeg =="lampadaSimples"){
    app.WriteFile( "/sdcard/preco"+count+".txt", 1)
    }
    else{
     app.WriteFile( "/sdcard/preco"+count+".txt", 4)
    }
    //Adiciona os itens concatenados a lista
  //  lst.AddItem(txtPeg + "_".repeat(espaco)+txtQt+"("+txtQt*4+",00)")
    
    //Adiciona os itens concatenados a lista
  //  lst.AddItem(txtVec + "_".repeat(espaco)+txtPl)
    
    //Limpa o campo pecas
    txtPec.SetText( "" )
    
    //Limpa o campo qtd
    txtQtd.SetText( "" )
    
    //Limpa o campo pecas
    txt.SetText( "" )
    
    //Limpa o campo qtd
    txtPla.SetText( "" )
   
    
    //Chama a funcao carregar para atualizar os valores
     carregar()
    }
    
    
    
    //#############################################
    
    
    
    //Funcao para carregar valores pos fechamento do app
    function carregar(){
    
    //Remove todos os itens adicionas para adicionar atualizados
    lst.RemoveAll()
    
    //Recebe valor gravado de soma
    soma  = app.ReadFile("/sdcard/total.txt","UTF-8")
   
      
  
    //Variavel de novo contador para carregar o itens gravados
    var counts = app.ReadFile( "/sdcard/contador.txt", "UTF-8")
    
    //Carrega os itens por indices do arquivo gravado pecas
    for(i=0;i<=counts;i++){
    
    
    //Carregas pecas hravadas
    var pecas = app.ReadFile( "/sdcard/pecas"+i+".txt","UTF-8" )
    
    //Carrega qtd gravadas
    var qtd = app.ReadFile( "/sdcard/qtd"+i+".txt", "UTF-8")
   
    
    //Carregas pecas hravadas
    var veic = app.ReadFile( "/sdcard/veiculo"+i+".txt","UTF-8" )
    
    //Carrega qtd gravadas
    var plac = app.ReadFile( "/sdcard/placa"+i+".txt", "UTF-8")
    
    
    price =  app.ReadFile( "/sdcard/preco"+i+".txt", "UTF-8")
    
    var volat=price*qtd
    
    
    multi+=volat
   
   
     
        txtTot.SetText("R$"+multi+",00" )
    //nova constante para tamanho de espacos de itens concatenados
    const prech = 70
    
    const prec = 75
    
    //Nova variavel para calcular os espaco
    var espaco = prech-(pecas.length+qtd.length)
    
    var espac   = prec-(veic.length+plac.length)
    
    if(veic == "" && plac == ""){
   
    //Adicionar valores gravados e concatenados a lista
    lst.AddItem(pecas +"_".repeat(espaco)+qtd+"("+price*qtd+",00)" )
    }
  
    else{
  
    lst.AddItem("("+veic.toUpperCase()+"*".repeat(espac)+plac.toUpperCase()+")"+"\n"+"\n"+pecas +"_".repeat(espaco)+qtd+"("+price*qtd+",00)" )
    
    }
    
    }
    lst.RemoveItemByIndex( 0 )
    }
    
    
    
    //##############################################
    
    
    
    //Funcao para apagar todos os itens e contadores
    function apagar(total){
    
    //Lê o contador 
    var counts = app.ReadFile( "/sdcard/contador.txt", "UTF-8")
    
    //Grava o valor 0 a variavel soma 
    app.WriteFile( "/sdcard/total.txt", 0)
    
    //Carrega o valor 0 a variavel
    soma = app.ReadFile("/sdcard/total.txt","UTF-8")
    
    //Inicia a iteracao para zerar os arquivos
    for(i=0;i<=counts;i++){
    
    //Apaga os arquivos pecas 
    app.DeleteFile( "/sdcard/pecas"+i+".txt" )
    
    app.DeleteFile( "/sdcard/veiculo"+i+".txt")
    
    app.DeleteFile( "/sdcard/placa"+i+".txt")
 
    app.DeleteFile( "/sdcard/preco"+i+".txt", "UTF-8")   
    //Remove os itwns da lista
    lst.RemoveAll()
    
    //Reseta o contador 
    app.WriteFile( "/sdcard/contador.txt",0)
    
    //Reseta a variavel soma
    app.WriteFile( "/sdcard/soma.txt",0 )
    
    //Escreve novo valor zerado a Total
    txtTot.SetText("R$0,00" )
    }
    }
    
    function enviarListaWhatsApp() {
    
    //Carrega o valor total geral para enviar    
    var soma  = app.ReadFile("/sdcard/total.txt","UTF-8")
    
    //Cria objeto data para enviar data 
    const data = new Date()
    
    //Salva o nome do mecanico
    
    
    //Armazena uma mensagem com algumas informacoes(mecanico, data e total)
    var mensagem = "Aqui esta a comissao de hoje:\n"+"Data:"+data.getDate()+
    "/"+(data.getMonth()+1)+"/"+data.getFullYear()+"\n"+"Mecânico:"+mecanic+"\n"+
    "A soma do dia é:"+"R$"+multi+",00"+"\n\n";
    
    //Carrega o contador total para correr a iteração
    var counts = app.ReadFile("/sdcard/contador.txt", "UTF-8");
    
    //Começa a iteração
    for (var i = 1; i <= counts; i++) {
    
    //Para prencher espaços varios dentro de 10 espaços
    const prech = 20
    
    //Carrega os itens peças
    var pecas = app.ReadFile("/sdcard/pecas"+i+".txt", "UTF-8");
    
    //Carrega os itens quantidade
    var qtd = app.ReadFile("/sdcard/qtd" + i + ".txt", "UTF-8");
    
    //Carrega os itens veiculos
    var veiculo = app.ReadFile("/sdcard/veiculo" + i + ".txt", "UTF-8");
    
    //Carrega os itens veiculo
    var placa = app.ReadFile("/sdcard/placa" + i +".txt", "UTF-8");
    
    var price =  app.ReadFile( "/sdcard/preco"+i+".txt", "UTF-8")
    //Nova variavel para calcular os espaco
    var espaco = prech-(pecas.length+qtd.length)
    
    //Condição para não imprimir itens vazios
    if(veiculo == "" && placa == ""){
   
    //Escreve item peças se condição for aceita
     mensagem += qtd+"-"+pecas+"*".repeat(espaco)+"-R$"+price*qtd+",00"+"\n";
    }
    else{
        
    //Escreve veiculo e peças se condição não for aceita    
    mensagem += veiculo.toUpperCase()+"*".repeat(espaco)+placa.toUpperCase()+"\n";
    mensagem += qtd+"-"+pecas+"*".repeat(espaco)+"-R$"+price*qtd+",00"+"\n";
    }
    
    }
    
    // "número de telefone" do destinatário
    var numero = "+55 35 9879-5433";
    // Substitua "mensagem" pela mensagem que você deseja enviar
    var uri = "whatsapp://send?phone=" + numero + "&text=" + encodeURIComponent(mensagem);
    app.OpenUrl(uri);
    }
    
    
    
    function btnOnTouch( item )
{
 dlg.Show()
}

    function dlg_OnTouch( item )
{
 txtPec.SetText( item )
}

function modoComissao(){
    app.AddLayout( lay )
    app.AddLayout( layQt)
    app.AddLayout( layH )
   app.AddLayout( layHo )
   app.RemoveLayout( frontLay )
   
}

function addMecanico(){
 frontLay.AddChild(txtMec)
  frontLay.AddChild(btnCon)
}

function confMecanico(){
 var name = txtMec.GetText()
 app.WriteFile( "/sdcard/mecanic.txt",name)
 frontLay.RemoveChild(txtMec)
 frontLay.RemoveChild( btnCon )
}