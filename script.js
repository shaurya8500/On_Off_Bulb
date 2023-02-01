
const turnon= () => {
    let imgOb= document.getElementById("bulb");
    imgOb.setAttribute("src","onbulb.jpg") ;
};
const turnoff=() =>{
    let imgOb= document.getElementById("bulb");
    imgOb.setAttribute("src","offbulb.jpg");
};
const toggleBulb = () => {
    let imgOb=document.getElementById("bulb")
    let srcvalue=imgOb.getAttribute("src")
  //   console.log(srcvalue)
  let buttonob=document.getElementById("onoffbutton")
  let buttontext=buttonob.innerHTML;
  console.log(buttontext);
    if(srcvalue=="offbulb.jpg")
    {
        turnon();
        buttonob.innerHTML="OFF";
    }
    else
    {
        turnoff();
        buttonob.innerHTML="ON";

    }
}
