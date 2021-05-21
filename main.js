function convertFahrToCelsius (x) {
    
    var celsius = ((x-32) * 5/9).toFixed(4);

    if (Number(x)){
        console.log(celsius);
    }  else {
        console.log( x.value + " is not a valid number but a/an " + typeof x +" ");
    }
}
convertFahrToCelsius ('90');



function checkYuGiOh(n) {
    const numbers = [];

    for (let i = 1; i <= n; i++) {
        const numbers = [Number(i)]
        if(i % 2 === 0) {
            console.log('yu');
        } else if (i % 3 === 0) {
            console.log('gi');
        } else if(i % 5 === 0) {
            console.log('oh');
        } else {
            console.log(i);
        } 
        if (i % 2 === 0 && i % 3 === 0) {
            console.log('yu-gi');
        } else if (i % 2 === 0 && i % 5 === 0) {
            console.log('yu-oh');
        } else if (i % 3 === 0 && i % 5 === 0) {
            console.log('gi-oh');
        } else if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
            console.log('yu-gi-oh');
        } else {
            
        } 
        
    }

}

checkYuGiOh("10");
