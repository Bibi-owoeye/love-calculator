function check(){
    if (one.value == '' || two.value == ''){
        noInput.style.display = 'block'
        showMe.style.display = 'none'
        console.log('abeg add something');
    }else{
        if((one.value =='Bibi' && two.value =='Bolu') || (one.value =='Bolu' && two.value =='Bibi') ){
            showMe.innerHTML = `100%`
        }else{
            noInput.style.display = 'none'
            showMe.style.display = 'block'
        var Check = Math.round(Math.random()*100);
        showMe.innerHTML = `${Check}%`
        document.getElementById('one').value = ""
        document.getElementById('two').value = ""
        document.getElementById('showMe').value = ""
        }
        
    }
}