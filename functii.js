let abs1 = (a,b) => {
    if(a>b)
        return a-b;
    return b-a;
};   

let putere = (y, n) => {
    let p=1;
    for(let i=1;i<=n;i++) p=p*y;
    return p;
};

let radical = (st, dr, n, x, epsilon) => {
    if(dr-st<=epsilon) return st;
    let mij=(st+dr)/2;
    if(abs1(putere(mij,n),x)<=epsilon)
        return mij;
    else if(putere(mij,n)<x)
        return radical(mij,dr,n,x,epsilon);
    else
        return radical(st,mij,n,x,epsilon);
   
}

let x = () => {
    let n = document.getElementById('formRadical1').value;
    let ordin = document.getElementById('formRadical2').value;
    let eroare = document.getElementById('formRadical3').value;
    let y = "<span>"+ (radical(0, n, ordin, n, eroare)).toPrecision(eroare.toString().length-1) + "</span>";
    $( "#rezultat" ).html(y);
};
