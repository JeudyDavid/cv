
var experience_option = document.getElementById('experience_option');
var remove = document.getElementById('remove_experience');
var add = document.getElementById('add_experience');
c = 1

add.onclick = function(){
  var newField = document.createElement('input');
  newField.setAttribute('type','text');
  newField.setAttribute('id','experience'+c);
  newField.setAttribute('class','mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500');
  newField.setAttribute('placeholder','Eksperyans '+ (c+1));
  newField.setAttribute('required','');
  experience_option.appendChild(newField);
  c = c+1
} 

remove_experience.onclick = function(){
    var input = experience_option.getElementsByTagName('input');
    console.log(input.length)
    if(input.length > 1) {
      experience_option.removeChild(input[(input.length) - 1]);
    }
}


