function getFirstAttributeNameAndValue() {

    var firstButtonElement = document.getElementsByTagName('BUTTON')[0];

    var firstAttributeValue = firstButtonElement.attributes[0].value;
    var firstAttributeName = firstButtonElement.attributes[0].name;

    document.getElementById('demo').innerHTML = " <strong>First Attribute Value : </strong> " + firstAttributeValue +
        "<strong> First Attribute Name</strong> :" + firstAttributeName;


}


function switchOn(){

    document.getElementsByTagName('IMG')[0].getAttributeNode('src').value ='on.png';


}

function toogle(){
    var imgStatus = document.getElementById('toggleImg').getAttributeNode('src').value;

    if(imgStatus == 'off.png'){
        document.getElementById('toggleImg').getAttributeNode('src').value = 'on.png';
    }else{
        document.getElementById('toggleImg').getAttributeNode('src').value = 'off.png';
    }

}

function isSpecifed(){

var is = document.getElementById('toggleImg').getAttributeNode('onclick').specified;

if(is == false){

    document.getElementById('toggleImg').getAttributeNode('onclick').value ='toggle()';
}

}

function writeAllattributeNameAndValue() {
    
    var divEl = document.getElementById('emre');
    
    var text = '';

    for (var i=0; i<divEl.attributes.length; i++){
        text += '<strong> Attribute Name : </strong> ' + divEl.attributes[i].name+'<br>'+
        '<strong> Attribute Value : </strong> '+divEl.attributes[i].value+'<br>';
    }
    divEl.innerHTML = text;
}