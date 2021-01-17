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

function unpack(rows, index) {
    return rows.map(function(row) {
        return row[index];
    });
};

function buildBarPlot() {
        d3.json(path).then(function(data) {
            console.log(data.samples)
            var names = data.names;
            var name = names.indexOf("940");
            var sample_values = unpack(data.samples, 3);
            console.log(sample_values);
    });
};    
// d3.selectAll("selDataset").on("change", buildBarplot(subject)

// Fetch the JSON data and save as variables
// function buildBarPlot() {
//     d3.json(path).then(function(data) {
//         var names = data.names
//         var name = names.indexOf("940")
//         console.log(name)
//         // console.log(data.samples)
//         // map(data.samples[0].sample_values);
//         data.samples.forEach(element => {
//             var dataset = []
//             var sample_values_all = element.sample_values;
//             var sample_values_desc = sample_values_all.slice(0, 10);
//             var sample_values = sample_values_desc.reverse();
//             dataset.append(sample_values)
//             console.log(dataset[name])
//         });
//         data.samples.forEach(element => {
//             var otu_ids_all = element.otu_ids;
//             var otu_ids_desc = otu_ids_all.slice(0, 10);
//             var otu_ids = otu_ids_desc.reverse();
//             // console.log(otu_ids)
           
            
//         });
//         data.samples.forEach(element => {
//             var otu_labels_all = element.otu_labels;
//             var otu_labels_desc = otu_labels_all.slice(0, 10);
//             var otu_labels = otu_labels_desc.reverse();
//             // console.log(otu_labels)
//         });

//     });
// }
buildBarPlot()
