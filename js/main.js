const bootText = document.getElementById("boot-text");

const portfolio = document.getElementById("portfolio");

const bootScreen = document.getElementById("boot-screen");

const lines = [

"> Initializing Digital Archive...",

"> Loading Projects...",

"> Loading Skills...",

"> Connecting to VIDLYRA...",

"> Authentication Successful",

"> ACCESS GRANTED"

];

let line = 0;

let char = 0;

function type(){

    if(line < lines.length){

        if(char < lines[line].length){

            bootText.textContent += lines[line].charAt(char);

            char++;

            setTimeout(type,30);

        }

        else{

            bootText.textContent += "\n";

            line++;

            char=0;

            setTimeout(type,300);

        }

    }

    else{

        setTimeout(()=>{

            bootScreen.style.display="none";

            portfolio.style.display="block";

            document.body.style.opacity="0";

            setTimeout(()=>{

                document.body.style.transition="opacity 1s";

                document.body.style.opacity="1";

            },50);

        },800);

    }

}

type();
