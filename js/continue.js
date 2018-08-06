console.log('Prints every other letter in the alphabet');

var soup = ('abcdefghijklmnopqrstuvwxyz'.split(''));
//console.log(soup[10]);
var i = 0;

for (i=0; i < soup.length; i++)
{
    if ( i % 2 != 0 )
	{ continue; };

    { console.log(soup[i]); };
};

console.log('Done!');
