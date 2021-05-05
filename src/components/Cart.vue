<template>
<main class="main-signIn" id="container">
      <div class="sign">
      </div>
      <div class="box">
          <div class="box-payment-1">
            <div class="content-1">
                <label> Datas </label>
                <div class="infos">
                  <p>Adress </p>
                  <p> <input type="text" placeholder="Enter your Adress"> </p>
                  <p>City</p>
                  <p> <input type="text" placeholder="Enter your City"> </p>
                  <p> Other Informations (Optionnal)</p>
                  <p> <input type="text" placeholder="ex : door 61"> </p>
                </div>
              </div>
              <div class="flex-box-payement-1">
                <div class="content-1">
                  <img src=".././assets/mastercard.png">
                  <p>Code </p>
                  <p> <input type="text" placeholder="Enter your Code"> </p>
                  <p>Date</p>
                  <p> <input type="text" placeholder="Enter the expiration Date"> </p>
                  <p>Cryptogram</p>
                  <p> <input type="text" placeholder="Enter the Cryptogram"> </p>
                  <p> <input type="submit" class="button btn-nav" value="Register card"> </p>
                </div>
                <div class="content-2">
                  <img src=".././assets/paypal.png">
                  <p> <input type="submit" class="button btn-nav" value="Continue on Paypal"> </p>
                </div>
              </div>
        </div>
        <div class="box-payment-2">
          <div class="content-2">
            <label> Cart </label>
            <div class="content-2-bis">
              <div class="shopping">
                <p> - Rolex de luxe <span> 1.45 euros</span> </p> 
                <p> - T-max 530 <span> 1,47 euros </span> </p> 
              </div>
            </div>
            <div class="price">
              <label> PRICE </label>
              <p> TOTAL 2,92 euros  </p> 
            </div>
            <div class="tip">
              <p> Add tip for the deliver : <input type="text" placeholder="0,00 $">  </p> 
            </div>
          </div>
              <label> PAY WITH </label>
              <div class="flex-box-payement-2">
                <div class="content-4">
                  <p> <input type="submit" class="button btn-nav" value="MY WALLET"> </p>
                </div>
                <div class="content-5">
                  <p> <input type="submit" class="button btn-nav" value="MY REGISTRED CARD"> </p>
                </div>
              </div>
        </div>
      </div>
</main>
</template>