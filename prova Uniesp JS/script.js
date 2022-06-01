var toogle = false
var x = document.getElementsByClassName("caixa")
function toogleCheckbox(){
    if(toogle){
        for(var i = 0; i < x.length; i++){
            x[i].checked = false
        }
        toogle = false
    } else{
        for(var i = 0; i < x.length; i++){
            x[i].checked = true
        }
        toogle = true
    }
}

function save(){
    var counter = 0
    for(var i = 0; i < x.length; i++){
        if(x[i].checked){
            counter += 1
        }
    }
    alert(counter)
}