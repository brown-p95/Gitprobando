function analizar(){
    var frase = document.getElementById("frase").value;
    var numCaracteres = frase.length;
   if(frase!=""){
       alert("Se ha escrito algo: hay "+numCaracteres+" caracteres");
       
       var con=0;
       for(var i=0; i<frase.length; i++){
           
               if(frase[i].length == 'a' || 'e' || 'i'){
                   cont++;
               } 
               
           }
         alert("Se ha escrito algo: hay "+con+" caracteres");
       
    }
    else{
        alert("Sigue vacio");
    }
}
  
       
    
 
    
    

    
    
