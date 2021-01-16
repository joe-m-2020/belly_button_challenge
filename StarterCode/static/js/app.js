// data path
const path = "samples.json"
// // Fetch the JSON data and console log it
// d3.json(path).then(function(data) {
//     // map(data.samples[0].sample_values);
//     data.samples.forEach(element => {
//         console.log(element.sample_values);
        
//     });
//   });
// //create function to unpack json data
// function unpack(rows, index ){
//     return rows.map(function(row) {
//       return row[index]
//     });
//   }
// Fetch the JSON data and console log it
function buildPlot() {
    d3.json(path).then(function(data) {
        // map(data.samples[0].sample_values);
        data.samples.forEach(element => {
            console.log(element.sample_values);
            
        });
    });
}
buildPlot()