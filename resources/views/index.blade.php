@extends('layouts.app')
<!--  -->
@section('content')
<div class="container">
    <div class="tab">
        <button class="tablinks" onclick="openCity(event, 'Coin')">AltCoin</button>
        <button class="tablinks" onclick="openCity(event, 'ERC20')">ERC20</button>
    </div>

    <div id="Coin" class="tabcontent visible">
        @include('altcoin')
    </div>

    <div id="ERC20" class="tabcontent">
        @include('erc20')
    </div>

</div>
<script src="{{ asset('./js/index.js') }}" defer></script>
@endsection
