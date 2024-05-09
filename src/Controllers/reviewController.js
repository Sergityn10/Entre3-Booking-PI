import "./../App"
function  fetchReviews () {
     fetch("https://localhost:8443/Booking_entrega2/rest/reviews")
      .then((response) => response.json())
      .then(data => setReviews(data))
}