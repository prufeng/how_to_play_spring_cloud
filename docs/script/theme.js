let fs = require('fs');
fs.readFile('./docs/gitbook/theme.js', function(err, data){
    if(err){
        console.error(err);
        throw err;
    }
    let str = data.toString() +'';
    str = str.replace('if(m)for(n.handler','if(false)for(n.handler');
    console.log('Reading done!');

    fs.writeFile('./docs/gitbook/theme1.js', str, (err, data)=>{
        if(err){
            console.error(err);
            throw err;
        }
        console.log('Writing done!');
        fs.unlink('./docs/gitbook/theme.js', (err)=>{
            if(err){
                console.error(err);
                throw err;
            }
            console.log('Remove theme.')
            fs.rename('./docs/gitbook/theme1.js','./docs/gitbook/theme.js', (err)=>{
                if(err){
                    console.error(err);
                    throw err;
                }
                console.log('Rename theme1 to theme.')
            });
        });
    });
});