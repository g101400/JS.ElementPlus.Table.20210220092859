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
          onFormatterDate(row, column) {
              return row.date.toLocaleString();
//            return row.address;
          },

          onFilterDate(value, row, column) {
            const property = column['property'];
            console.log(value, row[property], row, column);
            return row[property].getTime() === value.getTime();
          }
        }
    };
    const app = Vue.createApp(App);
    app.use(ElementPlus);
    app.mount("#app");
});
