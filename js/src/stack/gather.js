

let gather = function ( main , buckets , bi , bj ) {

	while ( --bj >= bi ) {

		let bucket = buckets[bj] ;

		while ( !bucket.empty( ) ) main.push( bucket.pop( ) ) ;

	}

} ;

exports.gather = gather ;
