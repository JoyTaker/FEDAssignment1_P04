// Get references to the elements
const promoInput = document.getElementById('codeID');
const applyButton = document.getElementById('applyID');
const promoDetails = document.getElementById('promoDetails');

// Add an event listener to the button
applyButton.addEventListener('click', function () {
    const promoCode = promoInput.value.trim(); // Get the trimmed value of the input

    // Check the promo code
    if (promoCode === 'budgetBurgerz123') {
        // Show the promotion details
        promoDetails.innerHTML = `
            <p style="color: white; font-weight: bold; background:red; width: 30vw;
            border-radius: 20px; padding-top: 1em; padding-bottom: 1em; text-align:center;">Promo Code Activated!
            You've unlocked a:<br> <b style="font-size: 30px; color: yellow;">10% Discount on your Order!</b></p>
        `;
    } else {
        // Show an error message
        promoDetails.innerHTML = `
            <p style="color: red; font-weight: bold;">Invalid Promo Code!</p>
            <p>Please try again or check the code entered.</p>
        `;
    }
});