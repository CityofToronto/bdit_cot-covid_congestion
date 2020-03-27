// The main javascript file for bdit_cot-monitoring.
// IMPORTANT:
// Any resources from this project should be referenced using SRC_PATH preprocessor var
// Ex: let myImage = '/*@echo SRC_PATH*//img/sample.jpg';

$(function () {
  // if (window['CotApp']) { //the code in this 'if' block should be deleted for embedded apps
  //   const app = new CotApp("bdit_cot-monitoring",{
  //     hasContentTop: false,
  //     hasContentBottom: false,
  //     hasContentRight: false,
  //     hasContentLeft: false,
  //     searchcontext: 'INTER'
  //   });

  //   app.setBreadcrumb([
  //     {"name": "bdit_cot-monitoring", "link": "#"}
  //   ]).render();
  // }
  let container = $('#bdit_cot-monitoring_container');
});

// -----------------------------------------------------------------------------
// CUSTOM CODE


function uiHandler(event) {
  // if (event.target.id === "vkt-menu") {
  //   ptcvolTOD = event.target.value; // "All day" initially
  //   showVktMap();
  //   updateTitles();
  // }

}

// -----------------------------------------------------------------------------
$(document).ready(function(){
  // ---------------------------------------------------------------------------
  // Chart SVGs
  // Fig 1 - TTI Summary lineChart
  // ttiSvg = d3.select(".tpdline")
  //   .append("svg")
  //   .attr("id", "ttiSummary");

  // Initial page load
  i18n.load(["/* @echo SRC_PATH *//i18n"], () => {
    settTtiLine.x.label = i18next.t("x_label", {ns: "tti-summary"}),
    settTtiLine.y.label = i18next.t("y_label", {ns: "tti-summary"}),
    d3.queue()
      .defer(d3.json, "/* @echo SRC_PATH *//data/fig1_tti_summary.json") // Fig 1 - daily trip lineChart in city
      .await(function(error, fig1) {
        // Load data files into objects

      });
  })
})

$(document).on("change", uiHandler);
