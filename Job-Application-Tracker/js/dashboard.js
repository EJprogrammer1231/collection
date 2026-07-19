  const totalApplications = document.getElementById("total-applications");
  const totalInterviews = document.getElementById("total-interviews");
  const totalOffers = document.getElementById("total-offers");
  const totalRejected = document.getElementById("total-rejected");
  const totalWishlist = document.getElementById("total-wishlist");

  function updateTotalApplications() {
    totalApplications.textContent = applications.length;
  } 

  function updateTotalInterview() {
    const total_interview = applications.reduce((total,application) => {
      if (application.status === "interview") {
        return total + 1;
      }

      return total;
    }, 0);

    totalInterviews.textContent = total_interview;
  }

  function updateTotalOffers() {
    const total_offers = applications.reduce((total,application) => {
      if (application.status === "offer") {
        return total + 1;
      }

      return total;
    }, 0);

    totalOffers.textContent = total_offers;
  }

  function updateTotalRejected() {
    const total_rejected = applications.reduce((total,application) => {
      if (application.status === "rejected") {
        return total + 1;
      }

      return total;
    }, 0);

    totalRejected.textContent = total_rejected;
  }

  function updateTotalWishlist() {
    const total_wishlist = applications.reduce((total,application) => {
      if (application.status === "wishlist") {
        return total + 1;
      }

      return total;
    }, 0);

    totalWishlist.textContent = total_wishlist;
  }