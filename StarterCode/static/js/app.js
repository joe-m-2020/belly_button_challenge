// data path
const path = "samples.json"
// Fetch the JSON data and console log it
d3.json(path).then(function(data) {
    console.log(data);
  });
//create function to unpack json data
function unpack(rows, index) {
    return rows.map(function(row) {
      return row[index];
    });
  }
// Fetch the JSON data and console log it
function buildPlot() {
    d3.json(path).then(function(data){
        console.log(data);
        console.log(data.samples)
        //grab values for plotting
        var sample_vals= unpack(data.samples,  0);
        console.log(sample_vals);
        var otu_ids = unpack(data.samples, 1);
        console.log(otu_ids);
    })
}
buildPlot()