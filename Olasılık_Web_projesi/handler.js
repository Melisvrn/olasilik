let veri = [5,11,22,5,6,4,654,76,76,4,32,55,776,986,4,54,34,5,11,22,5,6,4,654,4,32,55,776];
$(document).ready(function(){

     $("#selectMod").on("click",function(){
        $("#mod").fadeToggle(); #sure eklenebiliyor parantez içine
        //$('#mod').show();
    
        $('#modsonuc').text('Sonuc:' + modHesapla(veri));
    });

    $("#selectMedyan").on("click",function(){
        $("#medyan").fadeToggle();
        $('#medyansonuc').text('Sonuç: ' + medyanHesapla(veri));
    });

    $("#selectSapma").on("click",function(){
        $("#sapma").fadeToggle();
        $("#sapmasonuc").text('Sonuç: ' + standartSapmaHesapla(veri) + ', yaklaşık:' + Math.round(standartSapmaHesapla(veri)));
    });

    $("#selectVaryans").on("click",function(){
        $("#varyans").fadeToggle();
        $("#varyanssonuc").text('Sonuç: ' + varyansHesapla(veri) + ', yaklaşık: ' + Math.round(varyansHesapla(veri)));
    });

    $("#selectAOrt").on("click",function(){
        $("#aort").fadeToggle();
        $("#aortsonuc").text('Sonuç: ' + aritmetikOrtHesapla(veri) + ', yaklaşık: ' + Math.round(aritmetikOrtHesapla(veri)));
    });

    $("#selectHOrt").on("click",function(){
        $("#hort").fadeToggle();
        $('#hortsonuc').text('Sonuç: ' + harmonikOrtHesapla(veri) + ', yaklaşık: ' + Math.round(harmonikOrtHesapla(veri)));
    });

    $("#selectGOrt").on("click",function(){
        $("#gort").fadeToggle();
        $("#gortsonuc").text('Sonuç: ' + geometrikOrtHesapla(veri) + ', yaklaşık: ' + Math.round(geometrikOrtHesapla(veri)));
    });

    $("#selectOSapma").on("click",function(){
        $("#osapma").fadeToggle();
        $('#osapmasonuc').text('Sonuç: ' + ortalamaMutlakSapmaHesapla(veri) + ', yaklaşık: ' + Math.round(ortalamaMutlakSapmaHesapla(veri)));
    });
    
    $("#selectDKat").on("click",function(){        
        $("#dkatsayısı").fadeToggle();
        $("#dkatsayısısonuc").text('Sonuç: ' + degiskenKatsayisiHesapla(veri) + ', yaklaşık: ' + Math.round( degiskenKatsayisiHesapla(veri)));
    });

    $("histogram chart").html(histogramOlustur(veri));

    /* ilk sayfadan diziyi alma ve  ikinci sayfada sarı kutuya yazdırma*/ 
    $("#numberData").on("click",function(){
        var nData = $("data").val();
        $("#deneme").text(nData);
    });

});


