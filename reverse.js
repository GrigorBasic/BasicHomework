arr = ["l", 2, 3, "4", 5, 8];
function reverse (arr)
{
    let j = arr.length -1;
    for(let i = 0; i < arr.length/2; ++i)
    {
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
        --j;
    }
}
reverse(arr);
console.log(arr);