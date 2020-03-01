let schemeType = document.querySelector("#scheme").value;
let duration = document.querySelector("#duration");
let instAmt = document.querySelector("#instAmt");
let currGoldPrice = document.querySelector("#goldPrice");
let btnSubmit = document.querySelector("#btn_submit");
let btnClear = document.querySelector("#btn_clear");
let totRes = document.querySelector("#totalamount_res");
let accRes = document.querySelector("#acc_res");

scheme.addEventListener("change", e => {
    schemeType = e.target.value;
});

let displayDuration = () => {
    if (schemeType === "Golden10") {
        return 10;
    } else if (schemeType === "Gold") {
        return 12;
    } else {
        return 11;
    }
};

duration.addEventListener("focus", () => {
    duration.value = displayDuration();
});

let validateAmount = () => {
    let amt = parseInt(instAmt.value);
    if (schemeType === "Golden10") {
        if (amt < 2001 || amt > 10000) {
            alert(
                "Invalid Amount. Enter a valid amount fo the scheme type you have chosen"
            );
            instAmt.value = "";
            currGoldPrice.addEventListener("focusin", instAmt.focus());
        }
    } else if (schemeType === "Gold") {
        if (amt < 1001 || amt > 5000) {
            alert(
                "Invalid Amount. Enter a valid amount fo the scheme type you have chosen"
            );
            instAmt.value = "";
            currGoldPrice.addEventListener("focusin", instAmt.focus());
        }
    } else {
        if (amt < 501 || amt > 25000) {
            alert(
                "Invalid Amount. Enter a valid amount fo the scheme type you have chosen"
            );
            instAmt.value = "";
            currGoldPrice.addEventListener("focusin", instAmt.focus());
        }
    }
};
instAmt.addEventListener("focusout", validateAmount);

let calculateGoldSavings = () => {
    if (
        !duration.value == "" ||
        !instAmt.value == "" ||
        !currGoldPrice.value == ""
    ) {
        document.querySelector(".res").style.display = "block";
        if (schemeType === "Golden10") {
            let amt = parseInt(instAmt.value);
            let totalAmt = amt * 10;
            let calc =
                (totalAmt + totalAmt * (25 / 100)) /
                parseInt(currGoldPrice.value);
            let res = Math.round(calc);
            totRes.innerHTML = totalAmt;
            accRes.innerHTML = res;
        } else if (schemeType === "Gold") {
            let amt = parseInt(instAmt.value);
            let totalAmt = amt * 12;
            let calc =
                (totalAmt + totalAmt * (20 / 100)) /
                parseInt(currGoldPrice.value);
            let res = Math.round(calc);
            totRes.innerHTML = totalAmt;
            accRes.innerHTML = res;
        } else {
            let amt = parseInt(instAmt.value);
            let totalAmt = amt * 11;
            let calc =
                (totalAmt + totalAmt * (20 / 100)) /
                parseInt(currGoldPrice.value);
            let res = Math.round(calc);
            totRes.innerHTML = totalAmt;
            accRes.innerHTML = res;
        }
    }
};
btnSubmit.addEventListener("click", calculateGoldSavings);

let reset = () => {
    document.querySelector(".res").style.display = "none";
    duration.value = "";
    instAmt.value = "";
    currGoldPrice.value = "";
};
btnClear.addEventListener("click", reset);
