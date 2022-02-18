async function reviewFormHandler(event) {
  event.preventDefault();

  const review_text = document
    .querySelector('textarea[name="review-body"]')
    .value.trim();
  const product_id = location.toString().split("/")[
    location.toString().split("/").length - 1
  ];

  if (review_text) {
    const response = await fetch("/api/reviews", {
      method: "POST",
      body: JSON.stringify({
        product_id,
        content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".review-form")
  .addEventListener("submit", reviewFormHandler);
