import React from "react";
import { useRef, useState } from "react";

export default function Quiz(){

    const a1 =useRef(null);
    const a2 =useRef(null);
    const a3 =useRef(null);
    const a4 =useRef(null);
    const [A1, setA1] = useState('');


    const b1 =useRef(null);
    const b2 =useRef(null);
    const b3 =useRef(null);
    const b4 =useRef(null);
    const [A2, setA2] = useState('');


    const c1 =useRef(null);
    const c2 =useRef(null);
    const c3 =useRef(null);
    const c4 =useRef(null);
    const [A3, setA3] = useState('');


    const d1 =useRef(null);
    const d2 =useRef(null);
    const d3 =useRef(null);
    const d4 =useRef(null);
    const [A4, setA4] = useState('');

    const e1 =useRef(null);
    const e2 =useRef(null);
    const e3 =useRef(null);
    const e4 =useRef(null);
    const [A5, setA5] = useState('');

    const [Num, setNum] = useState(0);

    


    function fun1(event){
        var A1 = [a1.current, a2.current, a3.current, a4.current];
        var res1 = ''
        var num1= 0
        for(var i =0; i<A1.length; i++){
            if(A1[i].checked){
                res1 = res1 + A1[i].value
            }
        }
        if(res1== "Cascading style sheets"){
            num1 =num1 + 2
            setA1("Currect, this Question Marks= "+num1)
            
        }else{
            num1 =num1 -1
            setA1("inCurrect, this Question Marks= "+num1)
        }


        var A2 = [b1.current, b2.current, b3.current, b4.current];
        var res2 = ''
        var num2 = 0
        for(var j =0; j<A2.length; j++){
            if(A2[j].checked){
                res2 = res2 + A2[j].value
            }
        }
        if(res2== "font-size"){
            num2 =num2 + 2
            setA2("Currect, this Question Marks= "+num2)
        }else{
            num2 =num2 -1
            setA2("inCurrect, this Question Marks= "+num2)
        }


        var A3 = [c1.current, c2.current, c3.current, c4.current];
        var res3 = ''
        var num3 = 0
        for(var k =0; k<A3.length; k++){
            if(A3[k].checked){
                res3 = res3 + A3[k].value
            }
        }
        if(res3== "style"){
            num3 =num3 + 2
            setA3("Currect, this Question Marks= "+num3)
        }else{
            num3 =num3 -1
            setA2("inCurrect, this Question Marks= "+num3)
        }

        var A4 = [d1.current, d2.current, d3.current, d4.current];
        var res4 = ''
        var num4 = 0
        for(var m =0; m<A4.length; m++){
            if(A4[m].checked){
                res4 = res4 + A4[m].value
            }
        }
        if(res4== "opacity"){
            num4 =num4 + 2
            setA4("Currect, this Question Marks= "+num4)
        }else{
            num4 =num4 -1
            setA4("inCurrect, this Question Marks= "+num4)
        }

        var A5 = [e1.current, e2.current, e3.current, e4.current];
        var res5 = ''
        var num5 = 0
        for(var n =0; n<A5.length; n++){
            if(A5[n].checked){
                res5 = res5 + A5[n].value
            }
        }
        if(res5== "writing-mode"){
            num5 =num5 + 2
            setA5("Currect, this Question Marks= "+num5)
        }else{
            num5 =num5 -1
            setA5("inCurrect, this Question Marks= "+num5)
        }
        setNum(num1+num2+num3+num4+num5)
        



        event.preventDefault();
    }




    return(
        <div>
            <h1>Kon Banega Karodpati</h1>
            <form action="" onSubmit={fun1}>
                <h4> Q1.The full form of CSS is:</h4>
                <input type="radio" name="Css1" ref={a1} value="Cascade style sheets" />Cascade style sheets <br />
                <input type="radio" name="Css1" ref={a2} value="Color and style sheets"  />Color and style sheets <br />
                <input type="radio" name="Css1" ref={a3} value="Cascading style sheets" />Cascading style sheets  <br />
                <input type="radio" name="Css1" ref={a4}  value="None of the above" />None of the above <br />
                <h3>{A1}</h3>

                <h4>Q2.The CSS property used to control the element's font-size is -</h4>
                <input type="radio" name="css2" ref={b1} value="text-style" />text-style <br />
                <input type="radio" name="css2"  ref={b2} value="text-size"/>text-size <br />
                <input type="radio" name="css2"  ref={b3} value="font-size" />font-size <br />
                <input type="radio" name="css2" ref={b4}  value="None of the above" />None of the above <br/>
                <h4>{A2}</h4>

                <h4>Q3.The HTML attribute used to define the inline styles is-</h4>
                <input type="radio" name="css3" ref={c1} value="style" />style<br />
                <input type="radio" name="css3" ref={c2} value="styles" />styles <br />
                <input type="radio" name="css3"  ref={c3} value="class" />class <br />
                <input type="radio" name="css3" ref={c4} value="None of the above" />None of the above <br/>
                <h4>{A3}</h4>

                <h4>Q4.The CSS property used to specify the transparency of an element is -</h4>
                <input type="radio" name="css4" ref={d1} value="opacity" />opacity <br />
                <input type="radio" name="css4" ref={d2} value="filter" />filter <br />
                <input type="radio" name="css4" ref={d3} value="visibility" />visibility<br />
                <input type="radio" name="css4" ref={d4} value="overlay" />overlay <br/>
                <h4>{A4}</h4>

                <h4>Q5.The CSS property used to specify whether the text is written in the horizontal or vertical direction?</h4>
                <input type="radio" name="css5" ref={e1} value="writing-mode" />writing-mode <br />
                <input type="radio" name="css5" ref={e2} value="text-indent" />text-indent <br />
                <input type="radio" name="css5" ref={e3} value="word-break" />word-break <br />
                <input type="radio" name="css5" ref={e4} value="None of the above" />None of the above
                <h4>{A5}</h4>
                <h1>Total Marks is = {Num}</h1>
                 <br/>
                <input type="submit" value="Click Me" />
            </form>
        </div>

    )
}