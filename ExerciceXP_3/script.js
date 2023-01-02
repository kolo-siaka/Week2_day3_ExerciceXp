let out = true;

while(out)
{
    output = prompt('Entrer un nombre');

    type = typeof(output);

    console.log(type);

    number = Number(output);

    if(!isNaN(number) && number > 10 )
    {
        break
    }
}