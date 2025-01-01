function insert_Row() {
    //Write your code here
	// This function will insert a new row at the top of the table
function insert_Row() {
    // Get the table element by ID
    var table = document.getElementById("sampleTable");

    // Create a new table row (<tr>) element
    var newRow = table.insertRow(1); // Insert at index 1 to put it at the top

    // Create two new cells (<td>) for the new row
    var cell1 = newRow.insertCell(0); // The first cell (left side)
    var cell2 = newRow.insertCell(1); // The second cell (right side)

    // Set the innerHTML of each cell
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
}
Explanation:
  
  
}
