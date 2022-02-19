async function reviewFormHandler(event) {
  event.preventDefault();

  const content = document
    .querySelector('textarea[name="review-body"]')
    .value;
    console.log();
  const product_id = location.toString().split("/")[
    location.toString().split("/").length - 1
  ];

  if (content) {
    const response = await fetch("/api/reviews/", {
      method: "POST",
      body: JSON.stringify({
        product_id,
        content
      }),
      headers: {
        "Content-Type": "application/json",
      }
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
