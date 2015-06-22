

let gather = function ( head , buckets , bi , bj ) {

	// output is head.next

	let last = head ;

	for ( ; bi < bj ; ++bi ) {

		let bucket = buckets[bi] ;

		if ( bucket.next === null ) continue ;

		last.next = bucket.next ;

		last = bucket.last ;

	}

} ;

exports.gather = gather ;
