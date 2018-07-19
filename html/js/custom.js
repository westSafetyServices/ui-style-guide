    $(function () {
        $('#wssPopover1').popover({template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header wssSuccessPopoverHeader"></h3><div class="popover-body"></div></div>'});
	    $('#wssPopover2').popover({template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header wssInfoPopoverHeader"></h3><div class="popover-body"></div></div>'});
	    $('#wssPopover3').popover({template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header wssWarningPopoverHeader"></h3><div class="popover-body"></div></div>'});
	    $('#wssPopover4').popover({template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header wssErrorPopoverHeader"></h3><div class="popover-body"></div></div>'});
	    $('#wssPopover5').popover({template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header wssNeutralPopoverHeader"></h3><div class="popover-body"></div></div>'});
	    $('#wssDarkPopover').popover({template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header wssInfoPopoverHeader"></h3><div class="popover-body"></div></div>'});
      });
	$('[data-toggle="popover"]').popover();