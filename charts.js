function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
   
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// Deliverable 1: 1. Create the buildChart function.
function buildCharts(sample) {
  // Deliverable 1: 2. Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

    // Deliverable 1: 3. Create a variable that holds the samples array. 
    var samples = data.samples;

    // Deliverable 1: 4. Create a variable that filters the samples for the object with the desired sample number.
    var resultsArray = samples.filter(sampleObject =>
        sampleObject.id == sample);
    // Deliverable 3: 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var metaData = data.metadata.filter(Obj => Obj.id == sample)
    // Deliverable 1: 5. Create a variable that holds the first sample in the array.
    var result1 = resultsArray[0];
    // Deliverable 3: 2. Create a variable that holds the first sample in the metadata array.
    var metaResult = metaData[0];
    // Deliverable 1: 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var ids = result1.otu_ids;
    var labels = result1.otu_labels;
    var values = result1.sample_values;

    console.log(ids);
    console.log(labels);
    console.log(values);
    // Deliverable 3: 3. Create a variable that holds the washing frequency.
    var washingFreq = parseFloat(metaResult.wfreq);

    // Deliverable 1: 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order 
    // so the otu_ids with the most bacteria are last. 
    var xticks = values.slice(0,10).reverse();
    var yticks = ids.slice(0,10).map(Obj => "OTU " + String(Obj)).reverse();

    // Deliverable 1: 8. Create the trace for the bar chart. 

    var trace = {
      x: xticks,
      y: yticks,
      type: "bar",
      text:labels.slice(0,10).reverse(),
      orientation :'h'
    }
    var barData = [trace];

    // Deliverable 1: 9. Create the layout for the bar chart. 
    var barLayout = {
      title: `<br> Top 10 Bacteria Cultures Found`,
      width:425, height:375
    };

    // Deliverable 1: 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar",barData,barLayout)

    // Deliverable 2: 1. Create the trace for the bubble chart.
    var bubbleTrace = {
      x: ids,
      y:values,
      text:labels,
      mode:"markers",
      marker : {
        color : ids,
        colorscale: "Earth",
        size: values
      }
    };

    var bubbleData = [bubbleTrace];
  

    // Deliverable 2: 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title: `Bacteria Cultures Per Sample`,
      showlegend: "false",
      xaxis: {title : "OTU ID"},
      hovermode:"closest",
      margin : {t:0}
    }

    // Deliverable 2: 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot("bubble",bubbleData,bubbleLayout);

    // Deliverable 3: 4. Create the trace for the gauge chart.
    console.log(data.metadata);
    console.log(metaResult);

    var gaugeTrace = {
      domain : {x:[], y :[]},
      value : washingFreq,
      title: {text:`Belly Button Washing Frequency<br><span style='font-size:13px'><br>Scrubs per Week</span>`, font:{size:16}},
      type:"indicator",
      mode:"gauge+number",
      gauge: {
        axis: {range: [null,10],tickwidth:2},
        bar : {color:"black"},
        steps: [
          {range: [0,2], color:"red"},
          {range: [2,4], color:"coral"},
          {range: [4,6], color:"yellow"},
          {range: [6,8], color:"#B9EA76"},
          {range: [8,10], color:"green"}
        ]
      }
    }
    console.log("Gauge params",gaugeTrace);
    var gaugeData = [gaugeTrace];
    
    // Deliverable 3: 5. Create the layout for the gauge chart.
    var gaugeLayout = {
      width:370, height:375, margin:{t:0,b:0,l:15,r:25}
    };
    // Deliverable 3: 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge",gaugeData,gaugeLayout);
  });
}
