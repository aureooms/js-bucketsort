

let scatter = function ( key , iterable , buckets ) {

	for ( let x of iterable ) buckets[ key( x ) ].push( x ) ;

} ;

exports.scatter = scatter ;
