
(function start() {

    const cardHolderName = document.getElementById('cardholder_name');
    const cardNumber = document.getElementById("card_number");
    const month = document.getElementById("month");
    const year = document.getElementById("year");
    const secretCode = document.getElementById("secret-code");
    const buttonReset = document.getElementById("button-reset");
    const buttonSubmit = document.getElementById("button-submit");
    const approved = document.getElementById("approved");
    const bgWhite = document.getElementById("bg-white");
    const errorTextCardHolderName = document.querySelector('.error-text-cardholder-name');
    const errorTextCardNumber = document.querySelector('.error-text-card-number');
    const errorTextDate = document.querySelector('.error-text-date');
    const errorSecretCode = document.querySelector(".error-text-secret-code");
    const inputs = document.querySelectorAll("input");
    const numberCard = document.getElementById("numberCard");
    const Name = document.getElementById("name");
    const Data = document.getElementById("date");
    const Code = document.getElementById("code");




    //Restrict input(Cardholder Name) for spaces and text  only.
    [cardHolderName].forEach((input) =>{
        cardHolderName.addEventListener("input", () => {
            Name.innerHTML = cardHolderName.value;
        });

        input.addEventListener("input", function() {
        function espacesAndLetterOnly(chain) {
            return /^[a-zA-Z\s]+$/.test(chain);
        }

        if (!espacesAndLetterOnly(this.value)) {
        this.value = this.value.replace(/[^a-zA-Z\s]+/g, "");
        }

        });
    });
    // Restric input in the card number numbers only and add spaces every four characters.
    [cardNumber].forEach((input) =>{     
        input.addEventListener("input", function (){
            this.value = this.value.replace(/[^0-9]/g, "");
            if (this.value !== "") {
              const result = this.value.match(/.{1,4}/g).join(" "); 
              this.value = result; 
            // Add values in the number card.
              numberCard.innerHTML = this.value;
    }});
    });


// Restrict input to numbers only.

    [month, year].forEach((input) =>{
        input.addEventListener("input", function (){
            this.value = this.value.replace(/[^0-9]/g, "");
            //Add values in the month and year card.
            Data.innerHTML = (month.value + "/" + year.value);
        });
    });

    [secretCode].forEach((input) =>{
        input.addEventListener("input", function (){
            this.value = this.value.replace(/[^0-9]/g, "");
            //Add values in the cvc card.
            Code.innerHTML = this.value;
        });
    });

    //Validation the complete form.
    function validation(){
        const cardNumber1 = parseInt(cardNumber.value, 10);
        const month1 = parseInt(month.value, 10);
        const year1 = parseInt(year.value, 10);
        const secretCode1 = parseInt(secretCode.value, 10);
        const currentYear = new Date();


        // Reset error messages and styles.

        function resertError(){
            errorTextCardHolderName.textContent = "";
            errorTextCardNumber.textContent = "";
            errorTextDate.textContent = "";
            errorSecretCode.textContent = "";
            inputs.forEach((input) => {
                input.style.borderColor = "var(--Light-grayish-violet)";
            });
        }

        resertError();

        let hasError = false;

        // Check if the every entered is valid.

        if (isNaN(cardNumber1)){
            errorTextCardNumber.textContent = "Can't be blank";
            cardNumber.style.borderColor = "var(--Red-inputs)";

            hasError = true;
        }

        if (cardNumber.value.length > 0 && cardNumber.value.length < 19){
            errorTextCardNumber.textContent = "Insert the complete card number";
            cardNumber.style.borderColor = "var(--Red-inputs)";

            hasError = true;
        }

        if (isNaN(month1)){
            errorTextDate.textContent = "Can't be blank";
            month.style.borderColor = "var(--Red-inputs)";

            hasError = true;
        }
        if (month1 > 0 && month1 > 12 ){
            errorTextDate.textContent = "Insert a valid month";
            month.style.borderColor = "var(--Red-inputs)";

            hasError = true;
        }
        if (isNaN(year1)){
            errorTextDate.textContent = "Can't be blank";
            year.style.borderColor = "var(--Red-inputs)";

            hasError = true;
        }

        if (year1 < currentYear.getFullYear() || year1 > 2050){
            errorTextDate.textContent = "Insert a valid year";
            year.style.borderColor = "var(--Red-inputs)";

            hasError = true;
        }
        
        if (isNaN(secretCode1)){
            errorSecretCode.textContent = "Can't be blank";
            secretCode.style.borderColor = "var(--Red-inputs)";

            hasError = true;
        }
        if (secretCode.value.length < 3 && secretCode.value.length > 0 ){
            errorSecretCode.textContent = "Insert the complete secret code";
            secretCode.style.borderColor = "var(--Red-inputs)";

            hasError = true;
        }

        if (cardHolderName.value == 0){
            errorTextCardHolderName.textContent = "Can't be blank";
            cardHolderName.style.borderColor = "var(--Red-inputs)";

            hasError = true;
        }

        if (hasError) {
            return;
        }

        else{
            // Going to the success confirmation page and reset inputs.
            bgWhite.style = "display: none";
            approved.style = "display: grid";
            document.getElementById('cardholder_name').value = "";
            document.getElementById("card_number").value = "";
            document.getElementById("month").value = "";
            document.getElementById("year").value = "";
            document.getElementById("secret-code").value = "";
            document.getElementById("numberCard") = "";
            };
   
    };


        // // Working in loop.
        // for (var i = 0; i < inputs.length; i++) {
        //     inputs[i].addEventListener("input", validation);
        // };



        buttonSubmit.addEventListener("click", validation);

        // Back to the form.
        buttonReset.addEventListener("click", () =>{
            bgWhite.style = "display: flex";
            approved.style = "display: none";
        });

})();






