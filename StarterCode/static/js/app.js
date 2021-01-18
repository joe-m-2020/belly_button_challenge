function init() {
    const selectedSubjectID = parseInt(d3.select('#selDataset').property('value'));
    buildBarPlot(selectedSubjectID);
}

// data path
const path = "samples.json";

d3.json(path).then(function(data){
    var names = data.names;
    console.log(names);
    var dropdownMenu = d3.select("#selDataset");
    names.forEach(element=> {
        dropdownMenu.append("option").property("value",element).text(element);
    });

    init();
});

  
// handle on click event
d3.select('#selDataset')
  .on('change', function() {
    const selectedSubjectID = parseInt(d3.select(this).property('value'));
    buildBarPlot(selectedSubjectID);
});

// Fetch the JSON data and save as variables
function buildBarPlot(selectedSubjectID) {
    d3.json(path).then(function(data) {
        const {metadata, samples} = data;

        // subject data handling
        const selectedSubject = metadata.find(item => item.id === selectedSubjectID);
        // end subject data handling

        // begin sample data handling
        const sample = samples.find(sample => parseInt(sample.id) === selectedSubjectID);
        const {otu_ids, otu_labels, sample_values} = sample;

        const first10OTUIDsReversed = otu_ids.slice(0, 10).reverse();
        console.log(first10OTUIDsReversed);
        const first10OUTOLabelssReversed = otu_labels.slice(0, 10).reverse();
        console.log(first10OUTOLabelssReversed);
        const first10OSamplesReversed = sample_values.slice(0, 10).reverse();
        console.log(first10OSamplesReversed);
        // end sample data handling

        // data.samples.forEach(element => {
        //     var sample_values_all = element.sample_values;
        //     var sample_values_desc = sample_values_all.slice(0, 10);
        //     var sample_values = sample_values_desc.reverse();
        // });

        // data.samples.forEach(element => {
        //     var otu_ids_all = element.otu_ids;
        //     var otu_ids_desc = otu_ids_all.slice(0, 10);
        //     var otu_ids = otu_ids_desc.reverse();
        //     // console.log(otu_ids)
        // });
        // data.samples.forEach(element => {
        //     var otu_labels_all = element.otu_labels;
        //     var otu_labels_desc = otu_labels_all.slice(0, 10);
        //     var otu_labels = otu_labels_desc.reverse();
        //     // console.log(otu_labels)
        // });
    });
}
