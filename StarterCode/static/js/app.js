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
function getSamplesData() {
    d3.json(path).then(function(data) {
        // map(data.samples[0].sample_values);
        data.samples.forEach(element => {
            var sample_values_all = element.sample_values;
            var sample_values_desc = sample_values_all.slice(0, 10);
            var sample_values = sample_values_desc.reverse();
            console.log(sample_values)
        });
        data.samples.forEach(element => {
            var otu_ids_all = element.otu_ids;
            var otu_ids_desc = otu_ids_all.slice(0, 10);
            var otu_ids = otu_ids_desc.reverse();
            console.log(otu_ids)
        });
        data.samples.forEach(element => {
            var otu_labels_all = element.otu_labels;
            var otu_labels_desc = otu_labels_all.slice(0, 10);
            var otu_labels = otu_labels_desc.reverse();
            console.log(otu_labels)
        });
    });
}
getSamplesData()