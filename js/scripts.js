const url = "https://flynn.boolean.careers/exercises/api/random/mail";

const app = Vue.createApp({
    data() {
        return {
            numOfEmails: 10,
            emails: []
        }
    },
    methods: {
        generateEmail() {
            axios.get(url)
                .then(r => {
                    const response = r.data.response;
                    this.emails.push(response);
                }).catch(e => {
                    console.error(e.message);
                });
        }
    },
    mounted() {
        for (let i = 0; i < this.numOfEmails; i++) {
            this.generateEmail();
        }
    }
});

app.mount('#root');