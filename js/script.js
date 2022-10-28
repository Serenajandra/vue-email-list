// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const {createApp} = Vue;
createApp({

    data(){

        return{
            mailsArray :["pippo@gmail.com", "giova@ciao.com"]
        }
    },
    methods: {
        
        
        getMails(){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) =>{
                console.log(resp.data.response);
                thisMail = resp.data.response;
                mailsArray.push(thisMail);
            })
        }

    },
    created() {

    }

}).mount("#app")