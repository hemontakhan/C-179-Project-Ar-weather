var coordinates = {}
$(document).ready(function(){
    getcoordinates()
})

function getcoordinates(){
  var searchParams = new URLSearchParams(windows.location.search)
  if(searchParams.has('source')&&searchParams.has('destination')){
      var source = searchParams.get('source')
      var destination = searchParams.get('destination')
      cooridnates.source_lat = source.split(';')[0]
      cooridnates.source_lon = source.split(';')[1]
      cooridnates.destination_lat = destination.split(';')[0]
      cooridnates.destination_lon = destination.split(';')[1]
   } else {
     alert('Co-ordinates are not selected properly')
     window.history.back()      
  }
}