window.addEventListener('load', (event) => {
    const App = {
      setup() {
        return {
          tableData: [{
            date: new Date('2016-05-03'),
            name: 'Tom',
            age: 99,
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: new Date('2016-05-02'),
            name: 'Tom',
            age: 100,
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: new Date('2016-05-04'),
            name: 'Tom',
            age: 20,
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: new Date('2016-05-01'),
            name: 'Tom',
            age: 33,
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
          },
          dateFormatter(row, column) {
              return row.date.toLocaleString();
//            return row.address;
          },
        }
    };
    const app = Vue.createApp(App);
    app.use(ElementPlus);
    app.mount("#app");
});
