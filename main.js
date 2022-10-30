let lab1 = [5, 5, 5, 5, 10, 10]
let lab2 = [4, 5, 5, 5, 5, 5, 10]
let lab3 = [5, 10, 10, 15]
let lab4 = [10]
let lab5 = [5, 5, 5, 5, 5, 10, 10, 10, 10, 5]
let lab6 = [5, 5, 10, 5, 5, 10]
let lab8 = [5, 10, 10, 10, 5]
quiz1 = 40

function get_sum(lab) {
    let s = 0;
    for (p in lab) {s += lab[p]}
    return s;
}

function main () {
    let total_sum = 0;
    let sums = []
    
    for (let i = 0; i < arguments.length; i++) {
        total_sum += get_sum(arguments[i])
        sums.push(get_sum(arguments[i]))
    }
    
    let average_labs = total_sum / arguments.length;
    
    let total_score = ( 0.6 * (average_labs) + 0.4 * (quiz1) ) * 2.5 // get a percentage score

    const results = {
        lab1: lab1, // array of scores for lab1
        lab2: lab2, // array of scores for lab2
        lab3: lab3, // array of scores for lab3
        lab4: lab4, // array of scores for lab4
        lab5: lab5, // array of scores for lab5
        lab6: lab6, // array of scores for lab6
        lab8: lab8, // array of scores for lab8
        quiz1: quiz1, // score of quiz1
        sums: sums, // array of sums of each lab
        total_score: total_score, // computed total score
    }

    console.log(results)
    return results;
}

main(lab1, lab2, lab3, lab4, lab5, lab6, lab8);