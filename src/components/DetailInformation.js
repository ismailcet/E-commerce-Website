import React from "react";

const DetailInformation = () => {
  return (
    <div className="product-information">
      <h2 className="information-title">Product Information</h2>
      <hr />
      <div className="information-content">
        <div className="details">
          <p className="content-title">PRODUCT DETAILS</p>
          <p className="details-info">
            <span className="first-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
              ac bibendum accumsan, pellentesque magna diam.{" "}
            </span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
              elementum nec volutpat fusce nisl, adipiscing et sed egestas. Nec
              pulvinar leo posuere gravida sed. Arcu, non tellus faucibus
              suscipit malesuada elementum nec cras tristique. Lectus risus
              augue semper maecenas felis. Purus integer nulla id elementum sed
              tristique faucibus tristique.
            </span>
          </p>
        </div>
        <div className="care">
          <p className="content-title">PRODUCT CARE</p>
          <p className="care-info">
            <span>Hand wash using cold water.</span>
            <span>Do not using bleach.</span>
            <span>Hang it to dry.</span>
            <span>Iron on low temperature.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailInformation;
