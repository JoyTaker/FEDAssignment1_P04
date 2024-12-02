
const promoInput = document.getElementById('codeID');
const applyButton = document.getElementById('applyID');
const promoDetails = document.getElementById('promoDetails');


document.getElementById("orderID").addEventListener("click", function(){
    window.location.href = "../Order Meal Page/index.html";
})

applyButton.addEventListener("click", function(){
    const promoCode = promoInput.value.trim(); 

    if (promoCode === 'budgetBurgerz123') {
        promoDetails.innerHTML = `
            <p style="color: white; font-weight: bold; background:red; width: 30vw;
            border-radius: 20px; padding-top: 1em; padding-bottom: 1em; text-align:center; 
            position:relative; left: -58vw; top:-55vh">
            Promo Code Activated!
            You've unlocked a:<br> <b style="font-size: 30px; color: yellow;">10% Discount on your Order!</b></p>
        `;
    } else {
        promoDetails.innerHTML = `
            <p style="color: red; font-weight: bold; position:relative; left: -58vw; top:-55vh">Invalid Promo Code!<br>
           Please try again or check the code entered.</p>
        `;
    }
});


