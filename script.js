const calculateButton = document.querySelector('.calculate');
const clearButton = document.querySelector('.clear');
const totalFeesInput = document.querySelector('#totalFees');
const scholarshipAmountInput = document.querySelector('#scholarshipAmount');
const categoryDiv = document.querySelector('#category')
const info = document.querySelector('#info');
const error = document.querySelector('#error');
const schorlarshipDisplay = document.querySelector('#scholarship');
const houseHoldDisplay = document.querySelector('#houseHold');
const totalLoanDisplay = document.querySelector('#totalLoan');
const feesLoanDisplay = document.querySelector('#feesLoan');
const upkeepDisplay = document.querySelector('#upkeep');
const schorlarshipDisplay_ = document.querySelector('#scholarship_');
const houseHoldDisplay_ = document.querySelector('#houseHold_');
const totalLoanDisplay_ = document.querySelector('#totalLoan_');
const feesLoanDisplay_ = document.querySelector('#feesLoan_');
const upkeepDisplay_ = document.querySelector('#upkeep_');

let totalLoan = 0;
let feesLoan = 0;
let houseHold = 0;
let bandCategory = 0;
let upkeepLoan = 0;

calculateButton.addEventListener('click', function() {
    clear();
    if ((totalFeesInput != null) && (scholarshipAmountInput != null )) {
        let scholarshipAmountInput_ = scholarshipAmountInput.value;
        let totalFeesInput_ = totalFeesInput.value;

        if((isScholarshipNumber(scholarshipAmountInput_)) && (isFeesNumber(totalFeesInput_))){
            let totalFees = parseFloat(totalFeesInput_);
            const scholarship = parseFloat(scholarshipAmountInput_);

            bandCategory = (scholarship * 100) / totalFees;
        if ((bandCategory == 70) || (bandCategory == 60) || (bandCategory == 50) || (bandCategory == 40) || (bandCategory == 30)) {
            switch (bandCategory) {
                case 70:
                    upkeepLoan = 60000;
                    feesLoan = (totalFees * 25) / 100;
                    totalLoan = feesLoan + upkeepLoan;
                    houseHold = (totalFees * 5) / 100;
                    break;
                case 60:
                    upkeepLoan = 55000;
                    feesLoan = (totalFees * 30) / 100;
                    totalLoan = feesLoan + upkeepLoan;
                    houseHold = (totalFees * 10) / 100;
                    break;
                case 50:
                    upkeepLoan = 50000;
                    feesLoan = (totalFees * 30) / 100;
                    totalLoan = feesLoan + upkeepLoan;
                    houseHold = (totalFees * 20) / 100;
                    break;
                case 40:
                    upkeepLoan = 45000;
                    feesLoan = (totalFees * 30) / 100;
                    totalLoan = feesLoan + upkeepLoan;
                    houseHold = (totalFees * 30) / 100;
                    break;
                case 30:
                    upkeepLoan = 40000;
                    feesLoan = (totalFees * 30) / 100;
                    totalLoan = feesLoan + upkeepLoan;
                    houseHold = (totalFees * 40) / 100;
                    break;
            
                default:
                    error.textContent = `Please check your values`;
                    break;
            }
                display(scholarship, houseHold, totalLoan, feesLoan, upkeepLoan, error);
        }
        else {
            error.textContent = 'Please check your values';
            return;
        }
        }
        else {
            error.textContent = 'Please check your values';
            return;
        }
    }
    else{
        error.textContent = 'Enter valid values. Only numbers with no decimal points are allowed.';
    }
});

clearButton.addEventListener('click', function() {
    totalFeesInput.value = '';
    scholarshipAmountInput.value = '';
    clear();
});
function clear() {
    error.textContent ='';
    schorlarshipDisplay_.textContent = ``;
    schorlarshipDisplay.textContent = ``;
    houseHoldDisplay_.textContent = ``;
    houseHoldDisplay.textContent = ``;
    totalLoanDisplay_.textContent = ``;
    totalLoanDisplay.textContent = ``;
    feesLoanDisplay_.textContent = ``;
    feesLoanDisplay.textContent = ``;
    upkeepDisplay_.textContent = ``;
    upkeepDisplay.textContent = ``;
    info.textContent = "";
}


function display(scholarship, houseHold, totalLoan, feesLoan, upkeepLoan, error) {
    error.textContent ='';
    schorlarshipDisplay_.textContent = `Scholarship Amount:`;
    schorlarshipDisplay.textContent = `${scholarship.toFixed(2)}`;
    houseHoldDisplay_.textContent = `Household Amount:`;
    houseHoldDisplay.textContent = `${houseHold.toFixed(2)}`;
    totalLoanDisplay_.textContent = `Total Loan:`;
    totalLoanDisplay.textContent = `${totalLoan.toFixed(2)}`;
    feesLoanDisplay_.textContent = `Loan for fees:`;
    feesLoanDisplay.textContent = `${feesLoan.toFixed(2)}`;
    upkeepDisplay_.textContent = `Upkeep:`;
    upkeepDisplay.textContent = `${upkeepLoan.toFixed(2)}`;
    info.textContent = `This breakdown is for your whole academic year.
    The upkeep will be divided into two. In your case, ${((upkeepLoan.toFixed(2)) / 2)} for each semester`;
}
// Checking if inputs are numbers
function isScholarshipNumber(scholarshipAmountInput_) {
    return parseInt(scholarshipAmountInput_, 10).toString() === scholarshipAmountInput_;
}
function isFeesNumber(totalFeesInput_) {
    return parseInt(totalFeesInput_, 10).toString() === totalFeesInput_;
}