// data path
const path = "samples.json"


// get names for dropdown menu

d3.json(path).then(function(data){
    var names = data.names;
    console.log(names);
    var dropdownMenu = d3.select("#selDataset");
    names.forEach(element=> {
        dropdownMenu.append("option").attr("value",element).text(element);
    });
});

// set default plot
// function init() {
//     d3.json(path).then(function(data) {
//         // get first sample value
//         var sample_values_all = data.samples[0].sample_values;
//         var sample_values_desc = sample_values_all.slice(0, 10);
//         var sample_values = sample_values_desc.reverse();
//         var otu_ids_all = data.samples[0].otu_ids;
//         var otu_ids_desc = otu_ids_all.slice(0, 10);
//         var otu_ids = otu_ids_desc.reverse();
//         var otu_labels_all = data.samples[0].otu_labels;
//         var otu_labels_desc = otu_labels_all.slice(0, 10);
//         var otu_labels = otu_labels_desc.reverse();
        
//         console.log(otu_labels);
//         console.log(sample_values);
//         console.log(otu_ids);
//     });

// }
// init()
    
// d3.selectAll("selDataset").on("change", updatePlotly)

// Fetch the JSON data and save as variables
function updatePlotly() {
    d3.json(path).then(function(data) {
        // console.log(data.samples)
        // map(data.samples[0].sample_values);
        data.samples.forEach(element => {
            var sample_values_all = element.sample_values;
            var sample_values_desc = sample_values_all.slice(0, 10);
            var sample_values = sample_values_desc.reverse();
            // console.log(sample_values)
        });
        data.samples.forEach(element => {
            var otu_ids_all = element.otu_ids;
            var otu_ids_desc = otu_ids_all.slice(0, 10);
            var otu_ids = otu_ids_desc.reverse();
            // console.log(otu_ids)
        });
        data.samples.forEach(element => {
            var otu_labels_all = element.otu_labels;
            var otu_labels_desc = otu_labels_all.slice(0, 10);
            var otu_labels = otu_labels_desc.reverse();
            // console.log(otu_labels)
        });
    });
}
updatePlotly()
