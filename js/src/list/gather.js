

let gather = function ( list , buckets , bi , bj ) {

	for ( ; bi < bj ; ++bi ) {

		let bucket = buckets[bi] ;

		for ( let x of bucket ) list.push( x ) ;

	}

} ;

exports.gather = gather ;
