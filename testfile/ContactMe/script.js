function buttonSubmit(event) {
    event.preventDefault();
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let dropdown = document.getElementById("subject");
    let selectedValue = dropdown.value;
    let message = document.getElementById("message").value
    // console.log(`nama: ${name}\nemail: ${email}\nphone: ${phone}\nsubject: ${selectedValue}\nmessage: ${message}`)
    // alert(`nama: ${name}\nemail: ${email}\nphone: ${phone}\nsubject: ${selectedValue}\nmessage: ${message}`)

    let person = [
        {
            firstName: "aldito",
            lastName: "sitompul",
            age: 20,
            isAdult: function () {
                if (this.age >= 30) {
                    return "Dewasa"
                } else {
                    return "Remaja"
                }
            }
        }, {
            firstName: name,
            lastName: "aldito",
            age: 30,
            isAdult: function () {
                if (this.age >= 30) {
                    return "Dewasa"
                } else {
                    return "Remaja"
                }
            }
        }
    ]


    for (let i = 0; i < person.length; i++) {
        console.log(person[i].firstName);
    }


    console.log(person[1].isAdult())

    // let num = 10
    // for (let i = 0; i < num; i++) {
    //     if (i % 2 == 0) {
    //         console.log(`ini loop ${i}`);
    //     }
    // }

    // let i = 1
    // while (i < 10) {
    //     console.log("The number is " + i);
    //     i++;
    // }

    // i = 1
    // do {
    //     console.log("The number " + i);
    //     i++;
    // } while (i < 10)

    let datas = ["a", "i", "u", "e", "o"]
    for (let i of datas) {
        if (i == "u") {
            continue;
        }
        console.log(i);
    }

    datas = "awdawdawd"
    for (let i of datas) {
        console.log(i)
    }

    // let data = { a: "a", i: "i", u: "u", e: "e" }
    // let datax = ""
    // for (let i in data) {
    //     datax += i
    //     console.log(datax);

    // }
    // console.log(datax);

}
function myNumbers() {
    let n = 0;
    return {
        next: function () {
            n += 10;
            return { value: n };
        }
    };
}

// Create Iterable
const n = myNumbers();
console.log(myNumbers())
console.log(n.next().value)
console.log(n.next().value)
