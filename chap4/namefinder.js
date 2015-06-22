/**
 * Created by Navaneeth Sen on 2015/06/21.
 */
var text = "qwet y siow e r fuj kl sen wer rseni ersyu dfg \
            sen yhn esfsyui seu ikm jn ouy fdc fsgb sen \
            sen sen fgjkl rtyui senh";

var myName = "sen";
var hits = [];

for(var i=0; i < text.length; i++)
{
    if (text[i] === myName[0])
    {
        var k = 1;
        var hit = false;
        for (var j=i+1; j<(i + myName.length); j++)
        {
            //console.log("j = " +j);
            //console.log("k = " +k);

            if (text[j] === myName[k++])
            {
                hit = true;
            }
            else
            {
                hit = false;
            }
        }

        if (hit)
        {
            hits.push(myName);
        }
    }
}

console.log(hits);