const { createApp } = Vue

createApp ({

    data() {
        return {
            mailList: [],
        }
    },

    methods: {

    },

    mounted() {

        for(let i = 0; i < 10; i++) {
            
            // API to generete random email
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                // console.log(response.data.response);
            })

        }

    }

}).mount('#app');