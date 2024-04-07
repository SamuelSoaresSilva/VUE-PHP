import { ref } from 'vue'

export const useAddLetter = () =>{

  const msg = ref('');
  const addLetter = (str) => {
    msg.value = ''
    const letters = str.split('');
    for (let i = 0; i < letters.length; i++) {
      setTimeout(() => {
        msg.value += letters[i];
      }, i * 150);
    }
  };

  return{
    addLetter,
    msg
  }
}