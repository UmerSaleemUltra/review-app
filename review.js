document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;
    const reviewHTML = `
        <div class="review">
            <strong>${name}</strong> - Rating: ${rating}/5<br>${comment}
        </div>`;
    document.getElementById('reviews').innerHTML += reviewHTML;
    document.getElementById('reviewForm').reset();
});
