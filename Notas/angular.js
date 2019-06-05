//export data to xlsx
  fireEvent() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.table.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'SheetJS.xlsx');
  }
//para convertir un xlsx to json
 somethingChanged(e) {
    this.file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsArrayBuffer(this.file);
    // tslint:disable-next-line:only-arrow-functions no-shadowed-variable
    reader.onload = function() {
      // @ts-ignore
      const data = new Uint8Array(reader.result);
      const wb = XLSX.read(data, {type: 'array'});
      // tslint:disable-next-line:no-shadowed-variable
      const jsonData = wb.SheetNames.reduce((initial, name) => {
        const sheet = wb.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet);
        return initial;
      }, {});
      console.log(JSON.stringify(jsonData));
    };
  }
//primeng
npm install primeng --save
npm install primeicons --save
