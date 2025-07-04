console.log("Let's get started with Vue.js!!");

const app= Vue.createApp({
    data(){
        return{
            greeting: "Welcome to the Vue.js!",
            message: "This message is displayed based on a boolean property.",
            showMessage: true
        };
    }
});

app.mount('#app');