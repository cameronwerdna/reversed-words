// function which reverse the order of words in a string.
function reverseWords(str){
    return str.split(' ').reverse().join(' ');
  }

  
console.log(reverseWords('hi there')) // => 'there hi'
console.log(reverseWords('i am trying to reach you about your car\'s extended warranty')) // => 'i am trying to reach you about your car\'s extended warranty'
console.log(reverseWords('she sells seashells by the seashore')) // => 'seashore the by seashells sells she'