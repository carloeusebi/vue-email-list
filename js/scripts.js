const url = "https://flynn.boolean.careers/exercises/api/random/mail";

const app = Vue.createApp({
    data() {
        return {
            emails: ['test@email.it']
        }
    }
});

app.mount('#root');