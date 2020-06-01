import React from "react";

const Image = ({ props = {} }) => {
  const imageURL = props.hasOwnProperty("imageURL") ? props.imageURL.value : "";

  return (
    <div>
      <img
        style={{
          width: "100%",
        }}
        src={imageURL}
      />
    </div>
  );
};

export default Image;

export const schema = {
  name: "Image",
  props: {
    imageURL: {
      label: "Path to image",
      value:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVwAAACRCAMAAAC4yfDAAAAAMFBMVEXZ2dnV1dW2traqqqrOzs7Jycm+vr7c3Nytra2zs7PGxsa7u7vKysrY2NjS0tLDw8N7mvbnAAAC50lEQVR4nO3c0XKbMBRFUQSYK4FB//+3lW1wgHJAlGSStns92Q7uNLuMcoVTigIAAAAAAAAAAAAAAAAAAAAAAAAAAAD4W1nhLkhvh2TRVxf45ru/gR/MmsqXF/iq49xV+so7u6AI1fDd38OPVVfNpTPP2ur2WX+Xf87VuAVxNeJ+IeJ+ofNx01w8zKZb4mrn4zZl05RdPz0lrnY6bqgfE9gQ3PicuNrJuNYNr8NdGF8hrnYy7jDtxyzeXw+Iq52M29bTo2F8H3G1k3Hje6/rOuIeOXvm3qdHnLnHTsZ15bTmNuMCQVzt7LTQ3J+H2zBVJq52es4tY5Hm3HuYdhHE1U7HtVtZdiG+nxNX+4MLN1b0s7cQV9uMG4f84MTVNuK60Pg6uy5xtd/iWp3K9iHm1iWuto5rzet6V5n7oS5xtVXcPnSvByly3h9AXG0RNy0Jt+mZtd5tv2WJuNo8rkU/LErnDA3E1eZxy3L5Nefvx3WJq73j2uB/mxByhgbialPctMRuzbZdtx7U1gsxcbUpbve+ErNgcTE0WFeu/w2Iqz3jmvPqCoPd50NDGdP+YnkocbVHXLtV+idXWounc7UPrX1sM0bE1R5xG+/2fm65cfidhofnBvn9VeJqddWF8uigtBo8zuD32DtfGoir1b5qD8cta7rHlmL+Ap9EZMi7WG5tWCy0s6WBuFp23PVLblwaiKtlxbVmY1kelwbiallxty/uphE4LQ3E1XLiBnGIuRD5Dyc7juM6r8eJtB2OxJWO4prb2b09lwZPXOUgrtXV/hXztHUmrrIfN6U7+jSCNVfbjWvx+HM04mp7cWebXI242l7c9Wdqm4ir6bh9yPq9EOJqMq7+cGKJuJqIa0OV+dtixNW246bx9pbXlrg7NuNaW2X/Dilxta24Fg+3Dh/HElfbusdNF3rucfMZNu7OFHzg7kyfI21xL+G+Ynu4Ix4AAAAAAAAAAAAAAAAAAAAAAAAAAAD+W78Aqjkan4b2aooAAAAASUVORK5CYII=",
    },
  },
};
