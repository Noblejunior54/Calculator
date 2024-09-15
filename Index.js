var val=document.getElementById("display");
function Add(v){
  val.value=val.value+v;
}

function clr(){
  val.value=""
}

function exe(){
  val.value=eval(val.value);
}


//my delete button but am not using it
function del(){
  val.value=substr(0,val.lenght-1)
}
