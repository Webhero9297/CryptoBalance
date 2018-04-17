<div class="container">
    <h1>ERC20 Token List</h1>
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-4" id="erc20_token_list">
            <input type="text" id="myInput" class="myInput" onkeyup="myFunction()" placeholder="Search for names.." title="Type in a name">
            <ul id="myUL" class="myUL">
            </ul>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-8" >
            <form >
                <label for="standard_address">Address:</label>
                <input type="text" id="standard_address" name="address" placeholder="0xa12">

                <label for="standard_balance">Balance</label>
                <input type="text" id="standard_balance" name="balance" readonly>

                <button type="button" class="registerbtn" id="registerbtn">Get Balance</button>
            </form>
        </div>
    </div>
    <hr>
</div>



