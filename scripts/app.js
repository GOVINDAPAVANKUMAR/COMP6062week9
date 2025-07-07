console.log("Js Loaded");
const app = Vue.createApp({
    data() {
        return {
            greetings: 'Welcome to Vue.js!!!',
            message: 'This message is displayed based on a boolean property.',
            showMessage: false
        };
    }
});
app.mount('#app');