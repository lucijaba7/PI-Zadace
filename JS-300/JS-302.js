const istiZnakovi = function (str){
    let max_ponavljanja=0;
    while(str){
        let pom_str="";
        let count = 1;
        for (let j=1; j<str.length; j++)
            (str[j]==str[0]? count++ : pom_str+=str[j]);
        if (count > max_ponavljanja) max_ponavljanja=count;
        str=pom_str; 
    }
    return max_ponavljanja;   
}
console.log(istiZnakovi("baaaa345aafghui234fdasdfgaaaaaaawwwwwaasakdlcacd"));
console.log(istiZnakovi("ttt221"))