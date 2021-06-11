const arr = [10, 20, 30, 40, 50];
function indexOf(arr,elem)
{
    for(let i = 0; i < arr.length; ++i)
    {
        if (arr[i] == elem)
        {
            return i;
        }
    }
}
console.log(indexOf(arr, 20));