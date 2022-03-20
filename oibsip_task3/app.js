const calculate= () =>{
    const num=document.getElementById('temperature').value;
    const select=document.getElementById('tempconvert');
    const tempvalue=tempconvert.options[select.selectedIndex].value;
    const celtoFah=(celsius)=>{
        let fahrenheit=(celsius*9/5)+32;
        return fahrenheit;
    }
    const fahtocel=(fahrenheit)=>{
        let celsius=(fahrenheit-32)*5/9;
        return celsius;
    }

    if(tempvalue=='celsius')
    {
        output=celtoFah(num);
        let res=document.getElementById('output').innerHTML=`${output} &degF`;
        //console.log(output);
    }
    else{
        output=fahtocel(num);
        document.getElementById('output').innerHTML=`${output} &degC`;
    }
}
