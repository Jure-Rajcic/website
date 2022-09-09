

function averageJobSalary(job) {
    let words = job.trim().split(' ');
    let position = words[words.length - 1].trim().toLowerCase();
    switch (position) {
        case 'programmer': return 8;
        case 'developer': return 8;
        case 'administrator': 8
        case 'analyst': return 6;
        case 'engineer': return 6
        default : return 0;
    }
}

function extraSkillBonus(message) {
    if (!message) return 0;
    let words = message.trim().split(' ');
    let extraPoints = 0;
    for (let word of words){
        word = word.toLowerCase();
    if ([',', '.', ':'].includes(word.charAt(word.length-1))) word = word.substring(0, word.length-1);

        if (['python', 'java', 'c', 'c++', 'c/c++'].includes(word)) extraPoints += 0.5; // languages
        else if (['html', 'css', 'js', 'javascript'].includes(word)) extraPoints += 0.3; // web dev
        else if (['flutter', 'swift', 'android'].includes(word)) extraPoints += 0.3; // mobile dev
        else if (['mvc', 'mvvm'].includes(word)) extraPoints += 0.5; // arhitecctures
        else if (['git', 'docker'].includes(word)) extraPoints += 0.3; // tehnologies
        else if (['postgresql'].includes(word)) extraPoints += 0.2; // databases
        else if (['linux', 'mac'].includes(word)) extraPoints += 0.3 // os
        else if (['algorithms', 'fast'].includes(word)) extraPoints += 1 // algorithms
        else if (['ml'].includes(word)) extraPoints += 0.5 // algorithms
    }
    return extraPoints;
}

