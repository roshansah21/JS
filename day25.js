// How does js execute code + call stack
/*

Javascript Execution context

{}--> Global execution context  (located on 'this')
-> Global execution context
-> function Execution context
->Eval execution context




let val1 = 5
let val2 = 2
function addNum(num1, num2) {
    let total =num1 + num2
    return total
}
let result1 = addNum(val1,val2)
let result2 = addNum(5,1)


In js code executed in three steps:
1: Global execution (this)
2: Memory creation phase

val1->undefined
val2->undefined
addNum->definition
result1->undefined
result2->undefined


3: Execution phase

val1->5
val2->2
addNum-> (new variable environment + execution thread)--after that it should be delete also
result=7
            -->Memory phase(val1->undefined
                val2->undefined
                total->undefined)
            -->Execution context (num1->5
                num2->2
                total->7)





*/