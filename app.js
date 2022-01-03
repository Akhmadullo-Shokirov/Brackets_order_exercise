var input = document.getElementById("inputB");
var checkButton = document.getElementById("checkBtn")

let array ;

checkButton.onclick = () => {
    console.log('Input' + input.value)
    array = input.value.split("");
    check(array)
}

function check(array) {
    
    let open = 0;
    let close = 0;

    if(array.length == 0 || array.length % 2 != 0) {
        alert("Error A: Either your input is empty or its length is odd")
        return false;
    } else if(array[0] == ")" || array[array.length -1] == "(") {
        alert("Error B: Please check first and/or last characters of the string!")
        return false
    } else {
        for(let i = 0; i<array.length; i++) {
            if(array[i] == "(" || array[i] == ")") {
                if(array[i] == '(') {
                    open++
                } else {
                    close++
                }
            } else {
                alert("Error C: All characters should be brackets: `(`, `)`")
                return false;
            }
        }
        alert(comparing(open, close))
    }
}

function comparing(openingB, closingB) {
    let toggle = 0;
    if(openingB == closingB) {
        for(let i = 0; i<array.length; i++) {
            if(array[i] == "(") {
                toggle++
                console.log(toggle)
            } else if(array[i] == ")") {
                toggle--;
                console.log(toggle)
                if(toggle < 0) {
                    return "Error D: Please check the order of brackets!"
                }
            }
        }
        console.log(toggle)

        if(toggle > "0") {
            return "Error D: Please check the order of brackets!"
        } else {
            return "Success! Brackets are ordered properly."
        }
    } else {
        return "Error E: The number of opening and closing brackets must be equal!";
    }
}