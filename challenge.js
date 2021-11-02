function getMoneySpent(keyboards, drives, b) {

    let TotalSpent = -1;
    let sum = 0;

    for(let i = 0; i <= keyboards.length; i++) {

        for(let j = 0; j <= drives.length; j++) {

             sum = keyboards[i] + drives[j];

          if(sum <= b && sum > TotalSpent){

                TotalSpent = sum;
            }
        }
    }

    return TotalSpent;
}