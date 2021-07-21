class Students {
    constructor(){};
    #students = [];

    get showAll(){
        return this.#students;
    }

    createStudent(student) {
        if(!student.email) {
            throw new Error("incorrect data");
        }
        for(let i = 0; i < this.#students.length; ++i) {
            if(student.email === this.#students[i].email) {
                errors.emailIsNotUnique();
            }
        }
        this.#students.push(student);
        return "success";
    }
}
module.exports = Students;