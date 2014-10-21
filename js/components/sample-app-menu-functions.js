var setFileContent = function (fileName) {
    var span = document.getElementById('file-name');
    while (span.firstChild) {
        span.removeChild(span.firstChild);
    }
    span.appendChild(document.createTextNode(fileName));
}

$(document).ready(function () {
    /*var xmlObject = loadXMLDoc('samples/activated_stat1alpha_induction_of_the_irf1_gene.xml');
     
     setFileContent("activated_stat1alpha_induction_of_the_irf1_gene.sbgnml");
     
     (new SBGNContainer({
     el: '#sbgn-network-container',
     model : {cytoscapeJsGraph : sbgnmlToJson.convert(xmlObject)}
     })).render();
     
     var sbgnLayoutProp = new SBGNLayout({
     el: '#sbgn-layout-table'
     });*/

    $("body").on("change", "#file-input", function (e) {
        if ($("#file-input").val() == "") {
            return;
        }
        var fileInput = document.getElementById('file-input');
        var file = fileInput.files[0];
        var textType = /text.*/

        var reader = new FileReader();
        var result = "";

        reader.onload = function (e) {
            (new SBGNContainer({
                el: '#sbgn-network-container',
                model: {cytoscapeJsGraph:
                            JSON.parse(this.result)}
            })).render();
        }
        reader.readAsText(file);
        setFileContent(file.name);
        $("#file-input").val("");
    });

    /*$("#node-legend").click(function (e) {
     e.preventDefault();
     $.fancybox(
     _.template($("#node-legend-template").html(), {}),
     {
     'autoDimensions': false,
     'width': 420,
     'height': 393,
     'transitionIn': 'none',
     'transitionOut': 'none',
     });
     });
     
     $("#edge-legend").click(function (e) {
     e.preventDefault();
     $.fancybox(
     _.template($("#edge-legend-template").html(), {}),
     {
     'autoDimensions': false,
     'width': 400,
     'height': 220,
     'transitionIn': 'none',
     'transitionOut': 'none',
     });
     });
     
     $("#about").click(function (e) {
     e.preventDefault();
     $.fancybox(
     _.template($("#about-template").html(), {}),
     {
     'autoDimensions': false,
     'width': 300,
     'height': 320,
     'transitionIn': 'none',
     'transitionOut': 'none',
     });
     });*/

    $("#load-sample0").click(function (e) {/*
        var file = new Blob(['samples/Deneme.json'], {
            type: "text/plain;charset=utf-8;",
        });
        var textType = /text.*//*

        var reader = new FileReader();
        var result = "";

        
            (new SBGNContainer({
                el: '#sbgn-network-container',
                model: {cytoscapeJsGraph:
                            JSON.parse(this.result)}
            })).render();
        
        reader.readAsText(file);
        setFileContent(file.name);
        $("#file-input").val("");*/
    });

    $("#hide-selected").click(function (e) {
        sbgnFiltering.hideSelected();
    });

    $("#show-selected").click(function (e) {
        sbgnFiltering.showSelected();
    });

    $("#show-all").click(function (e) {
        sbgnFiltering.showAll();
    });

    $("#delete-selected").click(function (e) {
        sbgnFiltering.deleteSelected();
    });

    $("#neighbors-of-selected").click(function (e) {
        sbgnFiltering.highlightNeighborsofSelected();
    });

    $("#processes-of-selected").click(function (e) {
        sbgnFiltering.highlightProcessesOfSelected();
    });

    $("#remove-highlights").click(function (e) {
        sbgnFiltering.removeHighlights();
    });

    $("#layout-properties").click(function (e) {
        sbgnLayoutProp.render();
    });

    $("#perform-layout").click(function (e) {
        cy.layout();
    });

    $("#save-as-png").click(function (evt) {
        var pngContent = cy.png();
        window.open(pngContent, "_blank");
    });

    $("#load-file").click(function (evt) {
        $("#file-input").trigger('click');
    });

    $("#show-labels-full").click(function (evt) {
        cy.selector('node') // nasıl yapılacağını öğren ************************
                .css({
                    'shape': 'ellipse',
                    'width': 'mapData(weight, 30, 100,10, 80)',
                    'height': 'mapData(weight, 30, 100, 10, 80)',
                    'content': 'sdsdsds',
                    'text-valign': 'bottom',
                    'color': 'black',
                    'border-color': 'data(color)',
                    'border-width': 2
                            //'background-color': 'data(color)'
                })


    });

    $("#show-labels-shortened").click(function (evt) {
        $("#file-input").trigger('click');
    });


    $("#save-as-sbgnml").click(function (evt) {
        var deneme = cy.json().elements;
        var blob = new Blob([JSON.stringify(deneme, null, 4)], {
            type: "text/plain;charset=utf-8;",
        });
        saveAs(blob, "network.json")
    });

    $("body").on("click", ".biogene-info .expandable", function (evt) {
        var expanderOpts = {slicePoint: 150,
            expandPrefix: ' ',
            expandText: ' (...)',
            userCollapseText: ' (show less)',
            moreClass: 'expander-read-more',
            lessClass: 'expander-read-less',
            detailClass: 'expander-details',
            expandEffect: 'fadeIn',
            collapseEffect: 'fadeOut'
        };

        $(".biogene-info .expandable").expander(expanderOpts);
        expanderOpts.slicePoint = 2;
        expanderOpts.widow = 0;
    });
});