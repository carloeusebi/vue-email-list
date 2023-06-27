// API's url
const url = "https://flynn.boolean.careers/exercises/api/random/mail";

// ! VUE

const app = Vue.createApp({
    data() {
        return {
            numOfEmails: 10,
            emails: [],
            isLoading: false
        }
    },
    methods: {

        // async function call the api to generate all the email, it await FOR LAST AJAX CALL to be answered and THEN sets isLoading to false, showing the email list on the page
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
        // at mounts generates the email
        this.generateEmail();
    }
});


// MOUNT
app.mount('#root');