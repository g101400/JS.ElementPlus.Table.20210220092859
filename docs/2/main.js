window.addEventListener('load', (event) => {
    const App = {
      setup() {
        return {
          tableData: [{
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }]
        }
      },
        methods: {
          setCurrent(row) {
            this.$refs.singleTable.setCurrentRow(row);
          },
          onCurrentChange(val) {
            this.currentRow = val;
            console.log(this.currentRow);
          }
        }
    };
    const app = Vue.createApp(App);
    app.use(ElementPlus);
    app.mount("#app");
});
