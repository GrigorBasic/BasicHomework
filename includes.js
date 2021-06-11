const arr = [10, 20, 30, 40, 50];
function includes (arr,elem)
{
    for(let i = 0; i < arr.length; ++i)
    {
        if (arr[i] == elem)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}
const inc = includes(arr, 50);
console.log(inc);