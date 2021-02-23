function test() {
    alpha=/^[A-Za-z]+$/;
    num = /[^0-9]/;
    //name
    x=document.getElementById('name').value;
    if (x.length<3 || !(x.match(alpha))){
        alert('entrez un Prénom valid');
        return false;
    }
    //last name
    y=document.getElementById('lname').value;
    if (y.length<3 || !(y.match(alpha))){
        alert('entrez un nom valid');
        return false;
    }
    //age
    a=document.getElementById('age').value;
    if (a.length==0 || parseInt(a)<=0 || a.match(alpha) ) {
        alert('entrez un age valid');
        return false;
    }
    //email
    m=document.getElementById('email').value;
    if ((m.length==0) || (m.length>50) || (m.indexOf("@")>m.lastIndexOf(".")) || (m.indexOf("@")==-1)) {
        alert('entrez un mail valid');
        return false;
      }
    //adress
    z=document.getElementById('adress').value.length;
    if (z<10) {
        alert('entrez une adress valid');
        return false;
    }
    //number
    n=document.getElementById('pnum').value;
    if ((n.match(alpha)) || (n.length!=8)|| ((n.charAt(0).toString())=="0") || ((n.charAt(0).toString())=="1")) {
        alert('entrez un numero de tel valid');
        return false;
    }
    score=0;
    pts1=document.querySelectorAll(".p1");
    pts2=document.querySelectorAll(".p2");
    pts3=document.querySelectorAll(".p3");
    pts5=document.querySelectorAll(".p5");
    checkb=document.querySelectorAll(".ch");
    mc=0;
    for (let d = 0; d< checkb.length; d++) {
        if (checkb[d].checked==true){
         mc=mc+1;}
     }

    for (let i = 0; i< pts1.length; i++) {
       if (pts1[i].checked==true){
        score=score+1;}
    }
    for (let j = 0; j< pts2.length; j++) {
        if (pts2[j].checked==true){
         score=score+2;}
     }
     for (let k = 0; k< pts3.length; k++) {
        if (pts3[k].checked==true){
         score=score+3;}
     }
     for (let b = 0; b< pts5.length; b++) {
        if (pts5[b].checked==true){
         score=score+5;}
     }
    lw=window.localStorage
    lw.setItem('age',a);
    lw.setItem('mc',mc)
    lw.setItem('score',score);
    
}
