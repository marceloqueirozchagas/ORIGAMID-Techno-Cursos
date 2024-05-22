export default {
    data() {
        return {
            loading: false,
            api: null
        }
    },
    methods: {
        fetchApi(url) {
            this.loading = true;
            this.api = null;
            fetch(`http://localhost:3000${url}`)
                .then(r => r.json())
                .then(r => {
                    setTimeout(() => {
                        this.loading = false;
                        this.api = r;
                    }, 500);

                });
        }
    },
}