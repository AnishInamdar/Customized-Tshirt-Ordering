const btn  = document.querySelector(".Ass3");


btn.onclick = () => {
    var student = {
        name1: "Anish",
        rollNo: 23,
        class1: "D15A",
        college: "VESIT",
        print: function (){
            console.log(`name : ${this.name1}`)
            console.log(`roll No : ${this.rollNo}`)
            console.log(`class ${this.class1}`)
            console.log(`college : ${this.college}`)
            console.log(`Age : ${this.age}`)
        }
    }

    //prototype
    student.print()


    console.log("")
    console.log("print by constructor")

    function student1(name1, rollNo, class1, college) {
        this.name1 = name1
        this.rollNo = rollNo
        this.class1 = class1
        this.college = college

        this.print = () => {
            console.log(`name : ${this.name1}`)
            console.log(`roll No : ${this.rollNo}`)
            console.log(`class ${this.class1}`)
            console.log(`college : ${this.college}`)
            console.log(`Age : ${this.age}`)
        }

    }
    //prototype
    student1.prototype.age = 20;

    var student2 = new student1("Anish", 23, "D15A", "vesit")
    student2.print();


    function takeInput() {
        let roll = prompt("enter your roll no :")
        try {
            if (roll == 0) {
                throw "Roll no Can`t be :0"
            }
            else {
                student.rollNo = roll
                console.log("")
                console.log("printing after changing roll no")
                console.log(student.print())
            }
        } catch (err) {
            alert(err)

        }
    }
    takeInput()
}