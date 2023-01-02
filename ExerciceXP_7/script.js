const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

names.sort();

let secretSocial = '';
for(let i of names)
{
    secretSocial += i[0]
}
console.log(secretSocial);