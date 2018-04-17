<div class="container">
    <h1>Altcoin List</h1>
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-4" id="erc20_token_list">
            <input type="text" id="myAltcoinFilter" onkeyup="myFunction()" placeholder="Search for names.." title="Type in a name">
            <ul id="myAltcoinList" class="myUL">
                @include('altcoinlist')
            </ul>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-8" >
            <form >
                <label for="standard_address">Address:</label>
                <input type="text" id="altcoin_address" name="" placeholder="0xa12">

                <label for="standard_balance">Balance</label>
                <input type="text" id="altcoin_balance" name="" readonly>
                <label for="standard_price">Price</label>
                <input type="text" id="altcoin_price" name="" readonly>

                <button type="button" class="registerbtn" id="altcoin_get_balance">Get Balance</button>
            </form>
        </div>
    </div>
    <hr>
</div>

