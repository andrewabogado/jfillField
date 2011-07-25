/**
 * jQuery-Plugin "jfillField" | a simple input field population
 *
 * Dual licensed under MIT and GPL
 * 
 * @version: 0.1a, 07.22.2011
 *
 * @authors: Raymund Toquero
 *           toqz06@gmail.com
 *           Andrew Abogado
 *           me@andrewabogado.com
 *
 * @example: $('selector').jfillField({ fieldTarget: '#targetID', fieldValue: 'Your target value' });
 *
 */

(function( $ ){

  $.fn.jfillField = function( options ) {
  
    var settings = {
        fieldTarget  : '#defaultID',
        fieldValue   : 'default value'
    };

    return this.each(function() {        

        // If options exist, merge with our default settings

        if ( options ) { 
            $.extend( settings, options );
        }


        // jfillField functionality
        
        var thisField = $(this); // Variable to set the scope
        
        $(thisField).bind('click', function(){
         
            $(settings.fieldTarget).val(settings.fieldValue);
            
        });

    });

  };

})( jQuery );