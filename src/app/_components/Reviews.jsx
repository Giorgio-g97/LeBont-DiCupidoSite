import React from "react";
import ReviewCard from "./ReviewCard";

const Reviews = ({ dancing }) => {
  const reviewsUtenti = [
    {
      img: "https://lh3.googleusercontent.com/a-/ALV-UjVSXPSEDuaODWiijQOZfpNPjqngaa6pK4AL21B6lkDeslotMiOs=w75-h75-p-rp-mo-br100",
      review:
        "Ottima pasticceria senza glutine e senza lattosio, ho ritrovato il piacere di.mangiare 🥰 …",
      rating: 5,
    },
    {
      img: "https://lh3.googleusercontent.com/a-/ALV-UjVqtkxXGNnvBUiLnjchJCRTs68MkB_2uuEGVuV8wnFMtsXEQEcMyQ=w75-h75-p-rp-mo-ba3-br100",
      review: "TOP",
      rating: 5,
    },
    {
      img: "https://lh3.googleusercontent.com/a-/ALV-UjV0_GeHnvhvWlOtY6cfx63CufDH_CtlRBVHJ5iIjd1SkLywF1bQ=w75-h75-p-rp-mo-br100",
      review: "Torta vegana buonissima e gradita dai miei invitati!",
      rating: 5,
    },
    {
      img: "https://lh3.googleusercontent.com/a-/ALV-UjW36IGDRYli_F0MspYw6exjt1KLEES3OTVHxIhnq6wkw_GjV_aI=w75-h75-p-rp-mo-ba4-br100",
      review: "Cibo: 4 Servizio: 4 Ambiente: 4",
      rating: 4,
    },
  ];

  return (
    <div id="reviews" className="my-10 pt-40">
      <h1
        className={`${dancing.className} text-primary text-[50px] text-center`}
      >
        Dicono di noi
      </h1>
      <div className="flex flex-wrap justify-center gap-6 m-5">
        {reviewsUtenti.map((rev, i) => (
          <ReviewCard
            key={i}
            img={rev.img}
            review={rev.review}
            rating={rev.rating}
          />
        ))}
      </div>
      {/* <div>
        <iframe
          src="https://widgets.sociablekit.com/google-reviews/iframe/25463108"
          frameborder="0"
          width="100%"
          height="1000"
        ></iframe>
      </div> */}

      {/* Da mettere nel footer */}
      {/* <h1>Ci troviamo qui </h1>
      <iframe
        className="rounded-2xl shadow-2xl"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13986.009904072638!2d15.552752230781064!3d41.45381634257328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1339d934ac365e69%3A0x50f43dcd6517c0e0!2sLe%20Bont%C3%A0%20di%20Cupido!5e1!3m2!1sit!2sit!4v1726420325169!5m2!1sit!2sit"
        width="550"
        height="300"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe> */}
    </div>
  );
};

export default Reviews;
