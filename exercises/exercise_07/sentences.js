let noun = ["box", "circle", "sphere", "column", "cabinet"]
let adjective1 = ["lavender", "magenta", "cyan", "violet", "lilac"]
let adjective2 = ["cornerless", "pristine", "dusty", "childlike", "wrinkled"]
let verb = ["rattles", "trembles", "shatters", "melts", "stretches"]
let adjective3 = ["angry", "happy", "morose", "petulant", "pretentious"]

const RandomNoun = Math.floor(Math.random() * noun.length);
const RandomAdjective1 = Math.floor(Math.random() * adjective1.length);
const RandomAdjective2 = Math.floor(Math.random() * adjective2.length);
const RandomVerb = Math.floor(Math.random() * verb.length);
const RandomAdjective3 = Math.floor(Math.random() * adjective3.length);

let sentence = `sometimes in its ${RandomNoun, noun[RandomNoun]} of sky ${RandomAdjective1, adjective1[RandomAdjective1]} and ${RandomAdjective2, adjective2[RandomAdjective2]}, the moon ${RandomVerb, verb[RandomVerb]} like a fragment of ${RandomAdjective3, adjective3[RandomAdjective3]} candy`

document.write(sentence)