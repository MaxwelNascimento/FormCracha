// Puxando variaveis pela url

let $_GET=[];
window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(a,name,value){$_GET[name]=value;});

// Testando no console

console.log($_GET['nome'].replaceAll('+',' ')); 
console.log($_GET['dtnascimento']); 
console.log($_GET['cpf']);
console.log($_GET['funcao']);

// Puxar por elemento html ex:  <h1></h1> <p></p> <span></span>

// document.getElementById("textoo").innerHTML="<strong>"+$_GET['nome'].replaceAll('+',' ')+"</strong>";
document.getElementById("nome2").value=$_GET['nome'].replaceAll('+',' ');
document.getElementById("dtnascimento2").value=$_GET['dtnascimento'];

// Puxar valores do cpf com  todos os caracteres
document.getElementById("cpf2").value=$_GET['cpf'];

// document.getElementById("cpf2").value=$_GET['cpf'].replaceAll('.', '').replaceAll('-','');
document.getElementById("funcao2").innerHTML="<option>"+$_GET['funcao']+"</option>";
