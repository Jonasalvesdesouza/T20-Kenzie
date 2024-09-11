class Student{
    name: string
    module: string
    grade: number | null = null

    constructor(name: string, module: string){
        this.name = name
        this.module = module
    }
    sayHello(){
        console.log(`Ola me chamo ${this.name} estou no modulo ${this.module}`)
    }
    setGrade(grade: number){
        this.grade = grade
    }
    getGrade(){
        console.log(`Nota: ${this.grade}`)
    }
}

const printStudent = () => {
    const student = new Student("Jonas", "M4")
    student.sayHello()
    student.setGrade(10)
    student.getGrade()
}

printStudent()
