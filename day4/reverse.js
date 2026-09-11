const reverse=(n)=>
{
    n=n+"";
    return n.split("").reverse().join("");
}

console.log(Number(reverse(2345)));