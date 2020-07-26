

function assignment38_42task1() {
    var power = (a,b) => Math.pow(a,b)
    document.write(power(6,2))
    

};

function assignment38_42task2() {

    const checkleap = (year) =>{
        if(year%4===0){
            console.log(`${year} is leap year`)
        }
        else{
            console.log(`${year } is not leap year`)
        }
    }
    checkleap(2017)

};

function assignment38_42task3() {

    const s = (x,y,z) => (x+y+z)/2
    const Area = (a,b,c) => {
        sa = s(a,b,c)
        return Math.sqrt(sa*(sa-a)*(sa-b)*(sa-c))
    }
    document.write(Area(3,4,5))
};


function assignment38_42task4() {

    const avrg = (a,b,c) => (a+b+c)/3

const percentage = (a,b,c) => (((a+b+c)*100)/300)
const main = (a,b,c) =>{
    console.log(`Your averga marks are ${avrg(a,b,c)} 
Your Percentage is ${percentage(a,b,c)}%`)
}
main(70,80,90)
};

function assignment38_42task5() {
    const findindexof = (str,letter) =>{
        count=0
        for(i=1;i<=str.length;i++){
           if(letter===str.slice(i-1,i)){
               return i
           }
        }
        return `letter not in the string`
    }
    
    str="abcdef"
    console.log(findindexof(str,"a"))
};

function assignment38_42task6() {
    str ="vowels"

    const replacevowel = (str) =>{
        if(str.length>25){
            console.log(`Sorry string length length is greater then 25`)
        }
        for (i of str){
            if(i==="a" || i==="e" || i==="i" || i==="o" || i==="u"){
                str=str.replace(i,"")
            }
        }
        console.log(str)
    }
    replacevowel(str)
};

function assignment38_42task7() {
    const occurence = (str) =>{
        document.write(str+"<br>")
        document.write("Such occurrence are ")
        for(i=0;i<str.length-1;i++){
            x=str.slice(i,i+2)
            if(x==="aa" || x==="ae" || x==="ai" || x==="ao" || x==="au" || x==="ea" || x==="ee" || x==="ei" || x==="eo" || x==="eu" || x==="ia" || x==="ie" || x==="ii" || x==="io" || x==="iu" || x==="oa" || x==="oe" || x==="oi" || x==="oo" || x==="ou" || x==="ua" || x==="ue" || x==="ui" || x==="uo" || x==="uu"){
                document.write(x+" ,")
            }
        }
    }
    occurence("Pleases read this application and give me gratuity")
};

function assignment38_42task8() {
    km = prompt("Please enter the distance in km")
 var m = (km) => km*1000
 var feet = (km) => km*3280.84
 var inch = (km) => km*39370.1
 var cm = (km) => km*100000
 document.write(m(km)+"<br>")
 document.write(feet(km)+"<br>")
 document.write(inch(km)+"<br>")
 document.write(cm(km)+"<br>")
 
};

function assignment38_42task9() {
};

function assignment38_42task10() {
};





    // ****************************************************ASSIGNMENT # 38-42 ENDS************************************************************



    
    

function assignment43_48task1() {
    

};

function assignment43_48task2() {

};

function assignment43_48task3() {

};


function assignment43_48task4() {

};

function assignment43_48task5() {

};







    // ****************************************************ASSIGNMENT # 43-48 ENDS************************************************************



    
    

function assignmen49_52ttask1() {
   };

function assignmen49_52ttask2() {
};

function assignmen49_52ttask3() {

};




    // ****************************************************ASSIGNMENT # 49-52 ENDS************************************************************



    

function assignment58_67task1() {
};

function assignment58_67task2() {
};

function assignment58_67task3() {

};


function assignment58_67task4() {

};

function assignment58_67task5() {

};

function assignment58_67task6() {

};

function assignment58_67task7() {
};






    // ****************************************************ASSIGNMENT # 58-67 ENDS************************************************************



    