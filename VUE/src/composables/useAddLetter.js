import { ref } from 'vue'

export const useAddLetter = () =>{

  const headerTitle = ref('');
  const addLetter = (str) => {
    headerTitle.value = ''
    const letters = str.split('');
    for (let i = 0; i < letters.length; i++) {
      setTimeout(() => {
        headerTitle.value += letters[i];
      }, i * 150);
    }
  };

  return{
    addLetter,
    headerTitle
  }
}