

let sum = function(num1) {
    let b = function(num2){
        let c = function(num3){
            let add = num1+num2+num3;
            console.log(add);
        }
        return c;
    }
    return b;
}
sum(18)(44)(20);