

let scatter = function ( key , main , buckets ) {

	while ( !main.empty( ) ) {

		let x = main.pop( ) ;

		buckets[ key( x ) ].push( x ) ;

	}

} ;

exports.scatter = scatter ;
