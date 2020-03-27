// The main javascript file for bdit_cot-monitoring.
// IMPORTANT:
// Any resources from this project should be referenced using SRC_PATH preprocessor var
// Ex: let myImage = '/*@echo SRC_PATH*//img/sample.jpg';

$(function () {
  if (window['CotApp']) { //the code in this 'if' block should be deleted for embedded apps
    const app = new CotApp("bdit_cot-monitoring",{
      hasContentTop: false,
      hasContentBottom: false,
      hasContentRight: false,
      hasContentLeft: false,
      searchcontext: 'INTER'
    });

    app.setBreadcrumb([
      {"name": "bdit_cot-monitoring", "link": "#"}
    ]).render();
  }
  let container = $('#bdit_cot-monitoring_container');
});
