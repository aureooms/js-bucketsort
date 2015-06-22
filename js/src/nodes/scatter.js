

let scatter = function ( key , head , buckets ) {

	// input is head.next

	// head.next should be deleted for garbage collection

	while ( true ) {

		head = head.next ;

		if ( head === null ) break ;

		buckets[ key( head.value ) ].last.next = head ;

	}

} ;

exports.scatter = scatter ;
