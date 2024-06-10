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
            fetch(`https://api.npoint.io/f967d13cfbb8c7e661d2${url}`)
                .then(r => r.json())
                .then(r => {
                    this.loading = false;
                    this.api = r;
                });
        }
    },
}