sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/sce/zfins4hanapowerplanreconcile/test/integration/pages/ReconciliationsList.gen",
	"com/sce/zfins4hanapowerplanreconcile/test/integration/pages/ReconciliationsObjectPage.gen"
], function (JourneyRunner, ReconciliationsListGenerated, ReconciliationsObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/sce/zfins4hanapowerplanreconcile') + '/test/flp.html#app-preview',
        pages: {
			onTheReconciliationsListGenerated: ReconciliationsListGenerated,
			onTheReconciliationsObjectPageGenerated: ReconciliationsObjectPageGenerated
        },
        async: true
    });

    return runner;
});

