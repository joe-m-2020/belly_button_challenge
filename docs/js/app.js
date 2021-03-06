function init() {
    const selectedSubjectID = parseInt(d3.select('#selDataset').property('value'));
    buildBarPlot(selectedSubjectID);
    popMetadata(selectedSubjectID);
    buildBubbleChart(selectedSubjectID)
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
    popMetadata(selectedSubjectID);
    buildBubbleChart(selectedSubjectID)
});

// Fetch the JSON data and save as variables
function buildBarPlot(selectedSubjectID) {
    d3.json(path).then(function(data) {
        const {metadata, samples} = data;

        // subject data handling
        const selectedSubject = metadata.find(item => item.id === selectedSubjectID);
        console.log(metadata);
        // end subject data handling

        // begin sample data handling
        const sample = samples.find(sample => parseInt(sample.id) === selectedSubjectID);
        const {otu_ids, otu_labels, sample_values} = sample;
        //  slice, reverse, and added OTU string to OTU IDs to render data
        const first10OTUIDsReversed = otu_ids.slice(0, 10).reverse();
        console.log(first10OTUIDsReversed);
        const first10OTULabelssReversed = otu_labels.slice(0, 10).reverse();
        console.log(first10OTULabelssReversed);
        const first10OSamplesReversed = sample_values.slice(0, 10).reverse();
        console.log(first10OSamplesReversed);
       
        var strOTUids = first10OTUIDsReversed.map(function(e) {return e.toString()});
        console.log(strOTUids)
        const str = 'OTU ';
        var joinedOTUids = [];
        for (var j = 0; j < strOTUids.length; j++) {
            console.log(strOTUids[j]);
            const str2 = str.concat(strOTUids[j]);
            joinedOTUids.push(str2);
        };
         // end sample data handling
        console.log(joinedOTUids);
        var trace1 = {
            x: first10OSamplesReversed,
            y: joinedOTUids,
            type: 'bar',
            orientation: 'h',
            text: first10OTULabelssReversed,
            marker: {

                width: 1
            }
        };
        var data1 = [trace1];

        Plotly.newPlot('bar', data1);
    });
};

function popMetadata(selectedSubjectID) {
    d3.json(path).then(function(data) {
        const {metadata} = data;

        // subject data handling
        const selectedSubject = metadata.find(item => item.id === selectedSubjectID);
        
        var subj_id = selectedSubject.id;
        var ethnicity = selectedSubject.ethnicity;
        var gender = selectedSubject.gender;
        var age = selectedSubject.age;
        var location = selectedSubject.location;

        // end subject data handling
        //build table for metadata
        var table = d3.select('#sample-metadata');
        table.html('');
        
        var trow = table.append('p');
        trow.text('ID: '+selectedSubject.id);
        console.log(selectedSubject.id);
        var trow = table.append('p');
        trow.text('Ethnicity: '+selectedSubject.ethnicity);
        console.log(selectedSubject.ethnicity);
        var trow = table.append('p');
        trow.text('Gender: '+selectedSubject.gender);
        console.log(selectedSubject.gender);
        var trow = table.append('p');
        trow.text('Age: '+selectedSubject.age);
        console.log(selectedSubject.age);
        var trow = table.append('p');
        trow.text('Location: '+selectedSubject.location);
        console.log(selectedSubject.location);


    });
};

function buildBubbleChart(selectedSubjectID){
    d3.json(path).then(function(data) {
        const {metadata, samples} = data;

        // subject data handling
        const selectedSubject = metadata.find(item => item.id === selectedSubjectID);
        console.log(metadata);
        // end subject data handling

        // begin sample data handling
        const sample = samples.find(sample => parseInt(sample.id) === selectedSubjectID);
        const {otu_ids, otu_labels, sample_values} = sample;

        const first10OTUIDsReversed = otu_ids.slice(0, 10).reverse();
        
        const first10OTULabelssReversed = otu_labels.slice(0, 10).reverse();
        
        const first10OSamplesReversed = sample_values.slice(0, 10).reverse();
        
        
        var strOTUids = first10OTUIDsReversed.map(function(e) {return e.toString()});
        
        const str = 'OTU ';
        var joinedOTUids = [];
        for (var j = 0; j < strOTUids.length; j++) {
    
            const str2 = str.concat(strOTUids[j]);
            joinedOTUids.push(str2);
        };
        // end sample data handling
        var trace2 = {
            x: first10OTUIDsReversed,
            y: first10OSamplesReversed,
            type: 'bubble',
            mode: 'markers',
            text:first10OTULabelssReversed,
            marker: {
                size: first10OSamplesReversed,
                color: first10OTUIDsReversed
            
            }
        };
        var data2 = [trace2];

        Plotly.newPlot('bubble', data2);
    });
};
