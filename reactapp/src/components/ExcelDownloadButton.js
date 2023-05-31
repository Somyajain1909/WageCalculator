import React from 'react';
import * as XLSX from 'xlsx';




const ExcelDownloadButton = ({ data, filename, sheetname }) => {
  const handleDownload = () => {
    // Define the desired column order
    const columnOrder = ['_key','name','currency','No_of_Resouces','Working_Hours','cost','margin','Dollar_Per_Hr','overhead','sell_rate_rounded','total_per_month','total_per_year'];

    // Reorder the data based on the column order
    const reorderedData = data.map(item => {
      const reorderedItem = {};

      columnOrder.forEach(column => {
        reorderedItem[column] = item[column];
      });

      return reorderedItem;
    });

    // Create a new workbook
    const workbook = XLSX.utils.book_new();
    const sheet = XLSX.utils.json_to_sheet(reorderedData);

    // Add the sheet to the workbook
    XLSX.utils.book_append_sheet(workbook, sheet, sheetname);

    // Generate the Excel file
    const excelData = XLSX.write(workbook, { bookType: 'xls', type: 'array' });
    const blob = new Blob([excelData], { type: 'application/vnd.ms-excel' });
    const url = URL.createObjectURL(blob);

    // Create a temporary link element and click it to trigger the download
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();

    // Cleanup
    URL.revokeObjectURL(url);
  };

  return (
    <button className='btn btn-primary' style={{'backgroundColor':'#0E7680','borderColor':'#0E7680','height':'50px'}} onClick={handleDownload}><i className="fa-solid fa-file-excel fa-2x"></i> &nbsp;&nbsp;Download as XLS</button>

  );
};

export default ExcelDownloadButton;


