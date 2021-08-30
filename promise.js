function foo(arg) {

    return new Promise (function(resolve, reject)  {
        if (arg > 20) {
            resolve(arg);
        }else {
            reject("Something went wrong");
        }
    });
}

foo(10).then(data => {
    return data + 10;
}).then(data => {
    return data + 10;
}).then(data => {
    return data + 10;
}).then(data => {
    return data + 10;
}).then(data => {
    return data + 10;
}).then(data => {
    console.log(data); 
}).catch(error => {
    console.log(error);
});