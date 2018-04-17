var contract_address = undefined;
var contract_decimals = 18;
var erc20_name = '';
var coin_list = ['BTC', 'ETH', 'XRP', 'LTC', 'DASH'];
var selected_altcoin = undefined;
$(document).ready(function(){
    App.init(function(AppInitData){
        initERC20TokenList(AppInitData.erc20_tokens);
    });

    $('#registerbtn').click(doOnGetERC20StandardBalance);
    $('#altcoin_get_balance').click(doOnGetAltcoinBalance);
    $('.altcoin').click(doOnClickAltcoinItem);
});
function doOnClickAltcoinItem(event) {
    $('.altcoin').removeClass('a-active');
    $(event.target).addClass('a-active');
    selected_altcoin = $(event.target).attr('coin');
}
function initERC20TokenList(erc20_tokens) {
    liHTML = '';
    for( i in erc20_tokens ) {
        token = erc20_tokens[i];
        liHTML += '<li><a href="#" class="a-erc20-token" addr="'+token.addr+'" decimals="'+token.decimals+'" onclick="doOnSelectToken(this)">'+token.name+'</a></li>';
    }
    $('#myUL').html(liHTML);
}
function doOnGetERC20StandardBalance() {
    var address = $('#standard_address').val();

    if ( contract_address == undefined ) {
        alert('Sorry, Please choice erc20 token.');
        return;
    }
    $('#standard_balance').val('Please wait while getting balance...');
    App.getErc20TokenBalance(contract_address, address, contract_decimals, function(balance){
        $('#standard_balance').val(balance+erc20_name);
    })

}
function doOnGetAltcoinBalance() {
    var _address = $('#altcoin_address').val();
    if ( isInArray(selected_altcoin, coin_list) ) {
        App.getAltcoinBalance(_address, function(resp){
            if ( resp[0] != undefined ) {
                $('#altcoin_balance').val(resp[0].quantity+resp[0].asset);
                getPrice(resp[0].quantity, selected_altcoin, 'USD');
            }
            else{
                $('#altcoin_balance').val('error');
            }
            console.log(resp);
        });
    }
    if ( selected_altcoin == "BCH" ) {
        $.getJSON('https://blockexplorer.com/api/addr/'+_address+'/balance', function(resp){
            $('#altcoin_balance').val(resp+selected_altcoin);
            getPrice(resp, selected_altcoin, 'USD');
        });
    }
}
function getPrice(balance, coinSymbol, price='USD'){
    var url = "https://min-api.cryptocompare.com/data/price?fsym="+coinSymbol+"&tsyms="+price;
    $.getJSON(url, function(resp){
        _amount = resp[price]*1 * balance;
console.log(resp[price]);
        $('#altcoin_price').val(_amount+price);
    })
}
function doOnSelectToken(obj) {
    $('.a-erc20-token').removeClass('a-active');
    $(obj).addClass('a-active');
    contract_address = $(obj).attr('addr');
    contract_decimals = parseInt($(obj).attr('decimals'));
    erc20_name = obj.innerHTML;
}

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementsByClassName("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementsByClassName("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}
function isInArray(value, array) {
    return array.indexOf(value) > -1;
}