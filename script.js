document.addEventListener("DOMContentLoaded", function ()
{
    const orderForm = document.getElementById("orderForm");
    const reviewForm = document.getElementById("reviewForm");

    if (orderForm)
    {
        orderForm.addEventListener("submit", function (e)
        {
            e.preventDefault();

            const nameInput = document.getElementById("customerName");
            const name = nameInput.value;

            alert(name + ", благодарим за поръчката!");

            orderForm.reset();
        });
    }
    
    if (reviewForm)
    {
        reviewForm.addEventListener("submit", function (e)
        {
            e.preventDefault();

            const reviewText = document.getElementById("reviewText").value;
            const reviewsContainer = document.getElementById("reviews");

            if (reviewText.trim() === "")
            {
                return;
            }

            const newReview = document.createElement("div");
            newReview.classList.add("review");
            newReview.textContent = reviewText;

            reviewsContainer.prepend(newReview);

            reviewForm.reset();
        });
    }
});

