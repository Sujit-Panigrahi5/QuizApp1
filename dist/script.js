

const quno = document.getElementById("quno");
const questiono = document.getElementById("qu");
const sumbit = document.getElementById("sumbit");




let question = [
    {
        quest: "Which of the following option leads to the portability and security of Java?",
        option0: "Bytecode is executed by JVM",
        option1: "The applet makes the Java code secure and portable",
        option2: "Use of exception handling",
        option3: "Dynamic binding between objects",
        ans: 0
    },
    {
        quest: "Which of the following is not a Java features?",
        option0: "Dynamic",
        option1: "Architecture Neutral",
        option2: "Use of pointers",
        option3: "Object-oriented",
        ans: 2
    },
    {
        quest: "The \u0021 article referred to as a",

        option0: "Unicode escape sequence",
        option1: "Octal escape",
        option2: "Hexadecimal",
        option3: "Line feed",
        ans: 0
    },
    {
        quest: "_____ is used to find and fix bugs in the Java programs.",
        option0: "JVM",
        option1: "JRE",
        option2: "JDK",
        option3: "JDB",
        ans: 3
    },
    {
        quest: "Which of the following is a valid declaration of a char?",
        option0: "char ch = '\ utea';",
        option1: "char ca = 'tea';",
        option2: "char cr = \u0223;",
        option3: "char cc = '\itea';",
        ans: 0
    },
    {
        quest: "What is the return type of the hashCode() method in the Object class?",
        option0: "Object",
        option1: "int",
        option2: "long",
        option3: "void",
        ans: 1
    },
    {
        quest: "Which of the following is a valid long literal?",
        option0: "ABH8097",
        option1: "L990023",
        option2: "904423",
        option3: "0xnf029L",
        ans: 3
    },
    {
        quest: " What does the expression float a = 35 / 0 return?",
        option0: "0",
        option1: "Not a Number ",
        option2: "Infinity",
        option3: "Run time exception ",
        ans: 2
    },
    {
        quest: "Evaluate the following Java expression, if x=3, y=5, and z=10:",
        option0: "24",
        option1: "23",
        option2: "20",
        option3: "25",
        ans: 3
    },
    {
        quest: "Which of the following tool is used to generate API documentation in HTML format from doc comments in source code?",
        option0: "javap tool",
        option1: "javaw command",
        option2: "Javadoc tool",
        option3: "javah command",
        ans: 2
    },

]

let questionno = -1;
let questincou=1;
let score=0;

function changethequestion() {
    questionno++;
    questincou++;
    if (questionno > 9) {
        alert("Thank you");
        // score 
    }
    document.getElementById("quno").innerHTML = "";
    document.getElementById(`qu`).innerHTML = "";

    document.getElementById("quno").textContent = questionno + 1;
    document.getElementById(`qu`).textContent = question[questionno].quest;
    document.getElementById(`op0`).innerHTML = "";
    document.getElementById(`op0`).textContent = question[questionno].option0;

    document.getElementById(`op1`).innerHTML = "";
    document.getElementById(`op1`).textContent = question[questionno].option1;

    document.getElementById(`op2`).innerHTML = "";
    document.getElementById(`op2`).textContent = question[questionno].option2;

    document.getElementById(`op3`).innerHTML = "";
    document.getElementById(`op3`).textContent = question[questionno].option0;


}

// choose seciton
let chooseans = '';
let optinchose = (optionid, no) => {
    chooseans = no;
    sumbit.style.display = "block";
    for (let i = 0; i < 4; i++) {
        if (`op${i}` == optionid) {
            document.getElementById(`op${i}`).style.borderWidth = "2px";
            document.getElementById(`op${i}`).style.borderColor = "black";
        } else {
            document.getElementById(`op${i}`).style.borderWidth = "1px";
            document.getElementById(`op${i}`).style.borderColor = "#646363";
        }

    }
}

// skip section
function skipthisquestion() {
    sumbit.style.display = "none";
    chooseans = "";
    for (let i = 0; i < 4; i++) {
        document.getElementById(`op${i}`).style.borderWidth = "1px";
        document.getElementById(`op${i}`).style.borderColor = "#646363";
    }

    changethequestion();
}

// submit section 
function check() {
    if(chooseans == question[questionno].ans){
        document.getElementById("questincount").innerHTML="";
        document.getElementById("questincount").textContent=questincou;

        document.getElementById("score").innerHTML="";
        document.getElementById("score").textContent=++score;

        changethequestion();


    }else{
        changethequestion();
    }
    
}


