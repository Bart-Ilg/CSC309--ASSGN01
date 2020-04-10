
function isUpperCase(str) 
{
   return (""+ str) === ("" + str.toUpperCase());
}

function containsComma(str)
{
   if(str[0] === '"' && str[str.length-1] === '"')
      return -1;
   for(j = 0; j < str.length; j++)
   {
      if(str[j] === ',')
         return j;
   }
   return 0;
}

function greet(name = null) 
{
   let greeting = 'Hello, ';
   if(name === null)
      return greeting + 'my friend.'
   else if(Array.isArray(name))
   {
      var caps = [];
      var norm = [];
      for(i = 0; i < name.length; i++)
      {
         let temp = name[i];
         x = containsComma(temp);
         if(x && x!= -1)
         {
            name.push(temp.substring(0,x));
            name.push(temp.substring(x+2, temp.length));
            continue;
         }
         if(x === -1)
            temp = temp.substring(1,temp.length-1);
         if(isUpperCase(temp))
            caps.push(temp);
         else
            norm.push(temp);
      }
      for(i = 0; i < norm.length; i++)
      {
         let temp = norm[i];
         greeting += temp;
         if(i === norm.length - 2)
         {
            if(norm.length > 2)
               greeting+= ',';
            greeting += ' and ';
         }
         else if( i === norm.length - 1)
            greeting += '.';
         else
            greeting += ", ";
      }
      if(caps.length > 0)
      {
         greeting += ' AND HELLO ';
         for(i = 0; i < caps.length; i++)
         {
            let temp = caps[i];
            greeting += temp;
            if(i === caps.length - 2)
               greeting += ' AND ';
            else if( i === caps.length - 1)
               greeting += '!';
            else
               greeting += ", ";
         }
      }
      return greeting;
   }
   else
   {
      if(isUpperCase(name))
         return 'HELLO ' + name + '!';
      else
         return greeting + name + '.';
   }
}

module.exports = greet;