//1 
function product(x, y){
    console.log(x*y);
};
product(15,100);

//2
function concatenation(width = 7, height = 80, length = 48){
    console.log(width+height+length);
};
concatenation();

//3
const christmasEve = function (){
    const word = "HOHOHOHHO";
    return word;
};
console.log(christmasEve());

//4
const products = (a, b, c) => {
    let area = a*b*c;
    return area;
};
console.log(products(4, 8, 6));

//5
const ageStrict = function (age){
    if (age > 18){
        return "You are old enough."
    }else if(18 >= age && age >= 16){
        return "Soon enough."
    }else if( age < 16){
        return "Aborted."
    }
};
console.log(ageStrict(26));

//6
 const addFive = () =>{
    let sum;
    return sum +=5;
};
console.log(addFive());


//7
function message(a = "Hello", b ="World"){
    return a +' ' + b;
};
console.log(message());

//8
let words = [',', '.', 'ნახეს', 'ცრემლსა', 'ვარდი', 'დაეთრთვილა', 'ცხენი',  'გულსა', 'შავი',  'მდუღრად', 'ხშირად',  'ანატირსა', 'უცხო', 'ესხა', 'მოყმე', 'ვინმე', 'მარგალიტი', 'ჯდა', 'გმირსა', 'ჰყვა', 'და', 'ვითა', 'ლაგამ-აბჯარ-უნაგირსა', 'ლომსა',  'მტირალი', 'წყლისა', 'სადავითა', 'პირსა'];
console.log(words);
console.log(words[2], words[0], words[12], words[14],words[15]);
console.log(words[17], words[24], words[25], words[27], words[0]);
console.log(words[8], words[6], words[26]);
console.log(words[19], words[23], words[20], words[21], words[18], words[0]);
console.log(words[10], words[13], words[16], words[22], words[1]);
console.log(words[3], words[4], words[5], words[0]);
console.log(words[7], words[9], words[11], words[1]);


