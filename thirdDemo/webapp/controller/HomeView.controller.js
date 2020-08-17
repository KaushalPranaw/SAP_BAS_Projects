// @ts-nocheck
sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/base/Log"
	],
	/**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * @param {typeof sap.base.Log} Log
     */
	function (Controller, Log) {
		"use strict";

		return Controller.extend("com.yash.thirdDemo.controller.HomeView", {
			onInit: function () {

            },
            onBeforeRendering: function () {
               window.message = "A random log message";
                Log.info(window.message);
            },
            onAfterRendering: function () {
                debugger;
            }
		});
	});
