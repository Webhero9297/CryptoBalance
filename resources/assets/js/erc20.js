var BigNumber = require('bignumber.js');
var balance = require('crypto-balances');
var coinmktApi = require('node-coinmarketcap-api');

var erc20 = require('./token.json');
//erc20_token = erc20.erc20_tokens;
const etherscanApiKey = 'WFZ7MNHJ64M5N1IWWR9FT84A5IZATEDGIN';
App = {
    erc20_tokens: erc20.erc20_tokens,
    init: function (callback) {
        callback(this.getSelfProperties());
    },
    getSelfProperties : function() {
        return {
            erc20_tokens: this.erc20_tokens
        };
    },
    getAltcoinBalance: function(address, callback) {
        balance(address, function(error, result) {
            callback(result);
        });  
    },
    getErc20TokenBalance : function( contractAddress, walletAddress, decimals, callback ) {
        var url = 'https://api.etherscan.io/api';
        var params = { module: 'account', action: 'tokenbalance', contractaddress : contractAddress, address: walletAddress, tag: 'latest', apikey: etherscanApiKey };
        $.getJSON(url, params, function(resp){
            if ( resp.message == "OK" ) {
                _balance = BigNumber( resp.result );
                x = BigNumber(10);
                _v = _balance.dividedBy(x.exponentiatedBy(decimals));
                callback(_v.toNumber());
            }
            else{
                callback(0);
            }
        });
    }
}

Number.prototype.formatMoney = function(c, d, t){
    var n = this,
        c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
        j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};
//console.log(erc20.erc20_tokens);