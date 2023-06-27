const url = "https://flynn.boolean.careers/exercises/api/random/mail";

const app = Vue.createApp({
    data() {
        return {
            numOfEmails: 10,
            emails: [],
            isLoading: false
        }
    },
    methods: {
        async generateEmail() {
            this.isLoading = true;
            for (let i = 0; i < this.numOfEmails; i++) {
                await axios.get(url)
                    .then(r => {
                        const response = r.data.response;
                        this.emails.push(response);
                    }).catch(e => {
                        console.error(e.message);
                    })
            }
            this.isLoading = false;
        }
    },
    mounted() {
        this.generateEmail();
    }
});

app.mount('#root');