

var TableFilter = (function() {
 var Arr = Array.prototype;
		var inputsearch;
  
		function onInputEvent(search) {
			inputsearch = search.target;
			var table1 = document.getElementsByClassName(inputsearch.getAttribute('data-table'));
			Arr.forEach.call(table1, function(table) {
				Arr.forEach.call(table.tBodies, function(tbody) {
					Arr.forEach.call(tbody.rows, filter);
				});
			});
		}

		function filter(row) {
			var text = row.textContent.toLowerCase();
			console.log(text);
       
      		var value1 = inputsearch.value.toLowerCase();
			console.log(value1);
      
			row.style.display = text.indexOf(value1) === -1 ? 'none' : 'table-row';
		}

		return {
			init: function() {
				var inputs = document.getElementsByClassName('table-filter');
				Arr.forEach.call(inputs, function(input) {
					input.oninput = onInputEvent;
				});
			}
		};
 
	})();

  
 TableFilter.init(); 
